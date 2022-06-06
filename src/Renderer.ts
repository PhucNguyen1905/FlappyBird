import { ImgObject } from "./Object/ImgObject";
import { Score } from "./Object/Score";
import { Scene } from "./Scenes/Scene";

const TO_RADIANS = Math.PI / 180;

export class Renderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(areaId: string) {
        this.canvas = document.getElementById(areaId) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
    }
    drawRotatedImage(obj: ImgObject) {
        this.ctx.save();
        this.ctx.translate(obj.x, obj.y);

        this.ctx.rotate(obj.rotation * TO_RADIANS);
        this.ctx.drawImage(obj.img, -(obj.width / 2), -(obj.height / 2), obj.width, obj.height);

        this.ctx.restore();
    }


    render(scene: Scene): void {
        // this.ctx.clearRect(0, 0, 1000, 500)
        scene.objs.forEach((obj: ImgObject) => {
            if (obj.rotation != 0) {
                this.drawRotatedImage(obj);
            } else {
                this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
            }
        })
        scene.texts.forEach((text: Score) => {
            this.ctx.font = text.font;
            this.ctx.fillStyle = text.style;
            this.ctx.fillText(text.final, text.x, text.y)
        })
    }
}