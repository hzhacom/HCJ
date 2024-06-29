const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change",ABC);

function setWheather() {
    const choice = select.value;

    if (choice ==="sunny") {
        para.textContent = "阳光明媚";
    }else if(choice === "overcast"){
        para.textContent = "天空灰蒙蒙";
    }else if(choice === 'rainy'){
        para.textContent = "带上雨衣雨伞";
    }else if(choice === "snowing"){
        para.textContent = "大雪纷飞，堆雪人";
    }else{
        para.textContent = "";
    }

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


a = 1;
b = 2;
c = 3;
if(!(a === 1 && b === 3)) {
    alert("OK")
}else{
    alert("ON")
}
// ||

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function ABC() {
    const choice = select.value;

    switch (choice) {
        case "sunny":
            para.textContent = "1阳光明媚";
            break;
        case "rainy":
            para.textContent = "1下雨";
            break;
        case "snowing":
            para.textContent = "1大雪纷飞";
            break;
        case "overcast":
            para.textContent = "1天空灰蒙蒙";
            break;
        default:
            para.textContent = "1";
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const asd = false;
const aq = asd
    ? alert("X")
    : alert("QQ");


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const selet = document.querySelector("select");
const html =  document.querySelector("html");
document.body.style.padding = "10px";

function update(bg,tc) {
    html.style.backgroundColor = bg;
    html.style.color = tc;
}

selet.addEventListener("change", () =>
    selet.value ==="black"
        ? update("black","white")
        : update("white","black"),
);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////