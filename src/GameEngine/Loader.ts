export class Loader {
    // static library: Map<string, HTMLImageElement> = new Map<string, HTMLImageElement>();
    library: Map<string, HTMLImageElement>;

    constructor() {
        this.library = new Map<string, HTMLImageElement>();
    }

    getImage(key: string): HTMLImageElement {
        return this.library.get(key)!;
    }

    // static addToLibrary(key: string) {
    //     if (!this.library.has(key)) {
    //         let img = new Image();
    //         img.src = 'images/' + key + '.png';
    //         this.library.set(key, img);
    //     }
    // }
    // loadImage()
    async loadImage(key: string) {
        return new Promise<void>((resolve, reject) => {
            if (!this.library.has(key)) {
                let img = new Image();
                img.src = 'images/' + key + '.png';
                img.onload = function () {
                    resolve()
                }
                img.onerror = reject;
                this.library.set(key, img);
            }
        })
    }

}