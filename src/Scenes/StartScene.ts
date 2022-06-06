import { Background } from "../Object/Background";
import { FlappyImg } from "../Object/FlappyImg";
import { PlayBtn } from "../Object/PlayBtn";
import { Scene } from "./Scene";

const CANVAS_W = 1000;
const CANVAS_H = 500;

export class StartScene extends Scene {
    flappyImg: FlappyImg;
    playBtn: PlayBtn;
    backgounds: Background[] = [];
    status: number = 1;
    constructor(areaId: string) {
        super(areaId);
        // Init background
        for (let i = 0; i < 3; i++) {
            let bg = new Background(CANVAS_W * i, 0, CANVAS_W, CANVAS_H, 'bg')
            this.backgounds.push(bg);
        }
        this.flappyImg = new FlappyImg(355, 100, 300, 100, 'flappy');
        this.playBtn = new PlayBtn(400, 180, 180, 180, 'playbtn');
        this.addObjs(this.backgounds);
        this.objs.push(this.flappyImg);
        this.objs.push(this.playBtn);

    }

    update(time: number, delta: number): number {
        this.updateBackground();
        this.inputHandler();
        if (this.status == -1) {
            this.status = 1;
            return -1;
        } else {
            return 1;
        }
        // return this.status;
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
        document.addEventListener('click', () => {
            this.status = -1;
        })
    }

    render(scene: Scene): void {
        super.render(scene);
    }
}