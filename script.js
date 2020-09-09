const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;
const winMessage = document.querySelector(".win");
const container = document.querySelector(".container");
const width = 500,
  height = 500,
  wallThiccness = 2,
  rows = 15,
  cols = 15,
  unitLengthX = width / cols,
  unitLengthY = height / rows,
  gridWall = 5;

// --------------------Matter JS Boilerplate---------------------
const engine = Engine.create();
// Switching off gravity
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
  element: container,
  engine: engine,
  options: {
    width,
    wireframes: false,
    height,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// ------------------Creating Walls of the canvas-------------------
const walls = [
  Bodies.rectangle(width / 2, 0, width, wallThiccness, {
    isStatic: true,
  }),
  Bodies.rectangle(0, height / 2, wallThiccness, height, {
    isStatic: true,
  }),
  Bodies.rectangle(width / 2, height, width, wallThiccness, {
    isStatic: true,
  }),
  Bodies.rectangle(width, height / 2, wallThiccness, height, {
    isStatic: true,
  }),
];

World.add(world, walls);

// ------------------Creating grid-------------------------
const grid = Array(rows)
  .fill(null)
  .map(() => Array(cols).fill(false));

// Veticals Array
const verticals = Array(rows)
  .fill(null)
  .map(() => Array(cols - 1).fill(false));

// Horizontals Array
const horizontals = Array(rows - 1)
  .fill(null)
  .map(() => Array(cols).fill(false));

// -------------------Starting Point--------------------

const startRow = Math.floor(Math.random() * rows);
const startCol = Math.floor(Math.random() * cols);

// ---------------------Functions-----------------------

function shuffle(arr) {
  let counter = arr.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
}

// Functionality to move inside the grid
function movingInGrid(row, column) {
  //  Visited Cell then Return
  if (grid[row][column]) {
    return;
  }
  // Mark the current cell as visited
  grid[row][column] = true;
  // Asseembling list of neighbors
  const neighbors = shuffle([
    [row - 1, column, "up"],
    [row, column + 1, "right"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
  ]);

  for (let neighbor of neighbors) {
    const [nextRow, nextCol, direction] = neighbor;
    // Checking if neighbor is out of bounds
    if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
      continue;
    }

    // Checking if the next cell is visited or not
    if (grid[nextRow][nextCol]) {
      continue;
    }

    // Remove horizontal walls
    if (direction === "up") {
      horizontals[row - 1][column] = true;
    } else if (direction === "down") {
      horizontals[row][column] = true;
    }

    // Removing Verical walls
    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
    }
    movingInGrid(nextRow, nextCol);
  }
}
movingInGrid(startRow, startCol);

// ---------------------Displaying horizontal grid walls--------------------
horizontals.forEach((row, rowIndex) => {
  row.forEach((openWall, columnIndex) => {
    if (openWall === true) {
      return;
    }
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      gridWall,
      {
        isStatic: true,
        label: "wall",
        render: {
          fillStyle: "orange",
        },
      }
    );
    World.add(world, wall);
  });
});

// -----------------Displaying vertical grid walls----------------
verticals.forEach((row, rowIndex) => {
  row.forEach((openWall, columnIndex) => {
    if (openWall === true) {
      return;
    }
    const wall = Bodies.rectangle(
      columnIndex * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      gridWall,
      unitLengthY + gridWall,
      {
        isStatic: true,
        label: "wall",
        render: {
          fillStyle: "orange",
        },
      }
    );
    World.add(world, wall);
  });
});

// -----------------Displaying Goal----------------
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  {
    isStatic: true,
    label: "goal",
    render: {
      fillStyle: "green",
    },
  }
);
World.add(world, goal);

//-----------------Displaying Ball-----------------
const radius = Math.min(unitLengthX, unitLengthY) / 2;
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, radius * 0.7, {
  label: "ball",
});
World.add(world, ball);

// ==================Event Listener================

document.addEventListener("keydown", (e) => {
  const { x, y } = ball.velocity;

  if (e.key === "ArrowUp" || e.key === "w") {
    Body.setVelocity(ball, { x, y: y - 5 });
  }
  if (e.key === "ArrowDown" || e.key === "s") {
    Body.setVelocity(ball, { x, y: y + 5 });
  }
  if (e.key === "ArrowRight" || e.key === "d") {
    Body.setVelocity(ball, { x: x + 5, y });
  }
  if (e.key === "ArrowLeft" || e.key === "a") {
    Body.setVelocity(ball, { x: x - 5, y });
  }
});

document.querySelector(".btn").addEventListener("click", () => {
  location.reload();
});

// -----------------Win Scenario----------------------

Events.on(engine, "collisionStart", (e) => {
  e.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      world.gravity.y = 1;
      winMessage.classList.remove("hidden");
      world.bodies.forEach((element) => {
        if (element.label === "wall") {
          Body.setStatic(element, false);
        }
      });
    }
  });
});

//  alert("Coonected");
