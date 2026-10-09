# Panda Supply Montréal

Static site, no build step. Pages: index, catalogue, utilnova, adhesive, quote, thanks.

## GitHub Pages (preview)
1. Push this folder to a repo, then Settings > Pages > Deploy from branch > main, root.
2. All links are relative, so it works at username.github.io/repo-name/.
3. GitHub Pages cannot receive form posts. On github.io the quote form runs in preview mode: it shows the thank you screen and says nothing was sent.

## Netlify (live)
1. Drag the folder into Netlify, or connect the repo. No build command. Publish directory: the folder root.
2. Forms are detected on deploy (form name: quote, spam honeypot included).
3. Set where requests go: Site configuration > Forms > Form notifications > Add notification > Email, to sales.pandasupplyinc@gmail.com.
4. Submissions are also stored under Forms in the Netlify dashboard.
5. Submit one test request after the first deploy to confirm the email arrives.

## Content
Products, names and descriptions (EN/FR) live in data.js. Text strings live in app.js. Colours and type tokens are at the top of styles.css.
Demo video links go in the `video` field of a product in data.js.
