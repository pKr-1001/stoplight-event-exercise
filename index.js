(function() {
  'use strict';

  //YOUR CODE HERE

  const stopButton = document.querySelector('#stopButton');
  const slowButton = document.querySelector('#slowButton');
  const goButton = document.querySelector('#goButton');

  const stopLight = document.querySelector('#stopLight');
  const slowLight = document.querySelector('#slowLight');
  const goLight = document.querySelector('#goLight');

  stopButton.addEventListener('click', function(){
    stopLight.classList.toggle("stop");
  })

  slowButton.addEventListener('click', function(){
    slowLight.classList.toggle("slow");
  })

  goButton.addEventListener('click', function(){
    goLight.classList.toggle("go");
  })

  const controlDiv = document.querySelector('#control');

  const handleMouse = (event) => {
    let buttonId = event.target.id;
    if(buttonId === "controls"){
      return;
    }
    const buttonText = event.target.textContent;
    console.log(`Entered ${buttonText} button`);
  }

  const handleMouseExit = (event) => {
    let buttonId = event.target.id;
    if(buttonId === "controls"){
      return;
    }
    const buttonText = event.target.textContent;
    console.log(`Left ${buttonText} button`);
  }

  // Bonus.
  let status = false;
  const turned = (event) => {
    let clickId = event.target.id;
    status = !status;
    const turnedText = event.target.textContent;
    if(clickId === "stopButton" || clickId === "slowButton" || clickId === "goButton"){
      status === false ? console.log(`${turnedText} bulb off`) : console.log(`${turnedText} bulb on`)

    }
}

  stopButton.addEventListener('click',turned);
  slowButton.addEventListener('click', turned);
  goButton.addEventListener('click', turned);


  stopButton.addEventListener('mouseenter', handleMouse);
  slowButton.addEventListener('mouseenter', handleMouse);
  goButton.addEventListener('mouseenter', handleMouse);

  stopButton.addEventListener('mouseleave', handleMouseExit);
  slowButton.addEventListener('mouseleave', handleMouseExit);
  goButton.addEventListener('mouseleave', handleMouseExit);


  

})();

  // single event listener on parent element
  // controlDiv.addEventListener('click', function(event) {
  //   let buttonId = event.target.id;
  //   console.log(buttonId);
  //   switch (buttonId) {
  //     case "stopButton":
  //       stopLight.classList.toggle("stop");
  //       break;
  //     case "slowButton":
  //       slowLight.classList.toggle("slow");
  //       break;
  //     case "goButton":
  //       goLight.classList.toggle("slow");
  //       break;
  //   }
  // })





// const handleMouse = (event) => {
//   let buttonId = event.target.id;
//   if(buttonId === "controls"){
//     return;
//   }
//   const buttonText = event.target.textContent;
//   console.log(`Entered ${buttonText} button`);
// }

// stopButton.addEventListener('mouseenter', handleMouse);
// slowButton.addEventListener('mouseenter', handleMouse);
// goButton.addEventListener('mouseenter', handleMouse);





// const stop = document.querySelector('#stopButton');


// // stop.addEventListener('click', function(event){
//   // document.querySelector('#stopLight);
//   let light = document.querySelector('#stopLight');
//   light.classList.add('stop');
//   //})

