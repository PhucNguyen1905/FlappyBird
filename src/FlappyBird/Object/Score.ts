import { TextObject } from "../../GameEngine/Object/TextObject";

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


}