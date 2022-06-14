import { createDiv, createStyles, css } from "./helpers";

export class SimpleContextMenu {
  public static Element: HTMLDivElement | undefined = undefined;
  private static _inited = false;

  private static _initialize(): void {
    this._inited = true;
    createStyles(css`
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

    document.addEventListener("mouseup", (e) => {
      if (this.Element && !this.Element.contains(e.target as Node)) {
        this.Remove();
      }
    });
  }

  public static Create(
    items: Record<string, () => void>,
    x: number,
    y: number
  ): HTMLDivElement {
    if (!this._inited) this._initialize();

    if (this.Element) this.Remove();

    const container = createDiv({
      id: "simpleContextMenu",
      addToBody: false,
    });
    container.style.top = y + "px";
    container.style.left = x + "px";

    for (const [key, func] of Object.entries(items)) {
      const d = createDiv({
        classList: ["simpleContextMenuItems"],
        addToBody: false,
        innerHTML: key,
      });
      container.appendChild(d);
      d.onclick = func;
    }

    this.Element = container;
    return container;
  }

  public static Remove(): void {
    this.Element?.remove();
    this.Element = undefined;
  }
}
