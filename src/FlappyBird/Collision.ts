import { Bird } from "./Object/ImgObject/Bird";
import { Pipe } from "./Object/ImgObject/Pipe";
import { Constants } from "./Contants";


export class Collision {
    constructor() { }
    isCollided(bird: Bird, p: Pipe): boolean {
        // Collison with pipe
        let checkXPos: boolean = bird.x + (Constants.BIRD_WIDTH - 60) >= p.x && bird.x <= p.x + p.width - 45;
        let checkYPos: boolean = (bird.y <= p.y + Constants.PIPE_H - 25 && p.pos == 'top') || (bird.y + Constants.BIRD_HEIGHT - 35 >= p.y + Constants.PIPE_H + Constants.SPACE_BET_P && p.pos == 'top');
        if (checkXPos && checkYPos) {
            return true;
        }
        return false;


    }
}