function tableSeven(){
    for(i=1; i<=10;i++){
        console.log(7 * i)
    }
}


tableSeven()


// simple function in JS

function table(num){       //parameter
        for(i=1; i<=10;i++){
        console.log(num * i)
    }
}

table(15)     //argument


// simple function with parameter 

function add(x,y){
    console.log(x+y)
    return x+y
}

const addOf4And5 =  add(4,5)

console.log("addOf4And5",addOf4And5)


// Arrow Function 

greetMSG = () => console.log("Hello from arrow function")

greetMSG()

addition = (x,y)=> x+y

const addOf8And9 = addition(8,9)

console.log("addOf8And9",addOf8And9)

const multiplication = (a,b)=>{
    console.log("in multiplication function")
    c = a*b
    return c
}

let multiOf2And4 = multiplication(2,4)

console.log(multiOf2And4 + 10)


// (()=>console.log("Hello heloo Iam anonymous function but self invoked"))()

(function(){console.log("Hello heloo Iam anonymous function but self invoked")})()



// Callback Function 

