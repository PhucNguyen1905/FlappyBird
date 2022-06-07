import { InputHandler } from "./Helpers/InputHandler";
import { SceneManager } from "./SceneManager";
import { Loader } from "./Loader";
import { Constants } from "../FlappyBird/Contants";


export class Game {
    sceneManager: SceneManager;
    lastTime = window.performance.now();
    inputManager: InputHandler;
    loader: Loader;
    constructor() {
        this.sceneManager = new SceneManager();
        this.inputManager = new InputHandler();
        this.loader = new Loader();
    }
    async loadAssets() {
        for (let i = 0; i < Constants.ImgKeys.length; i++) {
            await this.loader.loadImage(Constants.ImgKeys[i]);
        }
        this.start();

    }
    startGame() {
        this.loadAssets()
    }
    start() {
        requestAnimationFrame(() => this.loop())
    }

    loop() {
        const time = window.performance.now();
        const delta = time - this.lastTime;

        this.inputManager.processInput();
        this.sceneManager.getCurrentScene().update(time, delta);
        this.sceneManager.getCurrentScene().render(this.sceneManager.getCurrentScene());

        this.lastTime = time;
        requestAnimationFrame(() => this.loop())
    }
}
