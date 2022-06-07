import { Score } from "../Score";

export class HighestText extends Score {
    highestScore: number = 0;
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
        this.setTextStyle("45px Arial", "#FF5B00");
        this.setContent('Highest Score: ');
    }
}