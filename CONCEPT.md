# Warteg Hub — Concept

**One line:** Wartegs in Jabodetabek order their daily ingredients together through WhatsApp. We buy in bulk at the pasar induk and from distributors, deliver before dawn, and they pay cash or QRIS on delivery.

All numbers below are working assumptions to validate in the pilot, not facts.

---

## 1. Problem

- A warteg buys Rp 500k–1M of ingredients almost every day, usually retail at the nearest pasar or from a langganan agent.
- The owner (or a family member) loses 2–3 hours every morning to the market trip, right before the busiest cooking window.
- Retail prices sit well above pasar induk / distributor prices. One warteg alone can't buy in bulk: no storage, no transport, no volume.
- Margins are a few thousand rupiah per plate, so 5–10% cheaper inputs is a direct, felt raise in take-home income.

## 2. Wedge: group procurement first

Why procurement, not ordering apps or loans:

| Option | Why not first |
|---|---|
| Ordering / delivery for eaters | Two-sided marketplace, needs demand and supply at once. GoFood/GrabFood already own eater habits. |
| Working capital loans | Needs an OJK license or a licensed partner, plus data we don't have yet. |
| Brand / franchise network | Competes head-on with existing warteg networks; doesn't save the owner money this week. |
| **Procurement** | Owner sees the saving on the first nota. No behaviour change: they already order daily. |

Procurement also builds the asset every later product needs: a daily, verified record of what each warteg buys and pays.

## 3. Who it's for

- **Primary:** warteg owners in Jabodetabek, typically family operators from Tegal and Brebes, cash-based, WhatsApp-native, skeptical of apps.
- **Also welcome:** any warung makan that cooks daily (nasi padang, soto, warung nasi).
- **Not for (yet):** kelontong / packaged-goods shops. B2B apps already serve them, and fresh produce is our edge.

## 4. How it works (operations)

| Time | What happens |
|---|---|
| 16:00 | Tomorrow's price list goes out by WhatsApp broadcast. Prices are locked for that delivery. |
| until 21:00 | Owners reply with their list (typed or a photo of a handwritten list). Ops staff key it into a sheet. |
| 22:00–02:00 | Orders are aggregated per zone. Buyers purchase rice at Pasar Induk Beras Cipinang, produce at Pasar Induk Kramat Jati, oil/eggs/poultry from distributors. Sorting and packing per warteg at a cross-dock near Kramat Jati. |
| 03:00–05:00 | Vans run fixed routes of ~20–25 drops each. Owner checks and weighs, then pays cash/QRIS to the driver. |
| before 08:00 | Complaints by photo on WhatsApp; credit on the next delivery. |

**Rules for owners:** pay on delivery (no tempo), minimum Rp 300k per drop, delivery included in price, no sign-up fee, no contract.

**Tooling at launch:** WhatsApp Business + Google Sheets + a route list. Build software only when a manual step breaks at volume (likely order intake parsing and route planning first).

## 5. Rollout across Jabodetabek

Dawn delivery only works with short routes, so we expand zone by zone, each zone opening when the waitlist is dense enough to fill routes.

| Wave | Zones | Status on site |
|---|---|---|
| 1 | Jakarta Timur, Kota Bekasi | Registration open |
| 2 | Jakarta Pusat, Selatan, Utara, Depok | Waitlist |
| 3 | Jakarta Barat, Tangerang, Tangerang Selatan, Bogor, Kab. Bekasi | Waitlist |

Beyond Jabodetabek: copy the playbook city by city (Bandung, Semarang, Surabaya), each with its own pasar induk and cross-dock. "All wartegs in Indonesia" is a sum of dense city clusters, not one national network.

## 6. Revenue model

1. **Supply margin (day one):** ~5% on goods sold. Hidden in the price, and the owner still pays less than retail because bulk buying captures a ~10–15% gap.
2. **Order commission (phase 2):** once 300+ wartegs are active, offices, pengajian and events order nasi kotak / catering from member wartegs. 8% commission, well under food delivery apps. Active procurement members get orders first, which ties the two products together.
3. **Later, only with data and a licensed partner:** working capital (tempo or stock loans) underwritten from purchase history; FMCG brand placements.

## 7. Unit economics (per delivery, assumptions)

| Line | Value |
|---|---|
| Average basket | Rp 650,000 |
| Gross margin (5%) | Rp 32,500 |
| Delivery cost per drop (van, driver, fuel; ~22 drops/route) | − Rp 11,000 |
| Spoilage / shrink (1% of basket) | − Rp 6,500 |
| Payment cost (QRIS share) | − Rp 1,000 |
| **Contribution per drop** | **≈ Rp 14,000** |

- Per warteg ordering 26 days/month: ≈ Rp 364k contribution.
- Zone fixed cost (cross-dock, buyers, packers, ops/admin): assume ~Rp 60M/month.
- **Break-even per zone ≈ 165 wartegs ordering daily.** If the real number lands far above ~250, the model needs a higher basket, a cheaper route, or a higher margin.

The owner's side (shown as an example on the site): a Rp 714k retail basket costs Rp 655k through the hub, saving Rp 59k/day, about Rp 1.5M/month.

## 8. Competition and incumbents

- **The real competitor is the owner's current langganan:** the pasar agent who knows them, delivers on familiar terms and often gives informal credit (utang). We compete on price and time saved, and we lose on credit at launch.
- **Startups that tried warung digitization** (e.g. Wahyoo, Warung Pintar) went broad: branding, apps, many services. We stay narrow: fresh daily ingredients, delivered at dawn.
- **B2B ordering apps for kelontong** focus on packaged goods. Fresh produce at dawn is a different operation.
- **Warteg associations and networks** (e.g. Kowantara, large warteg chains) are channels and partners, not targets. An association endorsement could be the fastest trust shortcut.

## 9. Biggest risks

| Risk | Mitigation |
|---|---|
| Owners need credit; cash-on-delivery limits adoption | Start with goods where the saving is largest (rice, oil, chicken). Add tempo only via a partner once purchase data exists. |
| Overnight price lock on volatile items (chili, shallots) | Cap lock on volatile items by quantity; buy volatile items first; shrink lock window if losses exceed budget. |
| Thin margins, delivery cost eats them | Minimum order, dense routes, zone-by-zone expansion, no expansion before a zone breaks even. |
| Langganan incumbents cut prices to keep owners | Our advantage is time saved (no 3am market trip), not only price. |
| Quality complaints on fresh goods | Photo-based complaints, credit next day, buyers paid on complaint rate. |
| Ops breaks at scale on WhatsApp + Sheets | Measure where it breaks; build software for that step only. |

## 10. Roadmap

| Phase | Goal | Exit criterion |
|---|---|---|
| 0 — Pilot | 30 wartegs in one kecamatan in Jakarta Timur, fully manual | 70% still ordering after 8 weeks |
| 1 — Wave 1 | Jakarta Timur + Kota Bekasi, first cross-dock | Zone contribution covers zone fixed costs |
| 2 — Catering | 300+ active wartegs; launch nasi kotak / office orders at 8% | Repeat corporate customers |
| 3 — Waves 2–3 | Rest of Jabodetabek, opened by waitlist density | Each new zone breaks even within ~6 months |
| 4 — Finance | Tempo / stock loans via a licensed partner, from purchase history | Default rate within partner limits |
| 5 — Next city | Replicate the playbook in one more city | Same pilot metrics |

## 11. Metrics that matter

- Weekly active ordering wartegs, and 8-week retention
- Orders per warteg per week; average basket
- Fill rate (ordered vs. delivered) and on-time before 05:00
- Complaint rate and credit issued
- Contribution per drop; zone break-even progress

## 12. Website

- Audience: warteg owners. Language: Bahasa Indonesia, plain and spoken. Must load on a cheap Android phone.
- Single call to action: WhatsApp sign-up with a prefilled message (number set in `WA_NUMBER` in `src/App.jsx`).
- No fake testimonials or traction. All prices shown are labelled as examples.
- React + Vite. `npm run dev` to work on it, `npm run build` for the static output in `dist/`.

## 13. Open decisions

- Real WhatsApp number and legal entity name.
- Exact supply margin (5% assumed) and catering commission (8% assumed).
- Whether to lock prices overnight for volatile items without caps.
- Whether to approach Kowantara or a large warteg network for a pilot endorsement.
