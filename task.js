function  task (arr,number){

    const arr1=arr.map((item)=>{
        return item*number
    })

    return arr1.reduce((a,b)=>{return a+b},0)

}

console.log(task([1,2,3,4],2))
a =[1,2,3,4]
n=2

