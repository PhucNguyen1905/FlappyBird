import { Scene } from "./Scene";

export class SceneManager {
    static scenes: Map<string, Scene> = new Map<string, Scene>();
    static curName: string = 'StartScene';

    constructor() { }

    addScene(name: string, scene: Scene) {
        SceneManager.scenes.set(name, scene);
    }
    getCurrentScene(): Scene {
        return SceneManager.scenes.get(SceneManager.curName)!;
    }

    static changeScene(name: string): void {
        this.curName = name;
    }
}