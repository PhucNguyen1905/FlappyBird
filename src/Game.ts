import { SceneManager } from "./Scenes/SceneManager";

export class Game {
    sceneManager: SceneManager;
    lastTime = window.performance.now();
    constructor() {
        this.sceneManager = new SceneManager();
    }
    start() {
        requestAnimationFrame(() => this.loop())
    }

    loop() {
        const time = window.performance.now();
        const delta = time - this.lastTime;

        let status: number = this.sceneManager.scenes[this.sceneManager.idx].update(time, delta);
        if (status == -1) {
            this.sceneManager.updateScene();
        }
        this.sceneManager.scenes[this.sceneManager.idx].render(this.sceneManager.scenes[this.sceneManager.idx]);

        this.lastTime = time;
        requestAnimationFrame(() => this.loop())
    }
}
