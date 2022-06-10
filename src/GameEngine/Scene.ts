import { Game } from "../GameEngine/Game";
import { Loader } from "../GameEngine/Loader";
import { Renderer } from "../GameEngine/Renderer";
import { InputHandler } from "./Helpers/InputHandler";
import { ImgObject } from "./Object/ImgObject";
import { SceneManager } from "./SceneManager";
import { GameObject } from "./Object/GameObject";


export class Scene {
    objs: GameObject[] = [];
    sceneName: string;
    game: Game;
    loader: Loader;
    inputManager: InputHandler;
    sceneManager!: SceneManager;

    constructor(sceneName: string, game: Game) {
        this.sceneName = sceneName;
        this.game = game;
        this.inputManager = this.game.inputManager;
        this.loader = this.game.loader;

    }


    addObjs(objs: ImgObject[]) {
        objs.forEach((obj: ImgObject) => {
            this.objs.push(obj);
            obj.scene = this;
        })
    }

    inputHandler(): void { }
    update(time: number, delta: number): any { }
    // render(scene: Scene): void {
    //     this.game.renderer.render(scene);
    // }
}

