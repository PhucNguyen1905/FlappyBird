import { Background } from "../Object/Background";
import { Bird } from "../Object/Bird";
import { Pipe } from "../Object/Pipe";
import { Scene } from "./Scene";
import { Score } from "../Object/Score";
import { Crab } from "../Object/Crab";

const BIRD_WIDTH = 80;
const BIRD_HEIGHT = 70;
const CANVAS_W = 1000;
const CANVAS_H = 500;
const PIPE_H: number = 269;
const SPACE_BET_P: number = 160;
const PIPE_TIME: number = 1500;

export class PlayScene extends Scene {
    isOver = false;
    pipeIdx: number = 0;

    countPipeRun: number = 0;
    score: number = 0;
    bird: Bird;
    backgounds: Background[] = [];
    pipes: Pipe[] = [];
    scoreText: Score;
    crab: Crab;
    constructor(areaId: string) {
        super(areaId);

        // Init bird sprite
        this.bird = new Bird(CANVAS_W / 5, CANVAS_H / 2, 'bird1', BIRD_WIDTH, BIRD_HEIGHT, 4);

        // Init background
        this.initBackgrounds();

        // Init score
        this.scoreText = new Score(10, 50, 0, 0);
        this.scoreText.setTextStyle("30px Arial", "#ffffff");
        this.scoreText.setContent("Score: ");

        // Init crab
        this.crab = new Crab(CANVAS_W - 200, CANVAS_H - 80, 50, 50, 'crab');

        // Init list of pipes
        this.initPipes();

        this.initGame();
        console.log('Playingggg')
    }

    initBackgrounds(): void {
        for (let i = 0; i < 3; i++) {
            let bg = new Background(CANVAS_W * i, 0, CANVAS_W, CANVAS_H, 'bg')
            this.backgounds.push(bg);
        }
    }

    initPipes(): void {
        // Gen 5 couple of pipes top-bottom
        for (let i = 0; i < 4; i++) {
            let ranY: number = Math.floor(Math.random() * PIPE_H) - PIPE_H - 10
            let topPipe = new Pipe(CANVAS_W, ranY, 0, 0, 'pipe_down', 1)
            let bottomPipe = new Pipe(CANVAS_W, ranY + PIPE_H + SPACE_BET_P, 0, 0, 'pipe_up')
            this.pipes.push(topPipe);
            this.pipes.push(bottomPipe);
        }
    }

    initGame(): void {
        this.addObjs(this.backgounds);
        this.objs.push(this.crab);
        this.objs.push(this.bird);
        this.addObjs(this.pipes);
        this.texts.push(this.scoreText);
    }
    reset(): void {
        this.isOver = false;
        this.pipeIdx = 0;
        this.countPipeRun = 0;
        this.score = 0;
        this.backgounds = [];
        this.pipes = [];
        this.objs = [];

        // Init bird sprite
        this.bird = new Bird(CANVAS_W / 5, CANVAS_H / 2, 'bird1', BIRD_WIDTH, BIRD_HEIGHT, 4);

        // Init background
        this.initBackgrounds();

        // Init score
        this.scoreText.updateScore(0);

        // Init list of pipes
        this.initPipes();

        this.initGame();


    }

    update(time: number, delta: number): any {
        if (!this.isOver) {
            this.updateBackground();
            this.bird.update(delta);
            this.updatePipe(delta);
            this.crab.update(CANVAS_W);
            this.updateScore();
            this.inputHandler();
            this.scoreText.updateScore(this.score);
            this.checkCollision();
            return 1;
        } else {
            this.reset();
            return -1;
        }
    }
    updateBackground(): void {
        this.backgounds.forEach((bg) => {
            bg.update(this.backgounds.length);
        })
    }
    updatePipe(delta: number): void {
        this.pipes.forEach((p) => {
            p.update(delta);
            if (p.isPassed()) {
                this.score += 1;
            }
        })

        this.countPipeRun += delta;
        if (this.countPipeRun >= PIPE_TIME) {
            this.countPipeRun = 0;
            this.runNextPipe();
        }
    }
    runNextPipe(): void {
        this.pipes[this.pipeIdx].isRunning = true;
        let newY: number = this.pipes[this.pipeIdx].genNewTop(CANVAS_W, this.pipeIdx);
        this.pipes[this.pipeIdx + 1].isRunning = true;
        this.pipes[this.pipeIdx + 1].changeBottomPipe(CANVAS_W, newY);
        this.pipeIdx += 2;
        if (this.pipeIdx >= 7) {
            this.pipeIdx = 0;
        }
    }
    updateScore(): void {
        if (this.score > Scene.highestScore) {
            Scene.highestScore = this.score;
        }
    }

    inputHandler() {
        document.addEventListener('keyup', () => {
            this.bird.flyUp();
        })
    }
    render(scene: Scene): void {
        super.render(scene);
    }

    checkCollision(): void {
        // Collision with ground
        if (this.bird.y >= CANVAS_H - 45) {
            this.isOver = true;
        }
        // Collison with pipes
        this.pipes.forEach((p: Pipe) => {
            let checkXPos: Boolean = this.bird.x + (BIRD_WIDTH - 95) >= p.x && this.bird.x <= p.x + p.width - 15;
            let checkYPos: Boolean = (this.bird.y <= p.y + PIPE_H + 20 && p.pos == 'top') || (this.bird.y + BIRD_HEIGHT - 55 >= p.y + PIPE_H + SPACE_BET_P && p.pos == 'top');
            if (checkXPos && checkYPos) {
                this.isOver = true;
            }
        })


    }

}