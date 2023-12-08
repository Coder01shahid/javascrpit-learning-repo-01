// all primitive data types are of stack memory types.
// all reference data types are of heap memort types.


let userOne = {
    email: "shahid@123",
    upi: "shahid@ypl"
}
let userTwo = userOne

userTwo.email = "user@123.com"
console.log(userOne);

    
