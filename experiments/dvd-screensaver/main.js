const app = document.getElementById("app");
const ctx = app.getContext("2d");

const WIDTH = 640;
const HEIGHT = 480;

app.height = HEIGHT;
app.width = WIDTH;

let previousTime = 0.0;

const squares = [];
for (let i = 0; i < 1; i++) {
  squares.push(
    new Square(
      ctx,
      app.width / 2 - 10,
      app.height / 2 - 10,
      25,
      25,
      Math.random() * (Math.round(Math.random()) * 2 - 1),
      Math.random() * (Math.round(Math.random()) * 2 - 1)
    )
  );
}

const loop = (time) => {
  const dt = time - previousTime;
  previousTime = time;

  // update scene;
  squares.forEach((square) => square.update(dt));

  // clear the canvas
  ctx.fillStyle = "#1E2647";
  ctx.clearRect(0, 0, app.width, app.height);
  ctx.fillRect(0, 0, app.width, app.height);

  squares.forEach((square) => square.render());
  //   square.();

  window.requestAnimationFrame(loop);
};

window.requestAnimationFrame((time) => {
  previousTime = time;
  window.requestAnimationFrame(loop);
});
