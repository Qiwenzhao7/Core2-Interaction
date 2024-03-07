console.log("Hello World");
// STRINGS
//--------------
console.log("\n\nSTRINGS\n\n\n");

console.log(" A string with single quote"); // single quote
console.log(" A string with double quote"); // double quote
console.log(" A string with back tick"); // back tick
console.log('A '+ 'string ' + 'pieces'); // concatenation

// NUMBERS
//--------------

console.log('\n\nNUMBERS\n\n\n')
console.log(3);// number
console.log(3 + 3); // add
console.log(3 - 3); // subtract
console.log(3 * 3); // multiplication
console.log(3 / 3); // divide
console.log(3 % 3); // modulo

// STRINGS & NUMBERS
//-------------

console.log('\n\nSTRINGS & NUMBERS\n\n\n');
console.log('100 * 50'); // number in a string
console.log('100 * 50 equals' + 100 * 50); // adding number to a string
console.log(100 * 50 +'25'); // adding string to number

// BOOLEAN
//-------------

console.log('\n\nBOOLEAN\n\n\n');

console.log(true, false); // ture and false
console.log('3 < 4 :',3<4);// less than
console.log('4 > 10 :',4>10);// greater than
console.log('2 >= 2 :',2>=2);// 
console.log('6 <= 3 :',6<= 3);// 
console.log(8+2 ==5+5);// 
console.log("'tomato' !='tomato'",'tomato' !='tomato');// unequal to

// VARIABLES
//-------------
console.log('\n\nVARIABLES\n\n\n');

var studentLoanDebt = 800
console.log('studentLoanDebt :',studentLoanDebt);

studentLoanDebt = studentLoanDebt - 100;
console.log('studentLoanDebt :',studentLoanDebt);

studentLoanDebt = studentLoanDebt + 50;
console.log('studentLoanDebt :',studentLoanDebt);

// ARRAYS
//------------

var myFavoriteColors =['yellogreen','fuchsia','gainsboro'];
console.log('myFavoriteColors :',myFavoriteColors);

// OBJECTS
//------------
console.log('\n\nOBJECTS\n\n\n');

var me = {
    firstname: 'Qiwen',
    Lastname : 'Zhao',
    age:19,
    likeMayo : false,
};
console.log(me['firstname']);

//ARRAY OF OBJECTS
//-----------
console.log('\n\nARRAY OF OBJECTS\n\n\n');
var us = [
    {
        firstname: 'Elida',
        lastname: 'Chen',
    },
    {
        firstname: 'Qiwen',
        lastname: 'Zhao',
    },
    {
        firstname: 'Jiaxin',
        lastname: 'Chen',
    },
];
console.log(us);
console.log(us[0]);

