# Competition demo: RE-THREAD Intelligence

## Before you present

1. Open the hosted app or start the static app locally.
2. Click **Reset demo → Reset demo data**.
3. Use desktop fullscreen at 100% zoom for the clearest view.
4. The **Present demo** button contains six presenter cards. Actions create a return, approve a simulated correction, load synthetic results and open employer access. Close a card to explore its underlying screen.
5. For a smoother live presentation, use the manual sequence below. All values are USD.

## 4–5 minute manual walkthrough

### 0:00–0:35 — Operating thesis

**Screen:** Pilot overview.

“ProWear should gain Nova's capabilities without destroying its speed. RE-THREAD Intelligence is the operating layer for that selective integration. We capture why products come back, turn recurring issues into reviewed corrections, and expand only when the economics and customer experience both hold up.”

“The case gives us a 25% return rate. Twenty-two percent is a test target, not an achieved outcome. Everything you see at order level is synthetic demonstration data.”

### 0:35–1:10 — Capture and explain the signal

**Click:** Return capture. Enter `LIVE-2401`; leave NV-101, size M and Too small selected. Add `Shoulders tighter than the published chart.` Save.

“This record preserves the SKU, purchased size, reason and channel. It does not restrict the customer's refund rights. Duplicate order/SKU submissions are rejected.”

**Click:** Fit diagnostics → Everyday Oxford M → Inspect.

“We have a size-level concentration, not just a high overall returns count. The panel shows the actual numerator, shipped denominator and repeated reason. Those transparent thresholds trigger investigation; they do not prove the garment is defective.”

### 1:10–1:45 — Make a reviewed correction

**Click:** Create correction draft → Review & approve.

Enter `Demo review: sample shoulder measurements differ from the published fit chart; product lead authorizes a controlled chart correction.` Check the review confirmation. Approve.

“The system proposes an action; Nova's product team owns the decision. A fit signal calls for a measurement and size-chart review. A fabric signal calls for supplier specification and batch review. This approval is simulated for the demonstration.”

### 1:45–2:35 — Show evidence and a failure condition

**Click:** Experiment lab → Load synthetic test results.

“This is a separate synthetic experiment: equal matured cohorts of 2,000 shipped orders. The control returns 25%; treatment returns 22%. The absolute improvement is three percentage points, not three percent.”

“Sixty avoided returns at $35 retained contribution, less $1,500 test cost, gives $600 of pilot net contribution. The displayed uncertainty interval is positive in this synthetic example. Repeat purchase is descriptive, not proven causal improvement.”

**Uncheck:** Delivery parity maintained.

“Even with favorable financial numbers, the gate switches to Hold. We cannot manufacture savings by worsening delivery, satisfaction or refund rights.”

**Recheck** delivery parity.

### 2:35–3:50 — Employee commerce closes the loop

**Click:** Employee storefront. Select North Studio, use EMP-1042, Verify. Show denial.

“Employer permission comes first. A prospective employer cannot access the catalogue until authorization is verified.”

Select Atlas Design Co., EMP-1042, Verify. Review an Oxford size M order. Opt in. Place demo order.

“The employee opts in. The $110 order can use $30 sponsor credit and $80 employee payment. That is still $110 revenue, not $140. There is no real payment in this prototype.”

**Click:** Simulate dispatch → Simulate delivery → Register return → Too small → Capture return.

“The dedicated consumer 3PL handles the parcel and normal return process. Now this employee-channel return lands in the same diagnostic loop. The delivered order also updates the denominator. This is how the two pilots reinforce each other.”

### 3:50–4:30 — Close on economics and governance

**Click:** Impact & governance.

“The $1.7M annual uplift is a scenario: two million orders, a three-point reduction, $35 retained contribution and $400,000 annual cost. We do not add the $600 test result to it.”

“The early employee pilot assumes $8,250 contribution before fixed costs. Real contracts, participation and incrementality must be verified. Our recommendation is controlled expansion when evidence, contribution and customer protections agree—not automatic full integration.”

## Likely judge questions

**Is this AI?**
The current prototype is an explainable rules engine. It demonstrates the capture-to-decision workflow without pretending to have trained a model. With a validated dataset, text clustering and cohort-adjusted anomaly detection could help prioritize reviews; decisions would still retain human approval and uncertainty reporting.

**How do you know a lower return rate is caused by the correction?**
We do not infer causality from the diagnostic ledger. The next step is a pre-specified controlled test with balanced exposure, mature return windows and review of SKU, size, customer and batch differences. The prototype's experiment is synthetic.

**Why use shipped orders as a denominator?**
Raw return counts favor high-volume SKUs. A rate needs shipped exposure. This demo assumes one unit per shipped order and increments exposure for delivered demo employee orders; production must reconcile order lines, units and partial returns.

**Could the gate be bypassed?**
Yes, this is client-side simulated access. Production requires server-side employer authorization, employee authentication, tenant isolation and signed permissions. Do not use the demo for real employee or customer data.

**Why not merge warehouses?**
ProWear's pallet capabilities do not automatically fit Nova's consumer parcel and return needs. The case explicitly protects Nova's dedicated consumer 3PL and four-week sourcing.

**Is the $1.7M proven?**
No. It is the deck's annual scenario. The UI labels it as modeled, exposes the assumptions and separates it from simulated pilot evidence.

**Why three employers when only two are allowed?**
Three employers is the commercial pilot target. The fictitious demo deliberately leaves one permission pending to demonstrate that participation targets never override access controls.

**What happens to sponsor credit on a return?**
The prototype records the return but does not settle refunds or restore credit. Production must split the refund correctly between employee and sponsor under the agreed policy, with the commerce/payment provider handling settlement.

**Does this improve the acquisition valuation automatically?**
No. Operational evidence informs underwriting. It cannot replace quality-of-earnings work, contract diligence or the deal's cash/debt/working-capital bridge.
