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
    constructor(areaId: string, game: Game) {
        super(areaId, game);
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
        // if (this.inputManager.getEnterPress() || this.inputManager.getMouseClick()) {
        //     InputHandler.enQueue('click_play', this.startGame.bind(this))
        // }
        document.addEventListener('keyup', event => {
            if (event.code === 'Enter') {
                this.inputManager.enQueue('click_play', this.startGame.bind(this))
            }
        })
        document.addEventListener('click', (e) => {
            let x: number = e.clientX;
            let y: number = e.clientY;
            if (this.inputManager.getButtonClick(x, y, 415, 180, 180, 180)) {
                this.inputManager.enQueue('click_play', this.startGame.bind(this))
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