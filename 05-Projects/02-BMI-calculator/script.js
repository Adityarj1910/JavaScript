const form = document.querySelector('form')
//this usecase will give you empty values as 
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', (e)=>{
    
    e.preventDefault(); // to prevent default action i.e., send value (get/post)
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid number"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid number"
    }
    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        if(BMI<18.6){
            results.innerHTML = `<span>your BMI is ${BMI}</span><br>You are Under Weight`;
        }
        else if(BMI >=18.6 && BMI<24.9){
            results.innerHTML = `<span>your BMI is ${BMI}</span><br>You are Normal`
        }
        else{
            results.innerHTML = `<span>your BMI is ${BMI}</span><br>You are Over Weight`
        }
    }
    })