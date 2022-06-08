export class Loader {
    library: Map<string, HTMLImageElement>;

    constructor() {
        this.library = new Map<string, HTMLImageElement>();
    }

    getImage(key: string): HTMLImageElement {
        return this.library.get(key)!;
    }

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