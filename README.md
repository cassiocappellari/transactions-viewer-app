# Transactions Viewer APP

## 🤖 Technologies

### Front-end

- Vue.js
- JavaScript
- GraphQL
- Vue Apollo
- Vue Router

### Back-end

- Node.js
- TypeScript
- Prisma
- GraphQL
- GraphQL Tools
- Express GraphQL
- Express
- Multer

### Database

- PostgreSQL

## 🚀 Features

- List transactions
- Filter transactions by date range
- Check transations details
- Import transactions CSV files (back-end service)

## ⚙ How to Run

```bash
# Clone this repository

$ git clone https://github.com/cassiocappellari/transactions-viewer-app

# Enter the project folder

$ cd transactions-viewer-app

```

### Back-end

```bash
# Enter the server folder

$ cd server

# Install the dependencies

$ npm install

# Start the server

$ npm run dev
```

### .env

key|value
---|---
DATABASE_URL|`postgresql://postgres:postgres@localhost:5432/postgres?schema=public`

### Database

```bash
# Run Docker container

docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

# Run migrations

$ npx prisma migrate dev
```

### Front-end

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

## 👨‍🚀 Author

**Cássio Cappellari**

- GitHub: [@cassiocappellari](https://github.com/cassiocappellari)
- LinkedIn: [@cassiocappellari](https://www.linkedin.com/in/cassiocappellari/)
- Dev Community: [@cassiocappellari](https://dev.to/cassiocappellari)