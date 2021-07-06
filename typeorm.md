Criar Migration
yarn typeorm migration:create -n CreateTableUser
yarn typeorm migration:create -n AlterTableUserAddColumnEmail
yarn typeorm migration:create -n AlterTableUserAddColumnLastName

"migration:show": "yarn ts-node --transpile-only node_modules/typeorm/cli.js migration:show",
"migration:run": "yarn ts-node --transpile-only node_modules/typeorm/cli.js migration:run",
"migration:revert": "yarn ts-node --transpile-only node_modules/typeorm/cli.js migration:revert"