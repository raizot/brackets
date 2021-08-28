module.exports = function check(str, bracketsConfig) {
let stack = [];
let array = str.split('');
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
          if (array[i] === bracketsConfig[j][0]) {
            stack.push(bracketsConfig[j][0]);
          } 
          if (array[i] === bracketsConfig[j][1] && bracketsConfig[j][0] === stack[stack.length - 1]) {
            stack.pop();
          } 
    } 
  } 
    return stack.length === 0;
}
