//  .split() :- it convert any string into array for e.g

const varName ="  This-is-my-name  "

console.log(varName.split('-'));

// output :- [ 'This', 'is', 'my', 'name' ]

// .trim() :- It finish or white spaces from any string

const letMyName = '    shahid chaudhary  '
console.log(letMyName.trim());

// output differene :- [ '  This', 'is', 'my', 'name  ' ] [ '  This', 'is', 'my', 'name  ' ]


console.log(varName.includes('shahid'));

// Includes is used for checking any thing into any var it gives you *value in boolean*

console.log(letMyName.replace('shahid','shahin'));

// it helps in replace any value from a var...