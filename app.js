var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var result = {};

for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if (result[tag]) {
        result[tag] += 1;
    } else {
        result[tag] = 1;
    }
}

console.log(result);
//2
var numbers = [2, 3, 4, 5, 234, 654, 45, 789, 876];
var sum = 0;
var count = 0;

for (var number of numbers) {
    sum += number;
    count++;
}

var average = sum / count;
console.log(average);
//3
var book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    pages: 218
};

for (var key in book) {
    console.log(key + ': ' + book[key])
}
//4
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var четныеЧисла = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log(четныеЧисла);
