num = 15


if (num % 2 == 0) {
    console.log(num, ' is even number')
} else {
    console.log(num, ' is odd number')
}

// 0-100 

// 0-34  F 
// 35-40 D 
// 40-50 C 
// 50-60 C+
// 60-70 B
// 70-80 B+
// 80-90  A
// 90-100 A+

marks = 98

if (marks >= 0 && marks <= 100) {

    if (marks <= 34) {
        console.log("Fail")
    } else if (marks >= 35 && marks < 40) {
        console.log("Grade D")
    } else if (marks >= 40 && marks < 50) {
        console.log("Grade C")
    } else if (marks >= 50 && marks < 60) {
        console.log("Grade C+")
    } else if (marks >= 60 && marks < 70) {
        console.log("Grade B")
    } else if (marks >= 70 && marks < 80) {
        console.log("Grade B+")
    } else if (marks >= 80 && marks < 90) {
        console.log("Grade A")
    } else {
        console.log("Grade A+")
    }
}else{
    console.log("Invalid result")
}

// exp < 1year     sonpapadi 
// exp > 1year     Barfi
// sal < 1lac      GulabJamun
// sal > 1lac      Kajukatali
exp = 5
sal = 55678678
if(exp > 1){
    console.log("Barfi")
        if(sal < 100000){
            console.log("GulabJamun")
        }else{
        console.log("Kajukatali")
        }
}else{
    console.log("sonpapadi")
    if(sal < 100000){
        console.log('GulabJamun')
    }else{
        console.log("Kajukatali")
    }
}

const today = new Date()

console.log(today)

// month = today.getMonth()
month = 4
console.log(month)

// 2 3 4 5. Summar
// 6 7 8 9. Rainy 
// 10 11 0 1 winter


switch(month){
    case 1:
            console.log('Winter')
            break
    case 4:
        console.log("Summar")
        break
    case 9:
        console.log('Rainy')
        break
    
    default:
        console.log("Invalid month")
}

// 7  * 1
// 7 * 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
for(i = 1; i<=10 ; i++){
    console.log(7 * i)
}
// initialization ;  condition ;  increament / decreament
console.log('---------------')
for(i = 1; i<=10 ; i++){
    console.log(7 * i)
    if(i == 5){
        break
    }
}
console.log('---------------')

for(let i = 1;i<=10;i++){
    if(i==5){
        continue
    }
    console.log(7 * i)

}


// initialization
// while(condition){

//     increament / decreament
// }

z = 1
while(z<=10){
    console.log(7 * z)
    z = z+1
}

x = 1000
do{
    console.log("Hello")

}while(x <= 100)

console.log(Math.ceil(7.4))


console.log(Math.random())


// 0 - 10 
console.log(Math.floor(Math.random() * 10 + 1))


// 1- 100
console.log(Math.floor(Math.random() * 100 + 1))
