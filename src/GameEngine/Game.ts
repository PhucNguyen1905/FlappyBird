import { InputHandler } from "../Helpers/InputHandler";
import { SceneManager } from "../Scenes/SceneManager";

export class Game {
    sceneManager: SceneManager;
    lastTime = window.performance.now();
    inputHandler: InputHandler;
    constructor() {
        this.sceneManager = new SceneManager();
        this.inputHandler = new InputHandler();
    }
    start() {
        requestAnimationFrame(() => this.loop())
    }

    loop() {
        const time = window.performance.now();
        const delta = time - this.lastTime;

        this.sceneManager.getCurrentScene().update(time, delta);
        this.inputHandler.processInput();
        this.sceneManager.getCurrentScene().render(this.sceneManager.getCurrentScene());

        this.lastTime = time;
        requestAnimationFrame(() => this.loop())
    }
}
