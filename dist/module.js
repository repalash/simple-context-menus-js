function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $360e822c4944acd2$exports = {};

$parcel$export($360e822c4944acd2$exports, "SimpleContextMenu", () => $360e822c4944acd2$export$7a7a71af75e5b336);
var $e2e1ea6dd3b7d2e1$exports = {};

$parcel$export($e2e1ea6dd3b7d2e1$exports, "createDiv", () => $e2e1ea6dd3b7d2e1$export$331ff980f0d45cff);
$parcel$export($e2e1ea6dd3b7d2e1$exports, "createStyles", () => $e2e1ea6dd3b7d2e1$export$31f077b88a3c784c);
$parcel$export($e2e1ea6dd3b7d2e1$exports, "css", () => $e2e1ea6dd3b7d2e1$export$dbf350e5966cf602);
function $e2e1ea6dd3b7d2e1$export$331ff980f0d45cff({ innerHTML: innerHTML = "" , id: id , classList: classList , addToBody: addToBody = true , elementTag: elementTag = "div"  }) {
    const elem = document.createElement(elementTag);
    if (id) elem.id = id;
    elem.innerHTML = innerHTML;
    if (classList) elem.classList.add(...classList);
    if (addToBody) document.body.appendChild(elem);
    return elem;
}
function $e2e1ea6dd3b7d2e1$export$31f077b88a3c784c(styles) {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return styleSheet;
}
const $e2e1ea6dd3b7d2e1$export$dbf350e5966cf602 = (strings, ...rest)=>String.raw({
        raw: strings
    }, ...rest);


class $360e822c4944acd2$export$7a7a71af75e5b336 {
    static Element = undefined;
    static _inited = false;
    static _initialize() {
        this._inited = true;
        (0, $e2e1ea6dd3b7d2e1$export$31f077b88a3c784c)((0, $e2e1ea6dd3b7d2e1$export$dbf350e5966cf602)`
      #simpleContextMenu {
        background: #2c2c2e99;
        backdrop-filter: blur(8px);
        border: 0.5px solid rgba(20, 20, 20, 0.3);
        width: auto;
        height: auto;
        position: absolute;
        display: flex;
        flex-direction: column;
        z-index: 9999;
        padding: 0.35rem 0.2rem;
        border-radius: 0.375rem;
        min-width: 6rem;
        pointer-events: auto;
        box-shadow: 0px 2px 10px rgba(12, 12, 12, 0.2);
      }

      .simpleContextMenuItems {
        color: white;
        font-size: 0.85rem;
        font-family: "SF Pro Text", -apple-system, BlinkMacSystemFont, Roboto,
          "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: transparent;
        cursor: pointer;
        padding: 0.12rem 0.35rem;
        border-radius: 0.25rem;
        line-height: 1rem;
        font-weight: 500;
      }

      .simpleContextMenuItems:hover {
        color: white;
        background-color: #017aff;
      }
    `);
        document.addEventListener("mouseup", (e)=>{
            if (this.Element && !this.Element.contains(e.target)) this.Remove();
        });
    }
    static Create(items, x, y) {
        if (!this._inited) this._initialize();
        if (this.Element) this.Remove();
        const container = (0, $e2e1ea6dd3b7d2e1$export$331ff980f0d45cff)({
            id: "simpleContextMenu",
            addToBody: false
        });
        container.style.top = y + "px";
        container.style.left = x + "px";
        for (const [key, func] of Object.entries(items)){
            const d = (0, $e2e1ea6dd3b7d2e1$export$331ff980f0d45cff)({
                classList: [
                    "simpleContextMenuItems"
                ],
                addToBody: false,
                innerHTML: key
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





export {$e2e1ea6dd3b7d2e1$export$331ff980f0d45cff as createDiv, $e2e1ea6dd3b7d2e1$export$31f077b88a3c784c as createStyles, $e2e1ea6dd3b7d2e1$export$dbf350e5966cf602 as css, $360e822c4944acd2$export$7a7a71af75e5b336 as SimpleContextMenu};
//# sourceMappingURL=module.js.map
