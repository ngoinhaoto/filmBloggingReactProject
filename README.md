# MovieMuncher

This is a film blog web application created by Truong & Chinh for VNUK's Advanced Web Design Class created by NextJS 13, app router.

## Getting Started

First, please clone the project from Github.

Then install all the libraries

```
npm install
```

Download .env and .env.local files from [Here](https://drive.google.com/drive/folders/1f6X7a-AfFTQWPcruxrCu5pEfzTFgxzCG?usp=sharing)

There are two ways of using the database, running postgresql locally and on Vercel.

Still we heavily recommend to run on local because vercel written speed is very slow...

### Database set up
1. Running Locally
If you want to run locally using PostgresSQL, please download PostgresSQL here: https://www.postgresql.org/download/. After setting up and creating the database. You should put the connection string inside the .env file accordingly to your postgres setting.

Follow this [tutorial](https://www.youtube.com/watch?v=Ids4w5fmMpk)

After adding connection string to the .env and .env.local file, you can run prisma, which is an ORM we used for this project.

You can run the command below to 

```
# Migrate Dev creates a migration on database
npx prisma migrate dev
# Prisma db push creates dummy data
npx prisma db seed
# You can check the database by using prisma studio
npx prisma studio
```

If you find all the data, you can start using the application. You might have to restart VSCode after using migration. 

2. Running Vercel Database (this is a lot slower)

If using vercel, you can use the connection string that we provided. Do the same with running locally by running following commands

```
# Migrate Dev creates a migration on database
npx prisma migrate dev
# Pull the data from the database, no need to seed data because data is already on the server
npx prisma db pull
# You can check the database by using prisma studio
npx prisma studio
```


Then, run the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


