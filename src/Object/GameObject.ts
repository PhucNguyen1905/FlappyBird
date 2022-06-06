export class GameObject {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number = 0;
    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
}
