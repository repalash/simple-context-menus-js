export function createDiv<T extends keyof HTMLElementTagNameMap = "div">({ innerHTML, id, classList, addToBody, elementTag, }: Partial<InnerHTML> & {
    id?: string;
    classList?: string[];
    addToBody?: boolean;
    elementTag?: T;
}): HTMLElementTagNameMap[T];
export function createStyles(styles: string): HTMLStyleElement;
export const css: (strings: readonly string[] | ArrayLike<string>, ...rest: any[]) => string;
export class SimpleContextMenu {
    static Element: HTMLDivElement | undefined;
    static Create(items: Record<string, () => void>, x: number, y: number): HTMLDivElement;
    static Remove(): void;
}

//# sourceMappingURL=types.d.ts.map
