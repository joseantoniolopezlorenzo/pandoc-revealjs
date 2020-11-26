// jsxgrap code
var brd = JXG.JSXGraph.initBoard("box", {
  boundingbox: [-1.5, 1.5, 1.5, -1.5],
  axis: true,
});
var A = brd.create("point", [-1, -1]),
  B = brd.create("point", [1, -1]),
  C = brd.create("point", [0, 1]),
  alpha = brd.create("angle", [B, A, C], {
    type: "sector",
    orthoType: "square",
    orthoSensitivity: 2,
    radius: 0.5,
  }),
  beta = brd.create("angle", [C, B, A], {
    type: "sector",
    orthoType: "sectordot",
    orthoSensitivity: 2,
    radius: 0.5,
  });
