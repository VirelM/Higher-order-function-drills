function repeat(fn,n){
    for(i=0;i<n;i++){
        fn()
    }
}
function hello (){
    console.log('Hello world')
}
function goodbye(){
    console.log('Goodbye world')
}

console.log(repeat(hello, 5));
console.log(repeat(goodbye, 5));