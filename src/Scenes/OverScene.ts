import { InputHandler } from "../Helpers/InputHandler";
import { HighestText } from "../Object/HighestText";
import { Over } from "../Object/Over";
import { RestartBtn } from "../Object/Restart";
import { Score } from "../Object/Score";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class OverScene extends Scene {
    overImg: Over;
    restartBtn: RestartBtn;
    highestText: HighestText;
    constructor(areaId: string) {
        super(areaId);
        this.overImg = new Over(350, 100, 300, 100, 'over');
        this.highestText = new HighestText(335, 245, 0, 0);

        this.restartBtn = new RestartBtn(390, 270, 220, 90, 'restart');
        this.objs.push(this.overImg);
        this.texts.push(this.highestText);
        this.objs.push(this.restartBtn);
        this.inputHandler();
    }

    update(time: number, delta: number): void {

        this.highestText.updateScore(HighestText.highestScore)

    }


    inputHandler() {
        document.addEventListener('keyup', event => {
            if (event.code === 'Enter') {
                InputHandler.enQueue('restart', this.replayGame.bind(this))
            }
        })
        document.addEventListener('click', () => {
            InputHandler.enQueue('restart', this.replayGame.bind(this))
        })
    }
    replayGame() {
        this.highestText.updateScore(0, 1);
        SceneManager.changeScene('PlayScene');
    }

    render(scene: Scene): void {
        super.render(scene);
    }
}