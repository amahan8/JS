const arr=[1,2,3,4,5,6,8];
let a=arr.reduce(function(acc,curval){
    console.log(`acc is${acc} and cur is ${curval}`);
    return acc+curval;
},3)
console.log(a);

const  bk=[
    {title:'Book Four',genre:'Non-fiction',publish:1989,edition: 2013},
    {title:'Book Four',genre:'Non-fiction',publish:1986,edition: 2016},
    {title:'Book Four',genre:'Non-fiction',publish:1989,edition: 2014},

]
