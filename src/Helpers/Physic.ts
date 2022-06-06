export class Physic {
    constructor() { }

    calDistance(y0: number, v0: number, a: number, t: number): number {
        // y = y0 + v0 * t + 1/2 * a * t^2;
        return y0 + v0 * t + 0.5 * a * (t ** 2);
    }
    calSpeed(v0: number, a: number, t: number): number {
        // v = v0 + a * t;
        return v0 + a * t;
    }

}