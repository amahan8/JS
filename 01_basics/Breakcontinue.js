for(let i=0;i<=10;i++){
    if(i==5){
        console.log("Detected i");
        break
    }
    console.log(`${i} is printed`);
}

//continue
for(let i=0;i<=10;i++){
    if(i==5){
        console.log("Detected i");
        continue
    }
    console.log(`${i} is printed`);
}
