// define object

const objEx = {}
// userArr = [234523456, "John",'Doe', 65, 'Pune', 'MH']
console.log(typeof(objEx))
const user = {
    adharNo:234523456,
    fName:"John",
    lName:'Doe',
    age:65,
    city:'Kolhapur',
    State:'MH',
    contactNo: [9876543210, 1234567890],
    fullName:function (){
        return this.fName + ' ' + this.lName
    },
    isEmployye:true,
    address:{
        houseNo:900,
        nearBy:'Rankala Lake',
        area:'phulewadi',
        pinCode:416108
    }
}



user.bDate = '2001/5/30'


console.log(user.address.pinCode)
pin = user.address.pinCode
// const {pin} = user.address.pinCode
// access value of object 

console.log(user["city"])

console.log(user.city)

user.age = 66

console.log(user)

user.contactNo.map((v,i)=>{
    console.log(v)
})

fn = user.fullName()
console.log(fn)

// methods of object 


for (key in user){
    console.log(key+ '  :::::    ' +user[key])
}

console.log(Object.entries(user))

// conversion 

userSTR = JSON.stringify(user)

console.log(userSTR)

// {"key":"value",}


UserAtServerSide = JSON.parse(userSTR)

console.log(UserAtServerSide)