// console.log(_.identity(1));

let testData = [1, 2, 3, 4, 5];

function sumForLoop(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

console.log(sumForLoop(testData));

function sumWhileLoop(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

console.log(sumWhileLoop(testData));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
}

console.log(sumRecursion(testData));

function sumUnderscore(data) {
  let sum = 0;
  _.each(data, function (row) {
    sum += row;
  });
  return sum;
}

console.log(sumUnderscore(testData));
