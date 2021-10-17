# Transactions Viewer APP (Airbank Challenge)

Transactions Viewer is a Single Page Application that allows users to import CSV financial transactions files through an API endpoint and then exhibits all them in a table in the client side. Besides that, this web application also provides the possibility of filtering transactions by month and checking each transaction details.

# 🤖 Technologies

## Front-end

- Vue.js
- JavaScript
- GraphQL
- Vue Apollo
- Vue Router

## Back-end

- Node.js
- TypeScript
- Prisma
- GraphQL
- GraphQL Tools
- Express GraphQL
- Express
- Multer

## Database

- PostgreSQL

# 🚀 Features

- 📃 List transactions
- 📆 Filter transactions by date range (start month / end month)
- 🔎 Verify transaction details
- 📦 Import transactions CSV files (back-end service)

# 🛠 How to Run

```bash
# Clone this repository

$ git clone https://github.com/cassiocappellari/transactions-viewer-app

# Enter the project folder

$ cd transactions-viewer-app

```

## Back-end

```bash
# Enter the server folder

$ cd server
```
Before install the server dependencies, configure the database .env variable:
## .env

key|value
---|---
DATABASE_URL|`"postgresql://postgres:postgres@localhost:5432/postgres?schema=public"`

```bash
# Install the dependencies

$ npm install

# Start the server

$ npm run dev
```

## Database

```bash
# Run a Docker PostgreSQL container

docker run --name postgresql-transactions-viewer-app -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

# Run the migrations

$ npx prisma migrate dev
```

## Front-end

```bash
# Enter the client folder

$ cd client

# Install the dependencies

$ npm install

# Start the project

$ npm run serve

# Access the app

http://localhost:8081
```

# 👨‍🚀 Author

**Cássio Cappellari**

- GitHub: [@cassiocappellari](https://github.com/cassiocappellari)
- LinkedIn: [@cassiocappellari](https://www.linkedin.com/in/cassiocappellari/)
- Dev Community: [@cassiocappellari](https://dev.to/cassiocappellari)