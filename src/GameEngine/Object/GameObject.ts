import { Scene } from "../Scene";

export class GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number = 0;
    scene!: Scene;
    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    // get game() {
    //     return this.scene.game;
    // }
}
