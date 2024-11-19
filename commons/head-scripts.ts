const getHeadScripts = () => [
  {
    src: "/public/assets/js/webfont.js.download",
    body: true,
    async: true,
    defer: true,
  },
  {
    src: "/public/assets/js/webflow.7d40f3606.js.download",
    body: true,
    async: true,
    defer: true,
  },
  {
    src: "/public/assets/js/jquery-3.5.1.min.dc5e7f18c8.js.download",
    body: true,
    async: true,
    defer: true,
  },
  {
    innerHTML: `
            WebFont.load({
              google: {
                families: ["Inter:200,300,regular,500,600,100italic,200italic"],
              },
            });
          `,
    type: "text/javascript",
    defer: true,
  },
  {
    innerHTML: `
            !(function (o, c) {
              var n = c.documentElement,
                t = " w-mod-";
              (n.className += t + "js"),
                ("ontouchstart" in o ||
                  (o.DocumentTouch && c instanceof DocumentTouch)) &&
                (n.className += t + "touch");
            })(window, document);
          `,
    type: "text/javascript",
    defer: true,
  },
];

export default getHeadScripts;
