let re;
re = /hello/;
re = /hello/i; // i = Case insensitive
// re = /hello/g; // g = Global Search

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
const result = re.exec('hello world');
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Returns true or false
const result = re.test('Hello');
console.log(result);

// match() - Return result in an array or null
const str = 'Hello World';
const result = str.match(re);
console.log(result);

// search() - Returns the index of the first match if not found returns -1
// const str = 'Zee Hello World';
// const result = str.search(re);
// console.log(result);

// replace() - Returns new string with some or all matches of a pattern
// const str = 'Hello World';
// const result = str.replace(re, 'Hi');
// console.log(result);
