// const let var String 

// str. ''    ""    ``.   


str1 = 'Wisdom' 

str2 = "Sprouts"

str3 = str1 +" "+ str2 
console.log(str3) 

str4 = str1.concat(" ",str2)
console.log(str4)


console.log(str4.length,"length of str4")

console.log(str4.charAt(5))

console.log(str4.toUpperCase())
console.log(str4.toLowerCase())

// .slice(), .substring(), .substr() 

console.log(str4.slice(0,4))

console.log(str4.substring(0, 4))

// .trim(), .trimStart(), .trimEnd().


str5 = '          hellow                '

console.log(str5.length)
console.log(str5.trim().length)
console.log(str5.trimStart().length) 
console.log(str5.trimEnd().length) 


// .replace() and .replaceAll().
 
str6 = 'Im Learning HTML. HTML is very Easy to Learn' 
console.log(str6 , "Before replace")

str7 = str6.replace('HTML', 'JAVASCRIPT')
console.log(str7, "After replace")

str8 = str6.replaceAll('HTML', 'JAVASCRIPT')
console.log(str8, "After replace all")

// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().

const indexOfHTML = str6.indexOf('HTML')
console.log(indexOfHTML, "indexOfHTML")

const lstIndexOfHTML = str6.lastIndexOf('HTML')
console.log(lstIndexOfHTML)

console.log(str6.includes('HTML'),"HTML hai ya nhi")
console.log(str6.includes('CSS'),"is 'CSS' exsits ")

console.log(str6.startsWith(`Im`))

console.log(str6.endsWith('ertyufghj'))

fruitsSTR  = 'Mango Apple Strawberry'
console.log(fruitsSTR)
fruitArray = fruitsSTR.split(' ')
console.log(fruitArray)


// Write a program to count the number of vowels in a given string. 

vowels = 'aeiouAEIOU'
countVowels = 0
for(i=0; i< str4.length; i++){
    if(vowels.includes(str4.charAt(i))){
        countVowels++
    }
}
console.log(countVowels,"Wisdom Sprouts")

function countVowelsinSTR(str){
    count = 0
    for(i=0; i< str.length; i++){
    if(vowels.includes(str.charAt(i))){
        count++
    }
}

    return count
}

const countVOfstr = countVowelsinSTR(str5)

console.log(countVOfstr ,"countVOfstr")


