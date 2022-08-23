let ArrayOfobjects=[{name:'kshit',age:24},{name:'avish',age:20},{name:'charu',age:17}]
let filteredArrayOfobjects =ArrayOfobjects.filter((a)=>{
    return a.age>18;
})
console.log(filteredArrayOfobjects)