// Defining an Array 

arr1 = []
fruits = ['Apple', 'Banana', 'Mango']

console.log(typeof(fruits))

// Accessing Array Elements. 
console.log(fruits[1])
console.log(fruits,"Before")

fruits[2] = 'Grapes'
console.log(fruits, 'After')

console.log(arr1.length)


// Basic Array Operations Add and Remove 
// push pop   shift unshift  slice splice

fruits.push('Watermelon')
console.log(fruits, 'After push')

fruits.unshift('Strawberry')
console.log(fruits, "after unshift")

// fruits.pop()
// console.log(fruits, "after pop")
// fruits.shift()
// console.log(fruits, "after shift")


sliceFruit = fruits.slice(1,4)
console.log(sliceFruit,"sliceFruit")



// splice(index , number of ele for remove , elements for add )
spliceFruits = fruits.splice(1,0,'Rasberry','Kiwi')

console.log(spliceFruits)
console.log(fruits)

//  Iterating Through Arrays
//   for for of for in
for(let i=0; i<fruits.length;i++){
    console.log('I love to eat :', fruits[i])
}

for (index1 in fruits){
    console.log('I love to eat :', fruits[index1])
}
for (val of fruits){
    console.log('I love to eat :', val)
}

// Common Operations
//  findIndex -> indexOf ; includes,
console.log(fruits)
indexKiwi = fruits.indexOf("Kiwi")
console.log(indexKiwi,"KIWI index")

console.log(fruits.includes('Apple'),"Is apple in array?")

console.log(fruits.includes('Chickoo'),"Is Chickoo present?")

// Commonly Used Array Methods in MERN
// map, forEach, reduce, find, filter, sort, every,concat  

fruits.map((value,index)=>{
    console.log(index, 'contains ', value)
})

fruits.forEach((fruit,i)=>{
    console.log(i, 'Love to eat', fruit)
})

students = ['John', 'Tom','Jerry']
for(i=0;i<students.length;i++){
    console.log(students[i])
}
console.log('-------------------')
students.map((studName, index)=>{
    console.log(studName)
})

FilterNumbers  = ['peocock', 'mango', 'blue', 'laptop', 'Billing', 'Building', 'Street','Board']


// starts with 'b'
