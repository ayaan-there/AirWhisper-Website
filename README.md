# AirWhisper — landing site

Marketing site for AirWhisper, an assistive communication app that turns Apple
Watch wrist movement into speech and text. Built with Next.js App Router and
Tailwind, with a small custom CSS design system.

## Design

Swiss / International Typographic Style meets a technical instrument panel:

- **Type**: Archivo for display and body, IBM Plex Mono for labels and data.
- **Colour**: cool paper `#eef0ea`, ink `#0b0d0e`, one signal blue `#1a46f0`.
- **Form**: zero border radius, hairline rules, a 12-column grid, asymmetric
  left-aligned composition.
- **Motion**: one orchestrated hero entrance and a looping gesture trace. All
  animation is disabled under `prefers-reduced-motion`.
- **Accessibility**: skip link, visible focus rings, AA contrast, semantic
  landmarks, keyboard-operable mobile navigation, reduced-motion support.

## Setup

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Structure

```text
app/
  layout.tsx            fonts, metadata, viewport
  page.tsx              landing page composition
  globals.css           design tokens, layout, components, prose styles
  icon.svg              favicon
  not-found.tsx         branded 404
  how-to-use/           user guide — setup, features, tutorials, carousel
  privacy-policy/       legal page
  terms-of-service/     legal page
components/
  Nav, Hero, Problem, Stats, GuideTeaser, ThreeWaysCarousel, Features, Privacy, CTA, Footer
  ui/
    Button, Wordmark, SignalPanel
public/
  images/how-to-use/    guide images + AirWhisper logo (light/dark)
  content/how-to-use/   downloadable Complete_Guide (md/html/docx) + Keynote.pdf
                       + app tutorial clips as mp4 (videos/*.mp4)
                       + content/chesis watch render (public/images/how-to-use/chesis.png)
```

`components/ui/` also contains retired components from the earlier visual
direction (`Scanner`, `ParticleField`, `Preloader`, etc.) and
`public/images/hero-gesture.jpg`. They are not imported, and can be deleted in a
follow-up cleanup.

## Content

Product claims are drawn from the app's privacy policy and terms: AirWrite,
OrientWrite, SurfaceTap, QuickSpeak, CoreMotion, CoreML, on-device recognition,
opt-in federated learning, and five saved contacts. The early-access form opens
a prefilled email to `airwhisper@proton.me`; there is no backend submission.

The step-by-step user instructions live on the separate `/how-to-use` page
(linked from the footer and header). It uses the full Complete Guide content —
Apple Watch setup, Quick Speak, Surface Tap, AirWrite, OrientWrite, actions,
iPhone companion setup, and troubleshooting. Feature cards and the Quick
Phrases demo show the app's own How-to tutorial clips inside the Apple Watch
hardware render (`content/chesis.heif`); the watch-screen recordings live in
the swipeable AirWrite / OrientWrite / Surface Tap carousel and the patient
demo plays as the Target Conditions background. All `.mov`/`.heif` sources
from `content/` are transcoded/converted for the web (H.264 mp4 / PNG).
