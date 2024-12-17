const sumOfEvens =(n)=>{
    let sum=0;
    for(let i=1;i<=n;i++){
        if(i%2===0){
            sum+=i;
        }
    } 
        return sum;  
}
let n=parseInt(prompt("Enter a number:"));
let result=sumOfEvens(n);
alert(`The sum of even numbers from 0 to ${n} is :${result}`);