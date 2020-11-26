Reveal.initialize({
  // Push each slide change to the browser history
  history: false,
  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions. Can be
  // specified using percentage units.
  width: 1920,
  height: 1080,
  verticator: {
    darktheme: true,
    skipuncounted: true,
    clickable: true,
    color: "#42affa",
    oppositecolor: "",
  },
  helpButtonDisplay: "always",
  menu: {
    side: "left",
    width: "normal",
    numbers: false,
    titleSelector: "h1, h2, h3, h4, h5, h6",
    useTextContentForMissingTitles: false,
    hideMissingTitles: true,
    markers: true,
    custom: false,
    themes: false,
    themesPath: "dist/theme/",
    transitions: false,
    openButton: true,
    openSlideNumber: false,
    keyboard: true,
    sticky: false,
    autoOpen: true,
    delayInit: false,
    openOnInit: false,
    loadIcons: true,
    custom: [
      {
        title: "Ayuda",
        icon: '<i class="fa fa-info">',
        src: "./links.txt",
      },
    ],
  },
  chalkboard: {
    boardmarkerWidth: 13,
    chalkWidth: 7,
    chalkEffect: 1.0,
    src: null,
    readOnly: undefined,
    toggleChalkboardButton: {
      left: "70px",
      bottom: "30px",
      top: "auto",
      right: "auto",
    },
    toggleNotesButton: {
      left: "110px",
      bottom: "30px",
      top: "auto",
      right: "auto",
    },
    transition: 800,
    theme: "chalkboard",
    background: ["rgba(127,127,127,.1)", path + "img/blackboard.png"],
    grid: { color: "rgb(50,50,10,0.5)", distance: 80, width: 2 },
    eraser: { src: path + "img/sponge.png", radius: 20 },
    boardmarkers: [
      {
        color: "rgba(30,144,255, 1)",
        cursor: "url(" + path + "img/boardmarker-blue.png), auto",
      },
      {
        color: "rgba(220,20,60,1)",
        cursor: "url(" + path + "img/boardmarker-red.png), auto",
      },
      {
        color: "rgba(50,205,50,1)",
        cursor: "url(" + path + "img/boardmarker-green.png), auto",
      },
    ],
    chalks: [
      {
        color: "rgba(255,255,255,0.5)",
        cursor: "url(" + path + "img/chalk-white.png), auto",
      },
      {
        color: "rgba(96, 154, 244, 0.5)",
        cursor: "url(" + path + "img/chalk-blue.png), auto",
      },
      {
        color: "rgba(237, 20, 28, 0.5)",
        cursor: "url(" + path + "img/chalk-red.png), auto",
      },
      {
        color: "rgba(20, 237, 28, 0.5)",
        cursor: "url(" + path + "img/chalk-green.png), auto",
      },
    ],
  },

  // reveal.js plugins
  plugins: [Verticator, RevealSearch, RevealZoom, RevealMenu, RevealChalkboard],
});
title_footer.initialize("Jall Profesor", "");
