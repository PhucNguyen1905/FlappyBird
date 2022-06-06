import { ImgObject } from "./ImgObject";

export class Sprite extends ImgObject {
    frames: HTMLImageElement[] = []
    idx: number = 0;
    numFrame: number = 0;
    imgName: string;

    changeFrameCount: number = 0;

    constructor(x: number, y: number, name: string, w: number, h: number, numFrame?: number) {
        super(x, y, w, h, name);
        this.numFrame = numFrame ? numFrame : 1;
        this.imgName = name.slice(0, name.length - 1);
        this.initFrames();
        this.img = this.frames[this.idx];
    }
    initFrames(): void {
        for (let i = 1; i <= this.numFrame; i++) {
            let img = new Image();
            img.src = 'images/' + this.imgName + i + '.png';
            this.frames.push(img);
        }
    }
}