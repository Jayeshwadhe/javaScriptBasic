const accountId  = "abc123";
let accountEmail = "jayesh@yahoo.com";
var accountpassword = "12345";
accountCity = "Burhnapur"

//accountId = "123" => Not allowed to update const value.
accountEmail = "hdd@yahoo.com",
accountpassword = "jaishreeram",
accountCity = "vapi"

console.log(accountCity)
/*
Prefer not to use var in production code
because from that it will create issue in block scope.
*/

console.table([accountId,accountEmail, accountpassword, accountCity])