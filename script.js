// Get the canvas and context
const canvas = document.getElementById('paintCanvas');
const context = canvas.getContext('2d');

// Get the color picker input
const colorPicker = document.getElementById('color');

// Set default drawing properties
let isDrawing = false;
context.lineWidth = 5;
context.lineJoin = 'round';
context.lineCap = 'round';
context.strokeStyle = colorPicker.value;

// Add event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
colorPicker.addEventListener('input', updateColor);

// Functions
function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function draw(e) {
    if (!isDrawing) return;

    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
}

function stopDrawing() {
    isDrawing = false;
    context.closePath();
}

function updateColor() {
    context.strokeStyle = colorPicker.value;
}
