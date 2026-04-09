This frontend renders the generated Redis wiki content from the repository-level `wiki/` directory.

## Getting Started

From the repository root, install dependencies and start the app:

```bash
make setup
make build
make frontend
```

The default dev URL is [http://127.0.0.1:3010](http://127.0.0.1:3010).
The frontend intentionally uses webpack dev mode because the current Turbopack setup conflicts with loading wiki content from `../wiki`.

If you only want to work inside `frontend/`, install dependencies there and pass an explicit port:

```bash
npm install
npm run dev -- --hostname 127.0.0.1 --port 3010
```

The page content is loaded from `../wiki`, so regenerate wiki artifacts after updating raw sources:

```bash
../.venv/bin/python ../scripts/build_wiki.py
../.venv/bin/python ../scripts/lint_wiki.py
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
