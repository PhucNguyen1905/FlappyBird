import { Scene } from "../Scene";
import { GameObject } from "./GameObject";

export class TextObject extends GameObject {
    font: string = '';
    style: string = '';
    content: string = '';
    constructor(x: number, y: number, w: number, h: number) {
        super(x, y, w, h);
    }
    setTextStyle(font: string, style: string) {
        this.font = font;
        this.style = style;
    }
    setContent(content: string) {
        this.content = content;
    }

    render(ctx: CanvasRenderingContext2D, scene: Scene) {
        ctx.font = this.font;
        ctx.fillStyle = this.style;
        ctx.fillText(this.content, this.x, this.y)
    }


}