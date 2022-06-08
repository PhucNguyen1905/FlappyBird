import { ImgObject } from "./Object/ImgObject";
import { Score } from "../FlappyBird/Object/Score";
import { Scene } from "./Scene";
import { GameObject } from "./Object/GameObject";

const TO_RADIANS = Math.PI / 180;

export class Renderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(areaId: string) {
        this.canvas = document.getElementById(areaId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
    }

    render(scene: Scene): void {
        // this.ctx.clearRect(0, 0, 1000, 500)
        scene.objs.sort((a, b) => { return a.depth - b.depth }).forEach((obj: GameObject) => {
            obj.render(this.ctx, scene);
        })
    }
}