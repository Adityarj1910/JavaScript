const buttons = document.querySelectorAll('.button'); //select all the buttons so that we can loop each button
// console.log((buttons));

const body = document.querySelector("body")
// console.log(body);

buttons.forEach((eachButton) => {
    // console.log(eachButton);

    eachButton.addEventListener('click', (e) => { //this will listen to 'click' event
        // and will perform the following function 
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'reset'){
        body.style.backgroundColor = 'white';
        }
        
    })
} )

