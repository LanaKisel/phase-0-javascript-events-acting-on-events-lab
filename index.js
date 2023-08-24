// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right < 360){
        dodger.style.left = `${right+1}px`
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
  })

  // function moveUp() {
  //   const upNumbers = dodger.style.bottom.replace("px", "");
  //   const bottom = parseInt(upNumbers, 10);
  //   if (bottom < 400) {
  //     dodger.style.bottom = `${bottom+1}px`
  //   }
  // }

  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "ArrowUp"){
  //   moveUp()}
  // })

  // function moveDown() {
  //   const downNumbers = dodger.style.bottom.replace('px', '');
  //   const down = parseInt(downNumbers, 10);
  //   if (down >0) {
  //     dodger.style.bottom = `${down-1}px`
  //   }
  // }

  // document.addEventListener('keydown', function (e){
  //   if (e.key === "ArrowDown") {
  //     moveDown()
  //   }
  // })