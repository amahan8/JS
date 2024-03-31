# Projects of DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solutioncode

##Project1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (b) {
  console.log(b);
  b.addEventListener('click', function (e) {
    if(e.target.id ==='grey'){
      body.style.backgroundColor =e.target.id;
    }
      if(e.target.id ==='white'){
        body.style.backgroundColor =e.target.id;}
        if(e.target.id ==='blue'){
          body.style.backgroundColor =e.target.id;}
          if(e.target.id ==='yellow'){
            body.style.backgroundColor =e.target.id;}
   
   });
});


```

 