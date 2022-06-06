import { ImgLoader } from "../GameEngine/ImgLoader";
import { GameObject } from "./GameObject";

export class ImgObject extends GameObject {
    imgKey: string;
    constructor(x: number, y: number, w: number, h: number, name: string) {
        super(x, y, w, h)
        this.imgKey = name;
        ImgLoader.addToLibrary(name);
    }
}
