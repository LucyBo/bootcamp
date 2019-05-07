var faker = require("faker");
 
for(var i = 0; i < 10; i++) {
    console.log(faker.hacker.name() + " - $" + faker.commerce.price());
}
