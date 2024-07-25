const accountId = 12345
let accountEmail = "jayesh@google.com";
var accountName =  "jayeshWadhe";
accountCity = "burhanpur";

//accountId = 2345
accountEmail = "wadhe@gmail.com";
accountName = "wadheJayesh";
accountCity = "Indore";

console.log(accountId);
/*
Prefer not to use var in production code
because from that it will create issue in block scope.
*/

console.table([accountId, accountEmail, accountName, accountCity])