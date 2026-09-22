# Dr. Zaman's Dental Clinic website

A lightweight, Bangla-first static website for Dr. Zaman's Dental Clinic. It uses plain HTML, CSS, and JavaScript, with no build step, package installation, or paid service required.

## Run locally

Open `index.html` in a browser. For a local web server, run one of these from the project folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Free deployment

### Netlify

1. Create a GitHub repository and add these project files.
2. In Netlify, choose **Add new site → Import an existing project** and select the repository.
3. Leave the build command and publish directory blank (or set the publish directory to `.`).

The included `netlify.toml` also configures the site for direct static publishing.

### GitHub Pages

1. Push the project files to a GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose the default branch and `/ (root)`, then save.

The project is plain static HTML, so the same files work on both hosts. A free provider subdomain is available; a custom domain may have a separate registration cost.

## Update before launch

- Confirm the phone/WhatsApp number and clinic address.
- Add the confirmed chamber schedule if you want to display it.
- Replace the illustrated doctor portrait and before/after placeholders only with approved assets and patient consent.
- Set a canonical site URL and social sharing image after choosing the final domain.

The appointment form creates a prefilled WhatsApp message. It does not store submissions or confirm an appointment automatically.
