/* To access our submit button and check if it's clicked */
let submit = document.getElementById('submit');
submit.addEventListener('click', main);

/* for checking if number is spelled out */
const nums = {
                "zero": 0,
                "one": 1,
                "two": 2,
                "three": 3,
                "four": 4,
                "five": 5,
                "six": 6,
                "seven": 7,
                "eight": 8,
                "nine": 9,
                "ten": 10,
                "eleven": 11,
                "twelve": 12,
                "thirteen": 13,
                "fourteen": 14,
                "fifteen": 15,
                "sixteen": 16,
                "seventeen": 17,
                "eighteen": 18,
                "nineteen": 19,
                "twenty": 20,
                "twenty-one": 21,
                "twenty-two": 22,
                "twenty-three": 23,
                "twenty-four": 24,
                "twenty-five": 25,
                "twenty-six": 26,
                "twenty-seven": 27,
                "twenty-eight": 28,
                "twenty-nine": 29,
                "thirty": 30,
                "thirty-one": 31,
                "thirty-onetwo": 32,
                "thirty-onethree": 33,
                "thirty-onefour": 34,
                "thirty-onefive": 35,
                "thirty-onesix": 36,
                "thirty-oneseven": 37,
                "thirty-oneeight": 38,
                "thirty-onenine": 39,
                "forty": 40,
                "forty-one": 41,
                "forty-onetwo": 42,
                "forty-onethree": 43,
                "forty-onefour": 44,
                "forty-onefive": 45,
                "forty-onesix": 46,
                "forty-oneseven": 47,
                "forty-oneeight": 48,
                "forty-onenine": 49,
                "fifty": 50
             }


/* Description: makes sure we have valid operands/operator  
 *
 * Return: an array with the operands, or false if input is
 *         invalid
 */
function validate ()
{
    var ops = new Array(2);
    var op1 = document.getElementById('operand-1').value.replace(/ /g, '');
    var op2 = document.getElementById('operand-2').value.replace(/ /g, '');
    
    
    if (isNaN(parseFloat(op1))) {  /* check if first operand is a number */
        if (op1 in nums) {         /* check if it was spelled out */
            ops[0] = nums[op1];
        } else {
            alert("Please Enter A Valid First Operand");
            return false;
        }
    } else {                       /* it was a number */
        ops[0] = parseFloat(op1);
    }

    /* make sure we have an operator */
    if (!(document.getElementById('operator').value)) {
        alert("Please Select An Operator");
        return false;
    }

    if (isNaN(parseFloat(op2))) {  /* check if second operand is a number */
        if (op2 in nums) {         /* check if it was spelled out */
            ops[1] = nums[op2];
        } else {
            alert("Please Enter A Valid Second Operand");
            return false;
        }
    } else {                       /* it was a number */
        ops[1] = parseFloat(op2);
    }

    return ops;
}


/* Description: performs the actual arithmetic operation  
 *
 * Parameters: 
 *   op1 - first operand
 *   op2 - second operand
 */
function calculate(op1, op2)
{
    var ans;

    switch (document.getElementById('operator').value) {
        case '1':  /* addition */
            ans = op1 + op2;
            break;
        case '2':  /* subtraction */
            ans = op1 - op2;
            break;
        case '3':  /* multiplication */
            ans = op1 * op2;
            break;
        case '4':  /* division */
            if (op2 == 0) {
                alert("Can't Divide By Zero");
                break;
            }
            ans = op1 / op2;
            break;
    }

    ans = ans.toFixed(2);
    document.getElementById('answer').textContent = ans.toString();
}


/* Description: our main function that validates input and does
                the 'calculator' part
 */
function main() {
    var ops = new Array(2);
    ops = validate();

    if (ops) {
        calculate(ops[0], ops[1]);
    }
}