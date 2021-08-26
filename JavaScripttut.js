// const arr = ["A", "M", "R"]
// console.log(arr.join(""))



// const arr = ["A","M","E" ,"R"]

// let text =""
// arr.forEach((Element)=>{
//     text+= Element
// })
// console.log(text)



// const arr =["A","M","E","R"]
// let text=""

// console.log(arr.reduce((a,b)=>a+b))


// const arr =["A","M","E","R"]
// let text=""

// console.log(arr.reduce((a,b)=>b+a))



// const arr =[1,2,3,4,5]
// let text=""

// console.log(arr.reduce((a,b)=>b+a))




// const arr =[2,3,4]
// let text=""

// console.log(arr.reduce((acc,num)=>acc+num**3,0))




const arr =[ null,2,3,4,"cat",{num:25},undefined,2]
const newArr =arr.filter((item)=> typeof item ==='number' && item)

console.log(newArr.reduce((a,b)=>a+b))