var animals=['tiger','lion','cheetah','leopard','elephant','deer','giraffe','zeebra','bear'];

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);
console.log(animals[5]);
console.log(animals[6]);
console.log(animals[7]);
console.log(animals[8]);

console.log(animals.length)
//push

animals.push('fox');
console.log(animals);

console.log(animals.length);

//pop

animals.pop();
console.log(animals);

//unshift

animals.unshift('fox');
console.log(animals);

//shift

animals.shift();
console.log(animals);

//splice

animals.splice(4,0,'fox');
console.log(animals);

//concat

var a=[1,2,3,4,5];
var b=[6,7,8,9,10];

var c=b.concat(a)
console.log(c)

console.log(animals)

var c=a.concat(b);
console.log(c)

console.log(animals)

//reverse

animals.reverse();
console.log(animals)

//iterating

for(var i=0; i<=animals.length -1;i++){
    console.log(animals[i])
}