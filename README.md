# The Pentecostals of Manhattan — Website Redesign

A complete static website package for The Pentecostals of Manhattan (Manhattan, Kansas).

## Included pages

- `index.html` — Homepage
- `visit.html` — Plan Your Visit
- `connect.html` — Ministries / groups
- `watch.html` — Streaming / recent message
- `events.html` — Events / weekly worship
- `about.html` — Leadership, mission, beliefs
- `give.html` — Giving
- `contact.html` — Prayer / contact
- `privacy.html` — Privacy overview

## Design system

- Original POM-specific direction built around “Life gets better here.”
- Warm off-white, near-black, and a high-energy coral accent.
- One sans-serif system font family for fast loading and straightforward editing.
- Responsive editorial layouts, image-led storytelling, scroll reveals, mobile navigation, ticker motion, accordion beliefs, and next-Sunday date logic.
- Reduced-motion support is included.

## Run locally

No build step or package manager is required.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

You can also open `index.html` directly in a browser, although a local server is recommended.

## Deploy to Vercel

1. Put the contents of this folder in a Git repository.
2. Import the repository into Vercel.
3. Framework preset: **Other**.
4. Build command: leave empty.
5. Output directory: `.`
6. Deploy.

`vercel.json` already includes clean URLs and basic security headers.

## Important production notes

### Giving

The current POM website routes giving through Tithe.ly, but its public link resolves to Tithe.ly’s generic giving shell when fetched outside the existing site. The redesign therefore links to that provider. Before launch, replace the URL in `give.html` with POM’s church-specific Tithe.ly giving URL so visitors land directly on the correct organization.

Search for:

```html
https://tithe.ly/give_new/www/
```

and replace it with the exact POM giving URL.

### Forms

The Plan Your Visit and Contact forms intentionally use an email fallback. When submitted, they open the visitor’s email app with the form details addressed to `rev.dillon@pomchurch.life`.

For production, these can be swapped to:

- Planning Center Forms
- Tithe.ly People / Forms
- Church Center
- Formspree
- Basin
- a Vercel serverless endpoint + Resend

The form markup is already structured for a straightforward endpoint integration.

### Events

`events.html` shows the recurring Sunday gathering and directs visitors to POM’s active social channels for current special events. For a production CMS workflow, connect this section to Planning Center, Tithe.ly Events, Google Calendar, or another events source.

### Photography

The bundled photography was downloaded from POM’s current public website and is listed in `SOURCES.md`. Confirm the church has deployment rights to those photographs before publishing this redesign.

## Editing global styles

Main styles:

`assets/css/styles.css`

Main behavior:

`assets/js/app.js`

Brand mark:

`assets/icons/mark.svg`

Primary design tokens are at the top of `styles.css`:

```css
--ink: #111111;
--paper: #f4f0e9;
--accent: #ff4b2b;
```

## Contact details currently used

- Sunday: 10:30 AM
- 530 Richards Dr., Manhattan, KS 66502
- (316) 755-8767
- rev.dillon@pomchurch.life
- Instagram: `@thepomks`
# pomchurch
