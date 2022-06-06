import { Sprite } from "./Sprite";

export class Bird extends Sprite {
    // Index of frame
    idx: number = 0;
    // down || up
    direction: string = 'down';

    speed: number = 0;
    gravity: number = 980;
    FLY_SPEED: number = -400;
    CHANGE_FRAME_BIRD: number = 150;

    constructor(x: number, y: number, name: string, w: number, h: number, numFrame: number) {
        super(x, y, name, w, h, numFrame);
    }

    changeFrame() {
        this.idx += 1;
        if (this.idx >= this.numFrame) {
            this.idx = 0;
        }
        this.img = this.frames[this.idx];
    }
    update(delta: number): void {
        console.log(delta)
        this.y += this.speed * (delta / 1000) + 0.5 * this.gravity * ((delta / 1000) ** 2);

        // Check max height flying
        if (this.y <= 30) {
            this.y = 30;
        }
        this.speed += this.gravity * (delta / 1000);

        // Update rotation
        if (this.speed < 0) {
            this.rotation -= 600 * (delta / 1000);

            if (this.rotation < -20) {
                this.rotation = -20;
            }
        }

        // Rotate clockwise
        if (this.speed >= 0) {
            this.rotation += 300 * (delta / 1000);
            if (this.rotation > 90) {
                this.rotation = 90;
            }

        }
        // if (this.direction == 'down') {
        //     this.rotation = 20;
        // } else {
        //     this.rotation = -20;
        // }
        this.changeFrameCount += delta;
        if (this.changeFrameCount >= this.CHANGE_FRAME_BIRD) {
            this.changeFrame();
            this.changeFrameCount = 0;
        }
        if (this.direction == 'up') {
            if (this.speed >= 0) {
                this.direction = 'down'
            }
        }
    }

    flyUp() {
        this.direction = 'up';
        this.speed = this.FLY_SPEED;
    }


}