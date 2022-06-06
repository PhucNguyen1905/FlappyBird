import { ImgLoader } from "../GameEngine/ImgLoader";
import { ImgObject } from "./ImgObject";

export class Sprite extends ImgObject {
    frames: string[] = []
    idx: number = 0;
    numFrame: number = 0;
    imgName: string;

    changeFrameCount: number = 0;

    constructor(x: number, y: number, name: string, w: number, h: number, numFrame?: number) {
        super(x, y, w, h, name);
        this.numFrame = numFrame ? numFrame : 1;
        this.imgName = name.slice(0, name.length - 1);
        this.initFrames();
        this.imgKey = this.frames[this.idx];
    }
    initFrames(): void {
        for (let i = 1; i <= this.numFrame; i++) {

            let key: string = this.imgName + i;
            this.frames.push(key);
            ImgLoader.addToLibrary(key);
        }
    }
}