import { ImgObject } from "./ImgObject";

export class Background extends ImgObject {
    constructor(x: number, y: number, w: number, h: number, name: string) {
        super(x, y, w, h, name);
    }

    update(len: number): void {
        this.x -= 1;
        if (this.x <= -1 * this.width) {
            this.x = this.width * len;
        }
    }

}