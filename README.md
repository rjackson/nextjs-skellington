# rjackson's next.js skellington

This is my personal Next.js project skeleton. It is a fresh install of Next.js, with the following additions:

- [`src` directory](https://nextjs.org/docs/advanced-features/src-directory)
- Jsconfig with preset aliases for
  - contexts
  - components
  - hooks
  - public
  - helpers
- Eslint preconfigured for
  - Next's base ruleset
  - Next's stricter core-web-vitals ruleset
  - Prettier code formatting rules
  - jsx-a11y's strict ruleset
- Next.js preconfigured with
  - React strict mode enabled
  - Locale pre-set to en-GB
  - Linting on all code directories
  - Webpack config set up to support [symlinking local packages](https://docs.npmjs.com/cli/v8/commands/npm-link)
- Tailwind CSS preconfigured with
  - Class-based dark mode

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `src/pages/api/hello.js`.

The `src/pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
