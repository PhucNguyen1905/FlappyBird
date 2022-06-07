import { HighestText } from "./Object/TextObject/HighestText";

export class ScoreController {
    private highest: number = 0;
    highestText: HighestText;
    constructor() {
        this.highestText = new HighestText(335, 245, 0, 0);
    }
    setHighest(score: number) {
        this.highest = Math.max(score, this.highest);
        this.highestText.updateScore(this.highest);
    }
    getHighest(): number {
        return this.highest;
    }
}