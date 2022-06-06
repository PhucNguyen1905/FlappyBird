import { Renderer } from "../GameEngine/Renderer";
import { InputHandler } from "../Helpers/InputHandler";
import { ImgObject } from "../Object/ImgObject";
import { Score } from "../Object/Score";


export class Scene {
    objs: ImgObject[] = [];
    texts: Score[] = [];
    Renderer: Renderer;
    inputManager: InputHandler;
    constructor(areaId: string) {
        this.Renderer = new Renderer(areaId);
        this.inputManager = new InputHandler();
    }

    addObjs(objs: ImgObject[]) {
        objs.forEach((obj: ImgObject) => {
            this.objs.push(obj);
        })
    }

    inputHandler(): void { }
    update(time: number, delta: number): any { }
    render(scene: Scene): void {
        this.Renderer.render(scene);
    }
}

