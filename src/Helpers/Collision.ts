import { Bird } from "../Object/Bird";
import { Pipe } from "../Object/Pipe";

const BIRD_WIDTH = 80;
const BIRD_HEIGHT = 70;
const CANVAS_W = 1000;
const CANVAS_H = 500;
const PIPE_H: number = 269;
const SPACE_BET_P: number = 160;

export class Collision {
    constructor() { }
    isCollided(bird: Bird, pipes: Pipe[]): boolean {
        // Collision with ground
        if (bird.y >= CANVAS_H - 45) {
            return true;
        }
        // Collison with pipes
        pipes.forEach((p: Pipe) => {
            let checkXPos: Boolean = bird.x + (BIRD_WIDTH - 95) >= p.x && bird.x <= p.x + p.width - 15;
            let checkYPos: Boolean = (bird.y <= p.y + PIPE_H + 20 && p.pos == 'top') || (bird.y + BIRD_HEIGHT - 55 >= p.y + PIPE_H + SPACE_BET_P && p.pos == 'top');
            if (checkXPos && checkYPos) {
                return true;
            }
        })
        return false;


    }
}