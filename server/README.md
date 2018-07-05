# Simple node server

This is simple Node.js server using Express, Sequalize and TypeScript.

## How to run

**PREREQUISITE**: Get PostgreSQL server locally or via docker:
`docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=123 -d postgres` (where `123` is your `postgres` user password)

## How to run

2. Run `yarn` to install all dependencies

3. Run `yarn db` to initialize database (tweak DB connection settings via`server/config/config.json`)

4. Run `yarn server:watch` to run both client and server in development watch mode. 


### Additional database commands
```bash
# Drop database
yarn db:drop

# Create database
yarn db:create

# Migrate database
yarn db:migrate

# Seed database
yarn db:seed
```

## Information

Right now there's only one existing REST - [http://localhost:3000/api/items](http://localhost:3000/api/items)

It sends the data from `Items` table.