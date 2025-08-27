# Portfolio

Lightweight, responsive personal portfolio with the following sections:

- Profile (name, title, bio, photo)
- Featured Projects (grid of 3–5 projects with links)
- Resume (download + optional in-browser embed)
- Contact (name, email, message)

## Getting started

1. Open `index.html` directly in your browser, or serve locally:
   - Python: `python -m http.server 8080`
   - Node: `npx serve . -l 8080`

2. Replace placeholder content:
   - Profile photo: put an image at `assets/profile.jpg` (or update the path in `index.html`).
   - Projects: edit the cards in the `#projects` section of `index.html`.
   - Resume: drop your PDF at `resume/resume.pdf`.
   - Contact: update the submit handler in `script.js` to send to your backend or a service.

## Customize

- Colors, spacing, and breakpoints are in `styles.css`.
- You can add more projects by duplicating a `.project-card` in `index.html`.
- If embedding the resume is not needed, remove the `<object>` block in `#resume`.

## Deploy

Host the contents of this folder on any static host (GitHub Pages, Netlify, Vercel, S3, etc.).

## Notes

- The contact form currently performs client-side validation and shows a success message. Wire it to your backend or a form service for real submissions.
- Keep images small to ensure quick load times.
A personal portfolio, highlighting key information 
