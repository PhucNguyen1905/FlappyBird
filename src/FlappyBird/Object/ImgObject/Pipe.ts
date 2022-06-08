import { ImgObject } from "../../../GameEngine/Object/ImgObject";
import { Constants } from "../../Contants";

export class Pipe extends ImgObject {
    isRunning = false;
    pos: string;
    constructor(x: number, y: number, w: number, h: number, name: string, pos?: number) {
        super(x, y, w, h, name);
        let p = pos ? true : false;
        if (p) {
            this.pos = 'top'
            this.width = Constants.PIPE_TOP_W;
            this.height = Constants.PIPE_TOP_H;
        } else {
            this.pos = 'bottom'
            this.width = Constants.PIPE_BOT_W;
            this.height = Constants.PIPE_BOT_H;
        }
    }

    genNewTop(canvas_w: number, idx: number): number {
        let ranY: number = Math.floor(Math.random() * Constants.PIPE_H) - Constants.PIPE_H + 5;
        if (ranY <= -Constants.PIPE_H + 40) {
            ranY += 30;
        }
        this.x = canvas_w;
        this.y = ranY
        return ranY;
    }
    changeBottomPipe(canvas_w: number, y: number): void {
        this.x = canvas_w;
        this.y = Constants.PIPE_H + y + Constants.SPACE_BET_P;
    }

    update(delta: number): void {
        if (this.isRunning) {
            this.x -= 4 * (delta / 16.67);
        }
    }

    isPassed(): Boolean {
        if (this.x <= 80 && this.x >= 78 && this.pos == 'top') {
            return true;
        }
        return false;
    }
}