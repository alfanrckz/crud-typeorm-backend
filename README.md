# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Migration typeorm to database `npx typeorm-ts-node-commonjs migration:generate src/migration/my-migration -d src/data-source.ts`
4. Run migration `npx typeorm-ts-node-commonjs migration:run -d src/data-source.ts`
5. Run `npm start` command
