import { TextObject } from "../../GameEngine/Object/TextObject";
import { Scene } from "../../GameEngine/Scene";

export class Score extends TextObject {
    final: string = '';
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
    }
    updateScore(score: number, isHighest?: number) {
        if (isHighest) {
            this.final = this.content;
        } else {
            this.final = this.content + score;
        }
    }

    render(ctx: CanvasRenderingContext2D, scene: Scene) {
        ctx.font = this.font;
        ctx.fillStyle = this.style;
        ctx.fillText(this.final, this.x, this.y)
    }


}