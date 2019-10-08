module.exports = function multiply(first, second) {
  // your solution
  let multiplyOfNumbers = BigInt(first) * BigInt(second);
  let result = String(multiplyOfNumbers);
  return result;
}
