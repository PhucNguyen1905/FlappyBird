import { Background } from "../Object/ImgObject/Background";
import { FlappyImg } from "../Object/ImgObject/FlappyImg";
import { PlayBtn } from "../Object/ImgObject/PlayBtn";
import { Scene } from "../../GameEngine/Scene";
import { Constants } from "../Contants";
import { Game } from "../../GameEngine/Game";

export class StartScene extends Scene {
    flappyImg: FlappyImg;
    playBtn: PlayBtn;
    backgounds: Background[] = [];
    constructor(areaId: string, name: string, game: Game) {
        super(areaId, name, game);
        // Init background
        for (let i = 0; i < 3; i++) {
            let bg = new Background(Constants.CANVAS_W * i, 0, Constants.CANVAS_W, Constants.CANVAS_H, 'bg')
            this.backgounds.push(bg);
        }
        this.flappyImg = new FlappyImg(355, 100, 300, 100, 'flappy');
        this.playBtn = new PlayBtn(415, 180, 180, 180, 'playbtn');
        this.addObjs(this.backgounds);
        this.objs.push(this.flappyImg);
        this.objs.push(this.playBtn);
        this.inputHandler();
    }

    update(time: number, delta: number): void {
        this.updateBackground();
    }
    updateBackground(): void {
        for (let i = 0; i < this.backgounds.length; i++) {
            this.backgounds[i].x -= 1;
            if (this.backgounds[i].x <= -1 * this.backgounds[i].width) {
                this.backgounds[i].x = this.backgounds[i].width * 3;
            }
        }
    }


    inputHandler() {
        this.inputManager.onEnterDown(this.startGame.bind(this), 'StartScene');
        this.inputManager.onClickBtn(this.startGame.bind(this), 'StartScene');
        document.addEventListener('click', (e) => {
            let x: number = e.clientX;
            let y: number = e.clientY;
            if (this.inputManager.getButtonClick(x, y, 415, 120, 180, 180) && this.sceneName == this.sceneManager.getCurrentName()) {
                this.inputManager.enQueue('Click');
            }
        })
    }

    startGame() {
        this.sceneManager.changeScene('PlayScene')
    }

    render(scene: Scene): void {
        super.render(scene);
    }
}