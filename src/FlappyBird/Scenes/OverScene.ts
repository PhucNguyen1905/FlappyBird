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
    constructor(name: string, game: Game, scoreController: ScoreController) {
        super(name, game);
        this.scoreController = scoreController;
        this.overImg = new Over(350, 100, 300, 100, 'over');
        this.highestText = this.scoreController.highestText;

        this.restartBtn = new RestartBtn(390, 270, 220, 90, 'restart');
        this.objs.push(this.overImg);
        this.objs.push(this.highestText);
        this.objs.push(this.restartBtn);
        this.inputHandler();
    }

    update(time: number, delta: number): void {

        this.highestText.updateScore(this.scoreController.getHighest())

    }


    inputHandler() {
        this.inputManager.onEnterDown(this.replayGame.bind(this), 'OverScene');
        this.inputManager.onSpaceDown(this.replayGame.bind(this), 'OverScene');
        this.inputManager.onClickBtn(this.replayGame.bind(this), 'OverScene');
        document.addEventListener('click', (e) => {
            let x: number = e.clientX;
            let y: number = e.clientY;
            if (this.inputManager.getButtonClick(x, y, 390, 270, 220, 90) && this.sceneName == this.sceneManager.getCurrentName()) {
                this.inputManager.enQueue('Click');
            }
        })
    }
    replayGame() {
        this.highestText.updateScore(0, 1);
        this.sceneManager.changeScene('PlayScene');
    }

    // render(scene: Scene): void {
    //     super.render(scene);
    // }
}