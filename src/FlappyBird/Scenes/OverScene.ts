import { HighestText } from "../Object/TextObject/HighestText";
import { Over } from "../Object/ImgObject/Over";
import { RestartBtn } from "../Object/ImgObject/Restart";
import { Scene } from "../../GameEngine/Scene";
import { Game } from "../../GameEngine/Game";
import { ScoreController } from "../ScoreController";

export class OverScene extends Scene {
    overImg: Over;
    restartBtn: RestartBtn;
    highestText: HighestText;
    scoreController: ScoreController;
    constructor(areaId: string, game: Game, scoreController: ScoreController) {
        super(areaId, game);
        this.scoreController = scoreController;
        this.overImg = new Over(350, 100, 300, 100, 'over');
        this.highestText = this.scoreController.highestText;

        this.restartBtn = new RestartBtn(390, 270, 220, 90, 'restart');
        this.objs.push(this.overImg);
        this.texts.push(this.highestText);
        this.objs.push(this.restartBtn);
        this.inputHandler();
    }

    update(time: number, delta: number): void {

        this.highestText.updateScore(this.scoreController.getHighest())

    }


    inputHandler() {
        // if (this.inputManager.getEnterPress()) {
        //     InputHandler.enQueue('restart', this.replayGame.bind(this))
        // }
        document.addEventListener('keyup', event => {
            if (event.code === 'Enter') {
                this.inputManager.enQueue('restart', this.replayGame.bind(this))
            }
        })
        // document.addEventListener('click', () => {
        //     InputHandler.enQueue('restart', this.replayGame.bind(this))
        // })
    }
    replayGame() {
        this.highestText.updateScore(0, 1);
        this.sceneManager.changeScene('PlayScene');
    }

    render(scene: Scene): void {
        super.render(scene);
    }
}