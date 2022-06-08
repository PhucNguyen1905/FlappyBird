import { Scene } from "../Scene";
import { GameObject } from "./GameObject";
import { Constants } from "../../FlappyBird/Contants";
export class ImgObject extends GameObject {
    imgKey: string;
    constructor(x: number, y: number, w: number, h: number, name: string) {
        super(x, y, w, h)
        this.imgKey = name;
    }

    render(ctx: CanvasRenderingContext2D, scene: Scene) {
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.rotation * Constants.TO_RADIANS);
        ctx.drawImage(scene.loader.getImage(this.imgKey), -(this.width / 2), -(this.height / 2), this.width, this.height);
        ctx.restore();
    }
}
