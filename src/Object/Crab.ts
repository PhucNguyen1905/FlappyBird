import { ImgObject } from "./ImgObject";

export class Crab extends ImgObject {
    constructor(x: number, y: number, w: number, h: number, name: string) {
        super(x, y, w, h, name);
    }

    update(canw: number): void {
        this.x -= 1;
        if (this.x <= -20) {
            this.x = canw;
        }
    }

}