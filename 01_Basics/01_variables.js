const accountId = 144553
let accountEmail = "pandeyvidyesha@gmail.com"
var accountPassword = "12345"
acoountCity = "Mumbai"

// accountId = 2 // Not allowed

accountEmail = "hc@gmail.com"
accountPassword = "67891"
accountCity = "Pune"

console.log(accountId);

// Prefer not to use Var, because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity])