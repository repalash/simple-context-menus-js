export function createDiv<T extends keyof HTMLElementTagNameMap = "div">({
  innerHTML = "",
  id,
  classList,
  addToBody = true,
  elementTag = <T>"div",
}: Partial<InnerHTML> & {
  id?: string;
  classList?: string[];
  addToBody?: boolean;
  elementTag?: T;
}): HTMLElementTagNameMap[T] {
  const elem = document.createElement(elementTag);
  if (id) elem.id = id;
  elem.innerHTML = innerHTML;
  if (classList) elem.classList.add(...classList);
  if (addToBody) document.body.appendChild(elem);
  return elem;
}
export function createStyles(styles: string) {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
  return styleSheet;
}
export const css = (
  strings: readonly string[] | ArrayLike<string>,
  ...rest: any[]
) => String.raw({ raw: strings } as TemplateStringsArray, ...rest);
