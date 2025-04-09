This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Start at

npm install to add the node packages

## To add new components

1) npx shadcn@latest init
2) npx shadcn@latest add <Item Name>
Refer: https://ui.shadcn.com/docs/installation/next

## Structure Explanation
### src/app/dashboard: 
To Redirect Based on Role(presently in switch case for convenience & later should be changed to a standard version.

### src/app/student: 
Layout of the student dashboard.

### src/components/dashboard: 
Dashboard items like header, sidebar and content based on role are here.

### src/components/ui: 
Ui components are here

### Main Entrance (page.tsx): 
Will be rendered to auth/login & auth/signup in later phase.
