import { GameObject } from "./GameObject";

export class ImgObject extends GameObject {
    img: HTMLImageElement;
    constructor(x: number, y: number, w: number, h: number, name: string) {
        super(x, y, w, h)
        this.img = new Image();
        this.img.src = 'images/' + name + '.png';
    }
}
