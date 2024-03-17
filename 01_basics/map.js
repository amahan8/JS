const map=new Map();
map.set('In',"India");
map.set('Ar',"Arab");
map.set('Pa',"Pal");
//For of
for(const [key,value] of map){
    console.log(`${key} :- ${value}`);
}