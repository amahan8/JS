const nu=[1,2,3,4,5,6];
const nui=nu.map((re)=>{
    return re+10;})
.filter((re)=>{
    return re>=12;
})

console.log(nui);