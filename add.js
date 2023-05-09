//change the title CSS when clicked on
const title = document.querySelector(".title");

title.addEventListener("click", function() {
    title.classList.toggle("change");
});

//some intro text along with a slice
let text = "This is a website to play around with JavaScript. You can click through them and see how they transform from a work in progress into the finished piece!";
let part = text.slice(50);
document.getElementById("intro").innerHTML = part; 

//Adding the animation of the little X head when hovered over.
const headBounce = document.querySelector("#doodle");

headBounce.addEventListener('mouseenter', () => {
    if(!headBounce.classList.contains('hover')) {
    headBounce.classList.add('hover');
    }
})
headBounce.addEventListener('mouseleave', () => {
    if (headBounce.classList.contains('hover')) {
        headBounce.classList.remove('hover');
    }
})

//object used to describe the art gallery
const gallery = {
    art: "miscellaneous",
    time: "past few months",
    type: "fan-art",
};

gallery.info = function() {
    return `Here are a few ${this.art} drawings that I've made in the ${this.time}, primarily composed of ${this.type}.`
};

document.getElementById("gallery").innerHTML = gallery.info();

//Array used to write out descriptions beneath each drawing and a for loop for one aspect.
let arttext = "Art Type:";
let art = ["For Fun", "Gift", "Commission"];

document.getElementById("gift").innerHTML = arttext + " " + art[1]; 
document.getElementById("commission").innerHTML = arttext + " " + art[2];

const Fun = document.querySelectorAll(".fun");
for (var i = 0; i < Fun.length; i++) {
    Fun[i].textContent = "Art Type: " + art[0];
  }

//AJAX calling for a text document about my art process/growth.
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("general").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "images/art_info.txt");
    xhttp.send();
  };

//well-wish message based on time
const hour = new Date().getHours(); 
let greeting;
if (hour < 17) {
  greeting = "Thank you for taking the time to read, here's to a lovely day!";
} else {
  greeting = "Thank you for taking the time to read, here's to a pleasant night!";
}

document.getElementById("sendoff").innerHTML = greeting;


//all of the button toggles
function imgChange(){
    let get = document.getElementById("image1");
    if (get.src.match("images/demian.png")) {
        get.src = "./images/demianFinal.png";
    }
    else {
        get.src = "./images/demian.png";
    }
};
function imgChange2(){
    let get2 = document.getElementById("image2");
    if (get2.src.match("images/glitchy.png")) {
        get2.src = "./images/glitchyFinal.png";
    }
    else {
        get2.src = "./images/glitchy.png";
    }
};
function imgChange3(){
    let get3 = document.getElementById("image3");
    if (get3.src.match("images/seven.png")) {
        get3.src = "./images/sevenFinal.png";
    }
    else {
        get3.src = "./images/seven.png";
    }
};
function imgChange4(){
    let get4 = document.getElementById("image4");
    if (get4.src.match("images/karkat.png")) {
        get4.src = "./images/karkatFinal.png";
    }
    else {
        get4.src = "./images/karkat.png";
    }
};
function imgChange5(){
    let get5 = document.getElementById("image5");
    if (get5.src.match("images/fusion.png")) {
        get5.src = "./images/fusionFinal.png";
    }
    else {
        get5.src = "./images/fusion.png";
    }
};
function imgChange6(){
    let get6 = document.getElementById("image6");
    if (get6.src.match("images/rock.png")) {
        get6.src = "./images/rockFinal.png";
    }
    else {
        get6.src = "./images/rock.png";
    }
};