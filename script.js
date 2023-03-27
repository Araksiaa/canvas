const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const pencilBtn=document.getElementById("pencil-btn");
const eraserBtn=document.getElementById("eraser-btn");
const clearBtn=document.getElementById("clear-btn");
const palete=document.getElementById("palete")


let isDrowing=false;
let lastX=0;
let lastY=0;

function draw(event){
if (!isDrowing) return;

ctx.beginPath();
ctx.moveTo(lastX, lastY)
ctx.LineTo(event.offsetX, event.offsetY)
ctx.stroke();

[lastX, lastY]=[event.offsetX, event.offsetY]

}

function startDrawing(event){
isDrowing=true;
[lastX, lastY]=[event.offsetX, event.offsetY]
}

function stopDrawing(event){

isDrowing=true;
[lastX, lastY]=[event.offsetX, event.offsetY]

}

function stopDrawing(){
    isDrowing=false;
    
    }
function activatePencil(){
ctx.strokeStyle='#fff'
ctx.lineWidth=2;
pencilBtn.classList.add("active");
eraserBtn.classList.remove("active")

}

function activateEraser(){
ctx.strokeStyle='#fff'
ctx.lineWidth=2;
eraserBtn.classList.add("active")
pencilBtn.classList.remove("active")
}


function clearcanvas(){

ctx.clearcanvas(0, 0, canvas.width, canvas.height)

}

function choosepalete(){
    if(e.target.id === 'palete') {
        ctx.paleteStyle = e.target.value;
    }
}


canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseuo", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);


canvas.addEventListener("click", activatePencil);
canvas.addEventListener("click", activateEraser);
canvas.addEventListener("click", clearcanvas);
canvas.addEventListener("click", choosepalete)