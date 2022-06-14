function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function (key) {
    if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      },
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {
    get: v,
    set: s,
    enumerable: true,
    configurable: true,
  });
}
var $725fed02cb106168$exports = {};

$parcel$export(
  $725fed02cb106168$exports,
  "CustomContextMenu",
  () => $725fed02cb106168$export$7d10f1a4f7535fce
);
var $dfecd32049fa58e9$exports = {};

$parcel$export(
  $dfecd32049fa58e9$exports,
  "createDiv",
  () => $dfecd32049fa58e9$export$331ff980f0d45cff
);
$parcel$export(
  $dfecd32049fa58e9$exports,
  "createStyles",
  () => $dfecd32049fa58e9$export$31f077b88a3c784c
);
$parcel$export(
  $dfecd32049fa58e9$exports,
  "css",
  () => $dfecd32049fa58e9$export$dbf350e5966cf602
);
function $dfecd32049fa58e9$export$331ff980f0d45cff({
  innerHTML: innerHTML = "",
  id: id,
  classList: classList,
  addToBody: addToBody = true,
  elementTag: elementTag = "div",
}) {
  const elem = document.createElement(elementTag);
  if (id) elem.id = id;
  elem.innerHTML = innerHTML;
  if (classList) elem.classList.add(...classList);
  if (addToBody) document.body.appendChild(elem);
  return elem;
}
function $dfecd32049fa58e9$export$31f077b88a3c784c(styles) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  return styleSheet;
}
const $dfecd32049fa58e9$export$dbf350e5966cf602 = (strings, ...rest) =>
  String.raw(
    {
      raw: strings,
    },
    ...rest
  );

class $725fed02cb106168$export$7d10f1a4f7535fce {
  static Element = undefined;
  static _inited = false;
  static _initialize() {
    this._inited = true;
    (0, $dfecd32049fa58e9$export$31f077b88a3c784c)((0,
    $dfecd32049fa58e9$export$dbf350e5966cf602)`
          #customContextMenu {
            background: #2c2c2e99;
            backdrop-filter: blur(8px);
            border: 0.5px solid rgba(20, 20, 20, 0.3);
            width: auto;
            height: auto;
            position: absolute;
            display: flex;
            flex-direction: column;
            z-index: 9999;
            padding: 0.35rem 0.20rem;
            border-radius: 0.375rem;
            min-width: 6rem;
            pointer-events: auto;
            box-shadow: 0px 2px 10px rgba(12, 12, 12, 0.2);
          }

          .customContextMenuItems {
            color: white;
            font-size: 0.85rem;
            font-family: 'SF Pro Text',-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';;
            background-color: transparent;
            cursor: pointer;
            padding: 0.12rem 0.35rem;
            border-radius: 0.25rem;
            line-height: 1rem;
            font-weight: 500;
          }

          .customContextMenuItems:hover {
            color: white;
            background-color: #017AFF;
          }
        `);
    document.addEventListener("mouseup", (e) => {
      if (this.Element && !this.Element.contains(e.target)) this.Remove();
    });
  }
  static Create(items, x, y) {
    if (!this._inited) this._initialize();
    if (this.Element) this.Remove();
    const container = (0, $dfecd32049fa58e9$export$331ff980f0d45cff)({
      id: "customContextMenu",
      addToBody: false,
    });
    container.style.top = y + "px";
    container.style.left = x + "px";
    for (const [key, func] of Object.entries(items)) {
      const d = (0, $dfecd32049fa58e9$export$331ff980f0d45cff)({
        classList: ["customContextMenuItems"],
        addToBody: false,
        innerHTML: key,
      });
      container.appendChild(d);
      d.onclick = func;
    }
    this.Element = container;
    return container;
  }
  static Remove() {
    this.Element?.remove();
    this.Element = undefined;
  }
}

$parcel$exportWildcard(module.exports, $725fed02cb106168$exports);
$parcel$exportWildcard(module.exports, $dfecd32049fa58e9$exports);

//# sourceMappingURL=main.js.map
