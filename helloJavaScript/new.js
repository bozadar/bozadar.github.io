let test = ['hello', 'goodbye', 'au revoir'];
let test2 = ['hello', 'goodbye', 'goodbye'];

let newTest = [];

for (i = 0; i < test.length; i++) {
    for (j = 0; j < test2.length; j++) {
        if (test[i] === test2[j] && i === j) {
            newTest.push(test[i]);
        }
    }
}

console.log(newTest);