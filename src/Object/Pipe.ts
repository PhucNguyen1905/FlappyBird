import { ImgObject } from "./ImgObject";

const PIPE_H: number = 269;
const SPACE_BET_P: number = 160;

export class Pipe extends ImgObject {
    isRunning = false;
    pos: string;
    constructor(x: number, y: number, w: number, h: number, name: string, pos?: number) {
        super(x, y, w, h, name);
        this.width = this.img.width;
        this.height = this.img.height;
        let p = pos ? true : false;
        if (p) {
            this.pos = 'top'
        } else {
            this.pos = 'bottom'
        }
    }

    genNewTop(canvas_w: number, idx: number): number {
        let ranY: number = Math.floor(Math.random() * PIPE_H) - PIPE_H + 5
        this.x = canvas_w;
        this.y = ranY
        return ranY;
    }
    changeBottomPipe(canvas_w: number, y: number): void {
        this.x = canvas_w;
        this.y = PIPE_H + y + SPACE_BET_P;
    }

    update(delta: number): void {
        if (this.isRunning) {
            this.x -= 4;
        }
    }

    isPassed(): Boolean {
        if (this.x == 80 && this.pos == 'top') {
            return true;
        }
        return false;
    }
}