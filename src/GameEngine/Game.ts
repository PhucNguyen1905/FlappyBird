import { InputHandler } from "./Helpers/InputHandler";
import { SceneManager } from "./SceneManager";
import { Loader } from "./Loader";
import { Constants } from "../FlappyBird/Contants";
import { Renderer } from "./Renderer";


export class Game {
    sceneManager: SceneManager;
    lastTime = window.performance.now();
    inputManager: InputHandler;
    loader: Loader;
    renderer: Renderer;
    constructor() {
        this.sceneManager = new SceneManager();
        this.inputManager = new InputHandler();
        this.inputManager.sceneManager = this.sceneManager;
        this.renderer = new Renderer(Constants.CANVAS_ID);
        this.loader = new Loader();
    }
    async loadAssets() {
        const promises = []
        for (let i = 0; i < Constants.ImgKeys.length; i++) {
            const loadImagePromise = this.loader.loadImage(Constants.ImgKeys[i]);
            promises.push(loadImagePromise)
        }
        await Promise.all(promises)
    }
    startGame() {
        this.loadAssets().then(() => {
            this.start()
        })
    }
    start() {
        requestAnimationFrame(() => this.loop())
    }

    loop() {
        const time = window.performance.now();
        const delta = time - this.lastTime;

        this.inputManager.processInput();
        this.sceneManager.getCurrentScene().update(time, delta);
        this.renderer.render(this.sceneManager.getCurrentScene());

        this.lastTime = time;
        requestAnimationFrame(() => this.loop())
    }
}
