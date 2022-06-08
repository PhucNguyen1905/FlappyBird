import { Sprite } from "../../../GameEngine/Object/Sprite";
import { Constants } from "../../Contants";
import { Physic } from "../../../GameEngine/Helpers/Physic";

export class Bird extends Sprite {
    // Index of frame
    idx: number = 0;

    speed: number = 0;
    gravity: number = 1000;
    FLY_SPEED: number = -400;
    CHANGE_FRAME_BIRD: number = 150;

    Physic: Physic;

    isFalling = false;
    constructor(x: number, y: number, name: string, w: number, h: number, numFrame: number) {
        super(x, y, name, w, h, numFrame);
        this.Physic = new Physic();
    }

    changeFrame(): void {
        this.idx += 1;
        if (this.idx >= this.numFrame) {
            this.idx = 0;
        }
        this.imgKey = this.frames[this.idx];
    }
    update(delta: number): void {
        const dt = delta / 1000;
        this.y = this.Physic.calDistance(this.y, this.speed, this.gravity, dt);

        // Check max height flying
        if (this.y <= 30) {
            this.y = 30;
        }
        this.speed = this.Physic.calSpeed(this.speed, this.gravity, dt);

        // Update rotation
        if (this.speed < 0) {
            this.rotation -= 650 * (dt);

            if (this.rotation < -20) {
                this.rotation = -20;
            }
        }

        // Rotate clockwise
        if (this.speed >= 0) {
            this.rotation += 300 * (dt);
            if (this.rotation > 90) {
                this.rotation = 90;
            }

        }
        this.changeFrameCount += delta;
        if (this.changeFrameCount >= this.CHANGE_FRAME_BIRD) {
            this.changeFrame();
            this.changeFrameCount = 0;
        }
    }

    flyUp(): void {
        if (!this.isFalling) {
            this.speed = this.FLY_SPEED;
        }
    }
    falling(): void {
        this.isFalling = true;
        this.depth = 5;

    }

    reset(): void {
        this.x = Constants.CANVAS_W / 5;
        this.y = Constants.CANVAS_H / 2;
        this.imgKey = this.frames[0];
        this.idx = 0;
        this.speed = -200;
        this.rotation = 0;
        this.isFalling = false;
        this.depth = 0;
    }


}