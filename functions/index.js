
// Q1.
console.log(hello())
function abc(){ 
    console.log("Zero parameter") 
} 
abc(); 

// Q2.
function sum(a,b){ 
    sum=a+b; 
    console.log(sum) 
} 
sum(3,4); 

// Q3.
let sum=(x,y)=>{ 
    console.log(x+y); 
} 
sum(5,2); 

// Q4

var x = 21; 
var girl = function () { 
    console.log(x);
    var x = 20; 
}; 
girl ();

// Q5.
var x = 21;
girl ();
    console.log(x)
function girl() {
    console.log(x);
var x = 20;
};

// Q6.
var x = 21;
a();
b();

function a() {

x = 20;
console.log(x);
};
function b() {

x = 40;
console.log(x);
};

// Q7.
function fact0rial(n){ 
    if(n==0 || n==1 ){ 
        return 1; 
        for(var i = n-1; i>=1; i--){ 
            n*=1; 
        } 
        return n;
    }  
    console.log(factorial(5)); 
    
};
