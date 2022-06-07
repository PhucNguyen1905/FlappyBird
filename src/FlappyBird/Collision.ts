import { Bird } from "./Object/ImgObject/Bird";
import { Pipe } from "./Object/ImgObject/Pipe";
import { Constants } from "./Contants";


export class Collision {
    constructor() { }
    isCollided(bird: Bird, pipes: Pipe[]): boolean {
        // Collision with ground
        if (bird.y >= Constants.CANVAS_H - 45) {
            return true;
        }
        // Collison with pipes
        pipes.forEach((p: Pipe) => {
            let checkXPos: boolean = bird.x + (Constants.BIRD_WIDTH - 95) >= p.x && bird.x <= p.x + p.width - 15;
            let checkYPos: boolean = (bird.y <= p.y + Constants.PIPE_H + 20 && p.pos == 'top') || (bird.y + Constants.BIRD_HEIGHT - 55 >= p.y + Constants.PIPE_H + Constants.SPACE_BET_P && p.pos == 'top');
            if (checkXPos && checkYPos) {
                return true;
            }
        })
        return false;


    }
}