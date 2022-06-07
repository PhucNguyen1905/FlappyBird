import { InputHandler } from "../../GameEngine/Helpers/InputHandler";
import { HighestText } from "../Object/TextObject/HighestText";
import { Over } from "../Object/ImgObject/Over";
import { RestartBtn } from "../Object/ImgObject/Restart";
import { Scene } from "../../GameEngine/Scene";
import { SceneManager } from "../../GameEngine/SceneManager";
import { Game } from "../../GameEngine/Game";

export class OverScene extends Scene {
    overImg: Over;
    restartBtn: RestartBtn;
    highestText: HighestText;
    constructor(areaId: string, game: Game) {
        super(areaId, game);
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