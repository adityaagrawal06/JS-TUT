# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```
## project 1

```javascript
const form =document.querySelector('form');
// this ue case will give u empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height ==='' || height <0 || isNaN(height)){
    result.innerHTML = "enter a valid height"
  }
  else if(weight ==='' || weight <0 || isNaN(weight)){
    result.innerHTML = "enter a valid weight"
  }
  else{
    const BMI = (weight/((height*height)/10000)).toFixed(2);
    if(BMI<18.6){
      result.innerHTML = `<span>${BMI}</span>; <p> you are underweight</p>`;
    }
    else if(BMI>24.9){
      result.innerHTML = `<span>${BMI}</span>; <p> you are overweight</p>`;
    }
    else{
      result.innerHTML = `<span>${BMI}</span>; <p> you are fit</p>`;
    }
  }
  
  
})




```

