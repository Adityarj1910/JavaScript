const randomColor = ()=>{
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
};

let colour
const setColor = ()=>{
  document.body.style.backgroundColor = randomColor();
}
const startChangingColor = ()=>{
  colour = setInterval(setColor, 1000);
  
}

const stopChangingColor = ()=>{
  clearInterval(colour);
}

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);
