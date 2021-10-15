class Calculator  {
    constructor() {
    };
    add(num1 , num2 ){
            if(typeof num1 !== "number" || typeof num2 !== "number"){
                throw new Error("num1 or num2 is not a number");
            }else {
                return num1 + num2;
            }
        }


    multiply(num1 , num2){
        return num1 * num2;
    }
    };


module.exports = Calculator