import { Scene } from "../../GameEngine/Scene";
import { Constants } from "../Contants";
import { Game } from "../../GameEngine/Game";
import { Pause } from "../Object/ImgObject/Pause";
import { TextObject } from "../../GameEngine/Object/TextObject";

export class PauseScene extends Scene {
    pauseImg: Pause;
    contText: TextObject

    constructor(name: string, game: Game) {
        super(name, game);
        this.pauseImg = new Pause(340, 80, 400, 300, 'pause');
        this.contText = new TextObject(400, 420, 200, 200);
        this.contText.setTextStyle("45px Arial", "#FF5B00");
        this.contText.setContent('Press Space!');
        this.objs.push(this.pauseImg);
        this.objs.push(this.contText);

        this.inputHandler();
    }

    update(time: number, delta: number): void {
    }


    inputHandler() {
        this.inputManager.onSpaceDown(this.resumeGame.bind(this), 'PauseScene');

    }

    resumeGame() {
        this.sceneManager.changeScene('PlayScene')
    }

    // render(scene: Scene): void {
    //     super.render(scene);
    // }
}