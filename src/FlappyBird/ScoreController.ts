import { Score } from "./Object/Score";
import { HighestText } from "./Object/TextObject/HighestText";

export class ScoreController {
    private curScore: number = 0;
    private highest: number = 0;
    scoreText: Score;
    highestText: HighestText;
    constructor() {
        this.highestText = new HighestText(335, 245, 0, 0);
        this.scoreText = new Score(10, 50, 0, 0);
        this.scoreText.setTextStyle("30px Arial", "#ffffff");
        this.scoreText.setContent("Score: ");
    }
    setHighest() {
        this.highest = Math.max(this.curScore, this.highest);
        this.highestText.updateScore(this.highest);
    }
    getHighest(): number {
        return this.highest;
    }
    getScoreText(): Score {
        return this.scoreText;
    }
    updateCurText(): void {
        this.scoreText.updateScore(this.curScore);
    }
    resetScore(): void {
        this.curScore = 0;
        this.updateCurText();
    }
    incScore(): void {
        this.curScore += 1;
    }

}