
let s1
function calculate (s){
    console.log(s);
    const values = [];
 
    const ops = [];

 for (let i = 0; i < s.length; i++) {
    
    if (s[i] === ' ') {
      continue;
    }

   
    if (s[i] >= '0' && s[i] <= '9') {
      let buffer = '';
     
      while ((i < s.length && s[i] >= '0' && s[i] <= '9') || s[i] == '.') {
        buffer += s[i++];
      }
      values.push(parseFloat(buffer));
      i--; 
    }
   
    else if (s[i] === '(') {
      ops.push(s[i]);
    }
    
    else if (s[i] === ')') {
      while (ops[ops.length - 1] !== '(') {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }
      ops.pop();
    }
   
    else if (s[i] === '+' || s[i] === '-' || s[i] === '*' || s[i] === '/' || s[i] === '%'|| s[i] === '^') {
      
      while (ops.length && hasPrecedence(s[i], ops[ops.length - 1])) {
        values.push(applyOp(ops.pop(), values.pop(), values.pop()));
      }
      
      ops.push(s[i]);
    }
  }

 
  while (ops.length) {
    values.push(applyOp(ops.pop(), values.pop(), values.pop()));
  }

  
  return values.pop();
};


const hasPrecedence = (op1, op2) => {
  if (op2 === '(' || op2 === ')') {
    return false;
  }
  if ((op1 === '*' || op1 === '/') && (op2 === '+' || op2 === '-')) {
    return false;
  }
  return true;
};


const applyOp = (op, b, a) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '%':
      return a % b;
    case '^':
        return a**b;
    case '/':
      if (b === 0) {
        throw 'Cannot divide by zero';
      }
      return (a / b);
      
  }
  return 0;
};
function calculate1()
{
    // let ss = calculate(s1)
    console.log(document.calc.output.value);
    let ss = calculate(document.calc.output.value);
    console.log(ss);
    let err = "invalid input"
    if(isNaN(ss) )
    {
        
        document.calc.output.value = err;
    }
    else{
        document.calc.output.value = ss;
        console.log(ss);
    }

}
let sss = document.calc.output.value;


function Factorial() {
		let n = document.calc.output.value
            var ans=1;
              
            for (var i = 2; i <= n; i++)
                ans = ans * i;
			document.calc.output.value = ans;
            //return ans;
}
          
       
    function exp(){
        document.calc.output.value= Math.exp(document.calc.output.value); 
    }
    function log(){
        document.calc.output.value= Math.log(document.calc.output.value); 
    }
    function inverse(){
        document.calc.output.value= 1/document.calc.output.value;
    }
    function square (){
        document.calc.output.value= document.calc.output.value*document.calc.output.value; 
    }
    function cube (){
        document.calc.output.value= document.calc.output.value*document.calc.output.value*document.calc.output.value; 
    }
     function tan(){
        document.calc.output.value= Math.tan(document.calc.output.value); 
    }
    function cos(){
        document.calc.output.value= Math.cos(document.calc.output.value); 
    }
     function sin(){
        document.calc.output.value= Math.sin(document.calc.output.value); 
    }
    function sq(){
        document.calc.output.value= Math.sqrt(document.calc.output.value); 
    }
	
function cut(){
    console.log(document.calc.output.value);
	document.calc.output.value= document.calc.output.value.slice(0,-1);
    console.log(document.calc.output.value);

}