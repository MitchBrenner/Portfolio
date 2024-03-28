# New Portfolio 2024

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Frontend

### Styling

This project uses [Tailwind CSS](https://tailwindcss.com/). You can find the Tailwind configuration in the `tailwind.config.js` file.

Install and setting up Tailwind CSS:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Social Icons are from [React Social Icons](https://www.npmjs.com/package/react-social-icons?activeTab=readme)

```bash
npm install react-social-icons
```

Animations are from [Framer Motion](https://www.framer.com/motion/)

```bash
npm install framer-motion
```

Typewriter from [React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter)

```bash
npm install react-simple-typewriter
```

Icons from [HeroIcons](https://github.com/tailwindlabs/heroicons)

```bash
npm install @heroicons/react
```

```tsx
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
```

Scrollbar customization from [tailwind-scrollbar](https://www.npmjs.com/package/tailwind-scrollbar)

```bash
npm install tailwind-scrollbar
```

#### Forms

This project uses [react-hook-forms](https://react-hook-form.com/get-started)

```bash
npm install react-hook-form
```


## Backend

The backend is built using [sanity](https://www.sanity.io/sonny)

[My Link](https://portfolio-mkb.sanity.studio/structure)

The connection between the frontend and backend is done using [next-sanity](https://github.com/sanity-io/next-sanity?tab=readme-ov-file) [npm](https://www.npmjs.com/package/next-sanity)


```bash
npm install next-sanity @portabletext/react @sanity/image-url
```

- uses groq queries to fetch data from sanity

- [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
