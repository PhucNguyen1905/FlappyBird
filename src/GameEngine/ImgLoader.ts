export class ImgLoader {
    static library: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();

    constructor() { }

    static getImage(key: string): HTMLImageElement {
        if (this.library.has(key)) {
            return this.library.get(key)!;
        } else {
            this.addToLibrary(key);
            return this.library.get(key)!;
        }
    }

    static addToLibrary(key: string) {
        if (!this.library.has(key)) {
            let img = new Image();
            img.src = 'images/' + key + '.png';
            this.library.set(key, img);
        }
    }
}