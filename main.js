const text_size = 20;
const max_interval = 150;
const speed = 3;
const gap = text_size + 12;

let columns = [];
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0);
  textSize(text_size);

  for (let i = 0; i < width / gap; i++) columns.push(new Column(createVector(i * gap, 0)));
}

function draw() {
  background(0, 0, 0, 10);
  columns.forEach((column) => {
    column.update();
  });
}
