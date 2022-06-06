import { InputHandler } from "../Helpers/InputHandler";
import { Background } from "../Object/Background";
import { FlappyImg } from "../Object/FlappyImg";
import { PlayBtn } from "../Object/PlayBtn";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";
import { Constants } from "../Helpers/Contants";

export class StartScene extends Scene {
    flappyImg: FlappyImg;
    playBtn: PlayBtn;
    backgounds: Background[] = [];
    constructor(areaId: string) {
        super(areaId);
        // Init background
        for (let i = 0; i < 3; i++) {
            let bg = new Background(Constants.CANVAS_W * i, 0, Constants.CANVAS_W, Constants.CANVAS_H, 'bg')
            this.backgounds.push(bg);
        }
        this.flappyImg = new FlappyImg(355, 100, 300, 100, 'flappy');
        this.playBtn = new PlayBtn(400, 180, 180, 180, 'playbtn');
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
        document.addEventListener('keyup', event => {
            if (event.code === 'Enter') {
                InputHandler.enQueue('click_play', this.startGame.bind(this))
            }
        })
        document.addEventListener('click', () => {
            InputHandler.enQueue('click_play', this.startGame.bind(this))
        })
    }

    startGame() {
        SceneManager.changeScene('PlayScene')
    }

    render(scene: Scene): void {
        super.render(scene);
    }
}