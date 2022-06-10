import { Background } from "../Object/ImgObject/Background";
import { Bird } from "../Object/ImgObject/Bird";
import { Pipe } from "../Object/ImgObject/Pipe";
import { Scene } from "../../GameEngine/Scene";
import { Crab } from "../Object/ImgObject/Crab";
import { Collision } from "../Collision";
import { Constants } from "../Contants";
import { Game } from "../../GameEngine/Game";
import { ScoreController } from "../ScoreController";


export class PlayScene extends Scene {
    isOver = false;
    isCollided = false;
    pipeIdx: number = 0;

    countPipeRun: number = 0;
    bird: Bird;
    backgounds: Background[] = [];
    pipes: Pipe[] = [];
    crab: Crab;
    Collide: Collision;
    scoreController: ScoreController;
    constructor(name: string, game: Game, scoreController: ScoreController) {
        super(name, game);
        this.scoreController = scoreController;

        // Init bird sprite
        this.bird = new Bird(Constants.CANVAS_W / 5, Constants.CANVAS_H / 2, 'bird1', Constants.BIRD_WIDTH, Constants.BIRD_HEIGHT, 4);

        // Init background
        this.initBackgrounds();

        // Init crab
        this.crab = new Crab(Constants.CANVAS_W - 200, Constants.CANVAS_H - 80, 50, 50, 'crab');

        // Init list of pipes
        this.initPipes();

        this.Collide = new Collision()

        this.initGame();
        console.log('Playingggg')
        this.inputHandler();
    }

    initBackgrounds(): void {
        for (let i = 0; i < 3; i++) {
            let bg = new Background(Constants.CANVAS_W * i, 0, Constants.CANVAS_W, Constants.CANVAS_H, 'bg')
            this.backgounds.push(bg);
        }
    }

    initPipes(): void {
        // Gen 5 couple of pipes top-bottom
        for (let i = 0; i < 4; i++) {
            let ranY: number = Math.floor(Math.random() * Constants.PIPE_H) - Constants.PIPE_H - 10
            let topPipe = new Pipe(Constants.CANVAS_W, ranY, 0, 0, 'pipe_down', 1)
            let bottomPipe = new Pipe(Constants.CANVAS_W, ranY + Constants.PIPE_H + Constants.SPACE_BET_P, 0, 0, 'pipe_up')
            this.pipes.push(topPipe);
            this.pipes.push(bottomPipe);
        }
    }

    initGame(): void {
        this.addObjs(this.backgounds);
        this.objs.push(this.crab);
        this.objs.push(this.bird);
        this.addObjs(this.pipes);
        this.objs.push(this.scoreController.getScoreText());
    }
    reset(): void {
        this.isOver = false;
        this.isCollided = false;
        this.pipeIdx = 0;
        this.countPipeRun = 0;
        this.scoreController.resetScore();
        this.pipes = [];
        this.objs = [];

        // Reset bird
        this.bird.reset();

        // Reset score
        this.scoreController.resetScore();

        // Init list of pipes
        this.initPipes();

        this.initGame();


    }

    update(time: number, delta: number): void {
        if (!this.isCollided && !this.isOver) {
            this.updateBackground();
            this.bird.update(delta);
            this.updatePipe(delta);
            this.crab.update(Constants.CANVAS_W);
            this.updateScore();
            this.scoreController.updateCurText();
            this.checkCollision();
        } else if (this.isCollided) {
            this.bird.falling();
            this.bird.update(delta)
            this.checkReachGround();
        }
        else {
            this.reset();
            this.sceneManager.changeScene('OverScene');
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
                this.scoreController.incScore();
            }
        })

        this.countPipeRun += delta;
        if (this.countPipeRun >= Constants.PIPE_TIME) {
            this.countPipeRun = 0;
            this.runNextPipe();
        }
    }
    runNextPipe(): void {
        this.pipes[this.pipeIdx].isRunning = true;
        let newY: number = this.pipes[this.pipeIdx].genNewTop(Constants.CANVAS_W, this.pipeIdx);
        this.pipes[this.pipeIdx + 1].isRunning = true;
        this.pipes[this.pipeIdx + 1].changeBottomPipe(Constants.CANVAS_W, newY);
        this.pipeIdx += 2;
        if (this.pipeIdx >= 7) {
            this.pipeIdx = 0;
        }
    }
    updateScore(): void {
        this.scoreController.setHighest();
    }

    pauseGame(): void {
        this.sceneManager.changeScene('PauseScene');
    }

    inputHandler() {
        this.inputManager.onSpaceDown(this.bird.flyUp.bind(this.bird), 'PlayScene');
        this.inputManager.onClickBtn(this.bird.flyUp.bind(this.bird), 'PlayScene');
        this.inputManager.onKeyPDown(this.pauseGame.bind(this), 'PlayScene');
        document.addEventListener('click', (e) => {
            if (this.sceneName == this.sceneManager.getCurrentName()) {
                this.inputManager.enQueue('Click');
            }
        })
    }
    // render(scene: Scene): void {
    //     super.render(scene);
    // }


    checkReachGround(): void {
        if (this.bird.y >= Constants.CANVAS_H - 80) {
            this.isOver = true;
            this.isCollided = false;
        }
    }
    checkCollision(): void {
        // Collision with ground
        if (this.bird.y >= Constants.CANVAS_H - 80) {
            this.isOver = true;
        }
        // Collison with pipes
        this.pipes.forEach((p: Pipe) => {
            if (this.Collide.isCollided(this.bird, p)) {
                this.isCollided = true;
            }
        })


    }

}