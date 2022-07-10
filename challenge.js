function balancedBrackets(string) {
  // your code here
  string = string.replace(/[\w]/g,'');
  let stringArr = [...string]
  let balancedStack = [];
  stringArr.forEach((element) => {
    if('({['.includes(element)){
      balancedStack.push(element);
    }
    else{
      if ((balancedStack[balancedStack.length-1] === '{' && element === '}') || (balancedStack[balancedStack.length-1] === '(' && element === ')') || (balancedStack[balancedStack.length-1] === '[' && element === ']')){
        balancedStack.pop()
      }
    }
  }); 
  if (balancedStack.length === 0){
    return true;
  }
  return false;
  
}
console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
