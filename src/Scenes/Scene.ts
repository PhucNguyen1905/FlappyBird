import { Renderer } from "../GameEngine/Renderer";
import { ImgObject } from "../Object/ImgObject";
import { Score } from "../Object/Score";


export class Scene {
    objs: ImgObject[] = [];
    texts: Score[] = [];
    Renderer: Renderer;
    constructor(areaId: string) {
        this.Renderer = new Renderer(areaId);
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

