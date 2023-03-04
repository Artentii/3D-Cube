// the cube moves whichever direction the user goes to, the cube follows the mouse

const cube = document.querySelector('.cube');
let isDragging = false;
let previousMousePosition = {
  x: 0,
  y: 0
};

document.addEventListener('mousemove', function(event) {
  const deltaX = event.clientX - previousMousePosition.x;
  const deltaY = event.clientY - previousMousePosition.y;
  previousMousePosition = {
    x: event.clientX,
    y: event.clientY
  };
  rotateCube(deltaX, deltaY);
});

document.addEventListener('mouseup', function(event) {
  isDragging = false;
});

document.addEventListener('mousedown', function(event) {
  isDragging = true;
  previousMousePosition = {
    x: event.clientX,
    y: event.clientY
  };
});

cube.addEventListener('mouseleave', function(event){
  rotateX = 0;
  rotateY = 0;
  cube.style.transform = `
  rotateX(${rotateX}deg)
  rotateY(${rotateY}deg)`;
});

let rotateX = 0;
let rotateY = 0;
const factor = 0.5;

function rotateCube(deltaX, deltaY) {
  rotateX += deltaY * -1 * factor;
  rotateY += deltaX * factor;
  cube.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
}


// the cube moves only when the user goes over it or clicks on it, once the user moves away from the cube, it goes back to its initial position

// const cube = document.querySelector('.cube');
// let isDragging = false;
// let previousMousePosition = {
//   x: 0,
//   y: 0
// };

// cube.addEventListener('mousemove', function(event) {
//   if (isDragging && event.currentTarget === cube) {
//     const deltaX = event.clientX - previousMousePosition.x;
//     const deltaY = event.clientY - previousMousePosition.y;
//     previousMousePosition = {
//       x: event.clientX,
//       y: event.clientY
//     };
//     rotateCube(deltaX, deltaY);
//   }
// });

// cube.addEventListener('mouseup', function(event) {
//   isDragging = false;
// });

// cube.addEventListener('mousedown', function(event) {
//   if (event.currentTarget === cube) {
//     isDragging = true;
//     previousMousePosition = {
//       x: event.clientX,
//       y: event.clientY
//     };
//   }
// });

// cube.addEventListener('mouseleave', function(event){
//   rotateX = 0;
//   rotateY = 0;
//   cube.style.transform = `
//   rotateX(${rotateX}deg)
//   rotateY(${rotateY}deg)`;
// });

// let rotateX = 0;
// let rotateY = 0;
// const factor = 0.5;

// function rotateCube(deltaX, deltaY) {
//   rotateX += deltaY * -1 * factor;
//   rotateY += deltaX * factor;
//   cube.style.transform = `
//     rotateX(${rotateX}deg)
//     rotateY(${rotateY}deg)
//   `;
// }