# RE-THREAD Intelligence

A working competition prototype for **Project RE-THREAD: ProWear × Nova**, by **Case!Please**.

## Open the demo

Hosted preview: https://rethread-intelligence-aarryan.gratefulperch16.chatgpt.site

Click **Present demo** for a six-step guided walkthrough with presenter cues and actual state changes. Click **Reset demo** before presenting to restore the starting dataset.

The hosted preview uses the owner's ChatGPT Site access. The repository is self-contained and can be hosted publicly with GitHub Pages, any static web host, or locally. No API key, package installation or build is needed.

## Case interpretation

The requested “slides 4 and 5” are the deck's labeled **04 | Integration** and **05 | Brand**, which are PDF pages **6 and 7** after the cover and executive summary.

The prototype implements the operating thesis: combine evidence and controls while preserving Nova's four-week sourcing, brand authority, Shopify checkout and dedicated consumer 3PL.

| Case requirement | Working implementation |
| --- | --- |
| Capture SKU / size / reason | Structured intake, channel tagging, duplicate protection, searchable ledger, CSV export |
| Identify repeated fit / fabric issues | SKU × size denominators, repeated reason counts, transparent priority rules |
| Correct sizing pages / supplier specifications | Reviewable action drafts, named owners, evidence entry and approval |
| Test against control SKUs | Explicitly synthetic mature control/treatment comparison, uncertainty interval and repeat rates |
| Track retained contribution / repeats | Separate pilot net, annual scenario calculator, guardrail gates, JSON evidence report |
| Gated employee workflow | Employer permissions → employee roster → private catalogue → opt-in / sponsor credit → 3PL states → shared returns loop |

## Run locally

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. Serve over HTTP; ES modules are not designed for opening through `file://`.

```sh
npm test
```

Uses Node's built-in test runner. No runtime dependencies. Fonts use Google Fonts if reachable, with system-font fallbacks. All icons and apparel illustrations are local SVG markup.

## Presentation

See [DEMO_GUIDE.md](DEMO_GUIDE.md) for the 4–5 minute competition script, clickable sequence and judge Q&A. The in-app guide can also drive the demonstration.

Employee access examples:

- **Atlas Design Co. / EMP-1042**: allowed.
- **Meridian Services / EMP-1042**: allowed.
- **North Studio / EMP-1042**: denied while employer permission is pending.
- Any employer with an unlisted employee ID: denied.

All employers and employee identifiers are fictitious. A $30 sponsor-credit balance can be spent only once per reset. No payment is taken. Orders progress through Confirmed → Dispatched → Delivered → Return captured; returned units feed the same diagnostic engine. Delivered new orders extend the synthetic cohort denominator.

## Evidence and economic integrity

- **Case facts:** 25% Nova return rate; four-week sourcing model.
- **Deck assumptions:** 22% test target; 2M annual shipped orders; $35 retained contribution; $400,000 annual implementation cost.
- Annual scenario: `2,000,000 × 0.03 × $35 − $400,000 = $1,700,000`.
- The integration slide includes an unquantified “pilot contribution” subtraction. The app follows the explicit Appendix A1 formula, rather than inventing another deduction.
- Early employee hypothesis: `2,000 × 15% × $110 × 25% = $8,250` before fixed costs.
- Mature employee hypothesis: `150,000 × 15% × 1.2 × $110 × 20% = $594,000` per year.
- **Synthetic diagnostic dataset:** 250 return records across 1,000 shipped units, four products and 16 size cohorts. Manual return capture assumes another return from the existing shipped cohort.
- **Separate synthetic experiment fixture:** control 500/2,000; treatment 440/2,000. Absolute difference 3pp, relative reduction 12%; approximate 95% interval 0.37–5.63pp. Pilot net `60 × $35 − $1,500 = $600`.
- Experiment data is a separate matured matched-cohort illustration, not derived from the diagnostic ledger and not the result of a live randomized test.
- The $600 pilot net is never added to the annual synergy figure. Sponsor credit is a payment source, not additional revenue.

## Explainable intelligence

Group records by SKU and purchased size. Count each reason. Flag repeated reasons at five or more reports. Mark a group high priority when a repeated reason and a return rate of at least 30% coexist. Display numerator, denominator, dominant-reason share and proposed review action.

These are configurable prototype rules, not trained AI, statistical confidence in root cause, or evidence of causality. High priority means investigate. Product and quality teams validate measurements / supplier findings before approving a correction.

Scale gate requires loaded synthetic test evidence, positive pilot net, a positive lower confidence bound, and all four customer-experience checks. It produces **Eligible for human review**, never automatic approval.

## Production boundaries

This is a browser-local functional prototype, not a production security or commerce system. No real PII should be entered. Session data lives in localStorage; it is not synchronized across users. A refresh preserves it; Reset clears it. The employer gate is a UI simulation, not secure authorization. Source, roster and synthetic catalogue data are inspectable client-side.

Production would require server-side tenant isolation and RBAC; employer SSO or verified invitations; signed eligibility data; consent and retention policies; Shopify order/return webhooks; deduplicated event ingestion; order-level shipment denominators; provider-led payment/refund processing; 3PL integration; immutable audit history; approved SKU-level experiment assignments; mature return windows; privacy-preserving analytics; and real measurement/supplier evidence. Employer contract, garment certification and sustainability claims need independent verification.

## Files

- `dist/index.html` – application entry.
- `dist/styles.css` – existing layout and responsive structure.
- `dist/brand.css` – ProWear × NovaThreads visual identity: tailored navy, lavender, acid yellow, woven graphics and apparel-label styling.
- `dist/app.js` – six application views, local state and guided demo.
- `dist/engine.js` – seed data, diagnostics, economics, access and order rules.
- `tests/engine.test.js` – business-flow and financial checks.
- `DEMO_GUIDE.md` – competition walkthrough and Q&A.
- `.github/workflows/check.yml` – automated checks on push and PR.

To use GitHub Pages, select **Settings → Pages → Deploy from a branch → main / (root)**. The root page forwards to the static `dist/` app. Publication depends on the repository's Pages settings; pushing source alone does not prove Pages is live.

## Team

Aarryan Kumar Khatri · Aditya Kumar · Kunal · Vibhu Vedant Goel

**Case!Please — FMA Gargi College × FIC DDUC**

## Visual identity

RE-THREAD is styled as a shared operations extension. ProWear Solutions contributes structured midnight-blue surfaces and precise controls; NovaThreads contributes lavender, acid-yellow accents, expressive typography and apparel-label details. The employee storefront gives NovaThreads more visual emphasis while preserving the same layout, data and workflows. The wordmarks are prototype design treatments, not supplied official brand assets.
