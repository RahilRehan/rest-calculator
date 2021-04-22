# A simple REST API in NodeJS for basic arithematic operations

## Routes
- "/" - Root Route, Welcome message
- "/calculator/operation?a=operandOne&b=operandTwo" - calculator route
    - allowed operations are 'add', 'multiply', 'divide'
    - multiply can be switched off at runtime
- examples
  - "/calculator/add?a=5&b=7"
    - output - {'answer':12}
  - "/calculator/multiply?a=3&b=2"
    - output - {'answer':6}
  - "/calculator/multiply?a=5&b=2"
    - output - {'answer':2.5}

  - malformed query
    - output - {"error":"malformed query","query format":"/calculator/operation?a=operandOne&b=operandTwo"}