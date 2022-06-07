import { ImgObject } from "./Object/ImgObject";
import { Score } from "../FlappyBird/Object/Score";
import { Scene } from "./Scene";

const TO_RADIANS = Math.PI / 180;

export class Renderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(areaId: string) {
        this.canvas = document.getElementById(areaId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
    }
    // drawRotatedImage(obj: ImgObject) {

    // }


    render(scene: Scene): void {
        // this.ctx.clearRect(0, 0, 1000, 500)
        scene.objs.forEach((obj: ImgObject) => {
            if (obj.rotation != 0) {
                this.ctx.save();
                this.ctx.translate(obj.x, obj.y);

                this.ctx.rotate(obj.rotation * TO_RADIANS);
                this.ctx.drawImage(scene.loader.getImage(obj.imgKey), -(obj.width / 2), -(obj.height / 2), obj.width, obj.height);

                this.ctx.restore();
            } else {
                this.ctx.drawImage(scene.loader.getImage(obj.imgKey), obj.x, obj.y, obj.width, obj.height);
            }
        })
        scene.texts.forEach((text: Score) => {
            this.ctx.font = text.font;
            this.ctx.fillStyle = text.style;
            this.ctx.fillText(text.final, text.x, text.y)
        })
    }
}