import { Over } from "../Object/Over";
import { RestartBtn } from "../Object/Restart";
import { Score } from "../Object/Score";
import { Scene } from "./Scene";

export class OverScene extends Scene {
    overImg: Over;
    restartBtn: RestartBtn;
    highestText: Score;
    status: number = 1;
    constructor(areaId: string) {
        super(areaId);
        this.overImg = new Over(350, 100, 300, 100, 'over');
        this.highestText = new Score(335, 245, 0, 0);
        this.highestText.setTextStyle("45px Arial", "#FF5B00");
        this.highestText.setContent('Highest Score: ');
        this.restartBtn = new RestartBtn(390, 270, 220, 90, 'restart');
        this.objs.push(this.overImg);
        this.texts.push(this.highestText);
        this.objs.push(this.restartBtn);
    }

    update(time: number, delta: number): number {
        this.inputHandler();
        this.highestText.updateScore(Scene.highestScore)
        if (this.status == -1) {
            this.status = 1;
            this.highestText.updateScore(0, 1);
            return -1;
        } else {
            return 1;
        }
        // return this.status;
    }


    inputHandler() {
        document.addEventListener('click', () => {
            this.status = -1;
        })
    }

    render(scene: Scene): void {
        super.render(scene);
    }
}