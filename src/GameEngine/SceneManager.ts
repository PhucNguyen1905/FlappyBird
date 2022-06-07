import { Scene } from "./Scene";

export class SceneManager {
    scenes: Map<string, Scene> = new Map<string, Scene>();
    curName: string = 'StartScene';

    constructor() { }

    addScene(name: string, scene: Scene) {
        this.scenes.set(name, scene);
        scene.sceneManager = this;
    }
    getCurrentScene(): Scene {
        return this.scenes.get(this.curName)!;
    }

    changeScene(name: string): void {
        this.curName = name;
    }
}