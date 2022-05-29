// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/585a1a227cb58d8d740001c3/train/javascript

function repeater(string, n){
    arr = []
    
        for(i=1; i<=n; i++){
            arr.push(string)
        }
    
    arrstring = arr.toString()
    const result = arrstring.replace(/,/g, '');
    console.log(result);
}
repeater('a',5)
console.log('=====')
repeater('xy',7)
console.log('=====')
repeater('carleyeshield-', 9)