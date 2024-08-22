/**@type{HTMLCanvasElement} */

const noteSlider = document.getElementById("noteSlider");
const shapeSlider = document.getElementById("shapeSlider");

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let noteNum = noteSlider.value;
let shapeNum = shapeSlider.value;
let notes = [];
let shapes = [];
const outRadius = 200;
let sAngle;

const soundFrequencies = [
  1760, 1567.98, 1396.91, 1318.51, 1174.66, 1046.5, 987.77, 880, 783.99, 698.46,
  659.25, 587.33, 523.25, 493.88, 440, 392, 349.23, 329.63, 293.66, 261.63,
];

function init() {
  notes = [];
  shapes = [];
  for (let i = 0; i < noteNum; i++) {
    let angle = ((Math.PI * 2) / noteNum) * i;
    let radius = 10;
    let soundFrequency = soundFrequencies[i];
    let hue = (100 - 250) * i;
    const note = new Note(
      canvas.width,
      canvas.height,
      angle,
      radius,
      outRadius,
      soundFrequency,
      hue
    );
    notes.push(note);
  }

  for (let i = 0; i < shapeNum; i++) {
    sAngle = ((Math.PI * 2) / shapeNum) * i;
    let radius = 10;
    let av = 0.01;
    const shape = new Shape(
      canvas.width,
      canvas.height,
      sAngle,
      radius,
      outRadius,
      av
    );
    shapes.push(shape);
  }
}
init();

noteSlider.addEventListener("change", () => {
  noteNum = Number(noteSlider.value);
  console.log(noteNum);
  init();
});

shapeSlider.addEventListener("change", () => {
  shapeNum = Number(shapeSlider.value);
  console.log(noteNum);
  init();
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);

  for (let i = 0; i < shapes.length; i++) {
    shapes[i].draw(ctx);
    shapes[i].update();
    for (let j = 0; j < notes.length; j++) {
      notes[j].draw(ctx);
      notes[j].update(shapes[i].x, shapes[i].y);
    }
  }
}
animate();

window.addEventListener("resize", () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
});
