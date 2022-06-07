import { Game } from "../GameEngine/Game";
import { Loader } from "../GameEngine/Loader";
import { Renderer } from "../GameEngine/Renderer";
import { InputHandler } from "./Helpers/InputHandler";
import { ImgObject } from "./Object/ImgObject";
import { Score } from "../FlappyBird/Object/Score";
import { SceneManager } from "./SceneManager";


export class Scene {
    objs: ImgObject[] = [];
    texts: Score[] = [];
    Renderer: Renderer;
    game: Game;
    loader: Loader;
    inputManager: InputHandler;
    sceneManager!: SceneManager;

    constructor(areaId: string, game: Game) {
        this.Renderer = new Renderer(areaId);
        this.game = game;
        this.inputManager = this.game.inputManager;
        this.loader = this.game.loader;
        // console.log(this.loader)

        // this.loadAssets().then(() => startGame())
    }

    // async loadAssets() {
    //     // await this.game.load.addToLibrary()
    //     return
    // }

    addObjs(objs: ImgObject[]) {
        objs.forEach((obj: ImgObject) => {
            this.objs.push(obj);
            obj.scene = this;
        })
    }

    inputHandler(): void { }
    update(time: number, delta: number): any { }
    render(scene: Scene): void {
        this.Renderer.render(scene);
    }
}

