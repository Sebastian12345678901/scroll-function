function square(element, x) {
  anime({
    targets: element,
    translateX: x
  });
}

square(".my-square", 270);

function squareArray(element) {
  anime({
    targets: element,
    translateX: 270
  });
}
squareArray(".my-square-array");

function loadingAnimation() {
  var logEl = document.querySelector(".battery-log");

  var battery = {
    charged: "0%",
    cycles: 120
  };

  anime({
    targets: battery,
    charged: "100%",
    cycles: 120,
    round: 1,
    easing: "linear",
    update: function() {
      logEl.innerHTML = JSON.stringify(battery);
    }
  });
}
loadingAnimation();

//template för scroll i kommentaren under och en test under

/* el = document.querySelector(".test");

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width
    };
}

window.addEventListener("scroll", () => {
    let offSet = getOffset(el);

    
    if (offSet.top - 500 < window.scrollY) {
    
    } else {
    
    }
}); */

//test with a square...

el = document.querySelectorAll(".test");

function getOffset(el) {
  rectArray = [];
  let rect = [];
  let idsForElement = 0;
  let idsForObject = 0;

  el.forEach(div => {
    div.id = "div" + idsForElement;
    idsForElement++;
    rect.push(div.getBoundingClientRect());
  });

  rect.forEach(div => {
    rectArray.push({
      left: div.left + window.scrollX,
      top: div.top + window.scrollY,
      bottom: div.bottom - window.scrollY,
      width: div.width,
      id: "div" + idsForObject
    });
    idsForObject++;
  });

  return rectArray;
}

window.addEventListener("scroll", () => {
  let offSet = getOffset(el);

  offSet.forEach(div => {
    if (div.top - 500 < window.scrollY) {
      square("#" + div.id, window.innerWidth / 2 - div.width / 2);
      console.log(div.id);
    } else if (div.bottom - 500 < window.scrollY) {
      square("#" + div.id, -270);
    }
  });
});
