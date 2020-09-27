var faker = require("faker");
var database = { database : [] };

for (var i = 1; i<100; i++)
{
    database.database.push({
       id : i,
       name : faker.commerce.productName(),
       price : faker.commerce.price(), 
    });
}

console.log(JSON.stringify(database));