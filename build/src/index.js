export default function add(num1, num2) {
    let len1 = num1.length - 1
    let len2 = num2.length - 1

    let carry = 0
    let res = ''
    while (len1 >= 0 || len2 >= 0) {
        let sum=0, x=0, y = 0;
        if (len1 >= 0) {
            x = num1[len1] - 0
            len1--
        }
        if (len2 >= 0) {
            y = num2[len2] - 0
            len2--
        }
        sum = x + y + carry
        
        if (sum >= 10) {
            sum = sum - 10;
            carry = 1
        } else {
            carry = 0
        }
        res = sum + res
    }
    if (carry > 0) {
        res = carry + res
    }
    return res
}
// console.log(add('999', '1'))
// console.log(add('1', '999'))
// console.log(add('123', '321'))
// let num1 = '99999999999999999999999999999999999999999999999999999999999999999999'
// let res =add( num1,'1') +''
// console.log(num1.length,res.length)