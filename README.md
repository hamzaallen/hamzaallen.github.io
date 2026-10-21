# Hamza El Byad — Recruiter-first ML Engineering portfolio

A lightweight, readable, five-page portfolio website with a matching PDF. It is an independent **presentation** of selected engineering and research experience; it does not publish the original company application or datasets.

## Open locally

```bash
cd ml-engineering-portfolio
python3 -m http.server 8770 --bind 127.0.0.1
```

Open `http://localhost:8770` in your browser. No npm installation, backend, paid service, or credentials are needed.

## Pages

- `index.html` — role summary, selected work, experience, technical focus, publications and contact.
- `projects/customquoteai.html` — private-source Applied AI engineering case study.
- `projects/nmr-modeling.html` — industrial regression and chemometrics case study.
- `projects/scientific-computing.html` — scientific research and computing case study.
- `research.html` — selected peer-reviewed publication links.
- `assets/Hamza_El_Byad_Portfolio.pdf` — matching downloadable portfolio document.

## Recruiter usability features

- Clear role identity and evidence on the first screen.
- Project summaries organized as contribution, outcome and technical methods.
- Detailed project pages for technical reviewers.
- Accessible headings, skip link, keyboard focus states, mobile navigation and no external assets.
- Company-related source, catalog identifiers, internal costs and screenshots excluded.

## Publishing considerations

Review employer-related public statements and current contact details before publishing. Keep the original company-owned source repository private unless publication is authorized.

To deploy to GitHub Pages, use a **separate public portfolio repository** and configure GitHub Pages to use GitHub Actions. The included workflow is a starting point; review it for organizational policy and security before enabling.


## Version 4 — recruiter review notes

- Homepage states the role and specialties immediately; project summaries emphasize problem, contribution and evidence.
- Mobile and supporting typography were enlarged, with darker secondary colors for legibility.
- Standalone `assets/Hamza_El_Byad_CV.pdf` is a **draft CV**; review dates, employment ownership wording, details and contact data before publishing.
- `assets/Hamza_El_Byad_Portfolio.pdf` is the matching four-page technical portfolio.
- LinkedIn URL was **not provided** and no fabricated link was added. Add your actual URL after reviewing it.
- This is a public-facing generalized case study, not the proprietary application or its source repository.
