import { Scene } from "./Scene";
import { PlayScene } from "./PlayScene"

export class SceneManager {
    scenes: Scene[] = [];
    idx: number = 0;

    constructor() { }

    addScene(scene: Scene) {
        this.scenes.push(scene);
    }

    updateScene(): void {
        this.idx += 1;
        if (this.idx >= this.scenes.length) {
            this.idx = 1;
        }
    }
}