// let a: number = 10
// let b: number = 20
// let cc:string = "50"
// let c: number = +cc
// console.log(a+b+c)

// let data: number | string = 30
// data = 40
// data = "hello"

// 2
// let a = 21
// let b = "Umayer Ahmad"
// let c: string = `My name is ${b} and my age is ${a} year`
// console.log(c)

// let n: number = 100;
// let data: string = n.toString()
// let data: string = String(n)
// let data: string = ""+n
// console.log(data)

// let b = true;
// let data: string = b.toString()
// console.log(data)

// let a: null | string = null
// let b: null | string = null
// let login = true
// if(login){
//     b = "Umayer"
// }
// console.log(b)

// let a: undefined | string = undefined
// // a = "Umayer"
// let b = null
// console.log(typeof a)
// console.log(a===b)


// let sym1 = Symbol()
// let sym2 = Symbol()
// let sym3 = Symbol("ab")
// let sym4 = Symbol("ab")

// console.log(sym3===sym4)
// console.log(sym3)
// console.log(sym4)

// const id = Symbol('id')
// const obj = {
//     [id]: 100,
//     name: "Umayer Ahmad"
// }
// console.log(obj[id])

// const getInfo = () => {
//     const nameInput = document.querySelector('#username') as HTMLInputElement
//     const name:string = nameInput.value

//     const emailInput = document.querySelector('#email') as HTMLInputElement
//     const email:string = emailInput.value

//     const ageInput = document.querySelector('#age') as HTMLInputElement
//     const age:string = ageInput.value

//     console.log(name,email,age)
// }


// let a: Array<number> = [1,2,3,4,5]
// console.log(a)

// let a: string[] = ["a","b","c","y"]
// let b: number[] = [1,2,3,4,5]
// let c: Array<string> = ["a","b","c","y"]
// let d: Array<number> = [1,2,3,4,5]

// d.push(6)

// const e: ReadonlyArray<string> = ["a","b","c","y"]

// console.log(d)


const a: [number,string,boolean] = [1,"Umayer",true]
console.log(a)