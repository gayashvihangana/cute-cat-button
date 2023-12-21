const circle = document.querySelector(".circle");
const circleEyes = document.querySelector(".circle .eyes");

//   Mouse move stuff
const activateCircle = (event) => {
  let boundBox = circle.getBoundingClientRect();
  const circleStrength = 80;
  const circleEyesStrength = 140;
  const newX = (event.clientX - boundBox.left) / circle.offsetWidth - 0.5;
  const newY = (event.clientY - boundBox.top) / circle.offsetHeight - 0.5;

  //   Move the button to its new position
  gsap.to(circle, {
    duration: 1,
    x: newX * circleStrength,
    y: newY * circleStrength,
    ease: Power4.easeOut,
  });

  //   Move the button eyes to its new position
  gsap.to(circleEyes, {
    duration: 1,
    x: newX * circleEyesStrength,
    y: newY * circleEyesStrength,
    ease: Power4.easeOut,
  });
};

//   Mouse leave stuff
const resetCircle = (event) => {
  //   Move the button to its default position
  gsap.to(circle, {
    duration: 1,
    x: 0,
    y: 0,
    ease: Elastic.easeOut,
  });

  gsap.to(circleEyes, {
    duration: 1,
    x: 0,
    y: 0,
    ease: Elastic.easeOut,
  });
};

//   Add event listeners
circle.addEventListener("mousemove", activateCircle);
circle.addEventListener("mouseleave", resetCircle);
