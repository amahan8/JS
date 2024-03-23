const myNums=[1,2,3,4,5,6,9];
const newNums=myNums.filter((num)=>{
     return num>4;
})
console.log(newNums);

const  bk=[
    {title:'Book Four',genre:'Non-fiction',publish:1989,edition: 2013},
    {title:'Book Four',genre:'Non-fiction',publish:1986,edition: 2016},
    {title:'Book Four',genre:'Non-fiction',publish:1989,edition: 2014},

]

const user=bk.filter((b)=>{ return b.publish===1986 && b.edition===2016});
console.log(user);
