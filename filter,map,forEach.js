let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
console.log(movements.filter((value)=>{
    if(value[0] >=0 && value[1] >=0){
        return value;
    }}));

let map = movements.map((numbers)=> Math.abs(numbers[0]) + Math.abs(numbers[1])
    );

console.log(map);

movements.forEach((map, number)=>{
    let x = Math.abs(map[0]) + Math.abs(map[1]);
    console.log(`Movement #${number}: ${x} steps`);
});

let code = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'.split(' ');
let reducer = function (accumlator, currentValue){
    if(currentValue.length ===3){
        return accumlator + ' ';
    }
    return accumlator + currentValue[currentValue.length-1].toUpperCase();
}
console.log(code.reduce(reducer, ''));