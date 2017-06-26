# Contributing

## Setup

- Clone the repo
- `npm install`
- generate a nonce to use for your localtunnel subdomain (e.g. https://www.uuidgenerator.net/)
- edit the `.env` file to set `SUBDOMAIN=` to your nonce
- [Create a GitHub App](https://github.com/settings/apps/new).
  - webhook secret: development
  - homepage URL, authorization callback URL, and webhook URL: https://`$NONCE`.localtunnel.me
  - permissions: _read & write_ on "Issues" (we don't need permissions on issue comments)
  - generate a private key (gitignore it in your app)
- edit the `.env` file to set `APP_ID=` to the ID of your saved GitHub App
- install the application on a test repo

## Development

Run the app with:

```
npm start
```

To see the payloads that get delivered to the app, check out the "advanced" tab in your GitHub app.
