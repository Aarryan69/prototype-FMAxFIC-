export const products = [
 {sku:'NV-101',name:'Everyday Oxford',type:'SHIRT',color:'#aebfbf',price:110,shipped:{S:70,M:120,L:90,XL:40}},
 {sku:'NV-204',name:'Studio Wide-Leg',type:'TROUSER',color:'#657386',price:110,shipped:{S:50,M:90,L:70,XL:30}},
 {sku:'NV-308',name:'Essential Knit',type:'KNIT',color:'#c4b7a5',price:110,shipped:{S:60,M:80,L:60,XL:40}},
 {sku:'NV-412',name:'Utility Overshirt',type:'JACKET',color:'#718677',price:110,shipped:{S:30,M:60,L:70,XL:40}}
];
export const reasons=['Too small','Too large','Fabric irritation','Quality defect','Style preference'];
export const employers=[{id:'atlas',name:'Atlas Design Co.',eligible:800,approved:true},{id:'meridian',name:'Meridian Services',eligible:700,approved:true},{id:'north',name:'North Studio',eligible:500,approved:false}];
export function seedState(){
 const records=[];const counts=[[8,42,20,10],[8,16,18,6],[10,32,16,4],[5,15,28,12]];
 products.forEach((p,pi)=>Object.keys(p.shipped).forEach((size,si)=>{for(let i=0;i<counts[pi][si];i++){
 let reason=reasons[(i+si)%5];if(pi===0&&size==='M'&&i<31)reason='Too small';if(pi===2&&size==='M'&&i<21)reason='Fabric irritation';
 records.push({id:`R-${1001+records.length}`,order:`ORD-${1001+records.length}`,sku:p.sku,size,reason,channel:i%4===0?'Employee':'D2C',note:'Synthetic pilot return',date:'2026-11-14'});
 }}));
 return {version:1,records,actions:[],experiment:false,session:null,orders:[],audit:[],scenario:{orders:2000000,improvement:3,contribution:35,cost:400000},guardrails:{refund:true,delivery:true,csat:true,speed:true},storeCredit:30};
}
export function diagnostics(records,orders=[]){return products.flatMap(p=>Object.entries(p.shipped).map(([size,baseShipped])=>{
 const shipped=baseShipped+orders.filter(o=>o.sku===p.sku&&o.size===size&&o.status==='Delivered').length;
 const rs=records.filter(r=>r.sku===p.sku&&r.size===size);const counts=Object.fromEntries(reasons.map(r=>[r,rs.filter(x=>x.reason===r).length]));const dominant=Object.entries(counts).sort((a,b)=>b[1]-a[1])[0];
 const repeated=dominant[1]>=5;const rate=rs.length/shipped;const elevated=rate>=.3;const kind=dominant[0].includes('Fabric')||dominant[0]==='Quality defect'?'Supplier specification':'Sizing guidance';
 return {key:p.sku+'-'+size,product:p,sku:p.sku,size,shipped,returns:rs.length,rate,reason:dominant[0],count:dominant[1],share:rs.length?dominant[1]/rs.length:0,repeated,elevated,priority:repeated&&elevated?'High':repeated?'Review':'Monitor',kind};
})).sort((a,b)=>(b.repeated&&b.elevated)-(a.repeated&&a.elevated)||b.rate-a.rate);}
export function capture(state,input){
 const p=products.find(x=>x.sku===input.sku);if(!p||!Object.hasOwn(p.shipped,input.size)||!reasons.includes(input.reason))throw new Error('Choose a valid SKU, size and reason.');
 const order=input.order.trim();if(!/^[a-zA-Z0-9-]{3,40}$/.test(order))throw new Error('Order ID must contain 3–40 letters, numbers or hyphens.');
 if(state.records.some(r=>r.order.toLowerCase()===order.toLowerCase()&&r.sku===input.sku))throw new Error('This order and SKU already has a return record.');
 if(!['D2C','Employee'].includes(input.channel))throw new Error('Choose a valid channel.');
 if(state.records.filter(r=>r.sku===input.sku&&r.size===input.size).length>=p.shipped[input.size]+state.orders.filter(o=>o.sku===input.sku&&o.size===input.size&&o.status==='Delivered').length)throw new Error('Returns cannot exceed this cohort’s shipped units.');
 const r={...input,order,note:input.note.slice(0,240),id:'R-'+(1001+state.records.length),date:new Date().toISOString().slice(0,10)};state.records.push(r);return r;
}
export function impact(s){return s.orders*s.improvement/100*s.contribution-s.cost;}
export function experimentResult(){const n=2000,control=500,treatment=440;const difference=control/n-treatment/n;const se=Math.sqrt((control/n*(1-control/n)+treatment/n*(1-treatment/n))/n);return{n,control,treatment,difference,lower:difference-1.96*se,upper:difference+1.96*se,net:(control-treatment)*35-1500};}
export function gate(state){const r=experimentResult();if(!state.experiment)return {label:'Awaiting experiment',status:'pending'};if(Object.values(state.guardrails).some(x=>!x))return{label:'Hold · guardrail failed',status:'hold'};if(r.lower<=0||r.net<=0)return{label:'Hold · evidence insufficient',status:'hold'};return{label:'Eligible for human review',status:'pass'};}
export function authorize(employer,employee){const e=employers.find(x=>x.id===employer);if(!e?.approved)throw new Error('Employer permission is pending. Access remains blocked.');if(employee.trim().toUpperCase()!=='EMP-1042')throw new Error('Employee not on the demo eligibility roster. Use EMP-1042.');return {employer:e.id,employee:'EMP-1042'};}
export function placeOrder(state,sku,size,useCredit){const e=employers.find(x=>x.id===state.session?.employer);if(!e?.approved||state.session?.employee!=='EMP-1042')throw new Error('Verify employer permission and employee eligibility first.');const p=products.find(x=>x.sku===sku);if(!p||!Object.hasOwn(p.shipped,size))throw new Error('Choose a valid product size.');const credit=useCredit?Math.min(state.storeCredit,p.price):0;state.storeCredit-=credit;const o={id:'EMP-ORDER-'+(state.orders.length+1),sku,size,price:p.price,credit,payable:p.price-credit,employer:e.name,status:'Confirmed',returned:false};state.orders.push(o);return o;}
