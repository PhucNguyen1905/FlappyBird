import { Game } from '../GameEngine/Game';
import { OverScene } from './Scenes/OverScene';
import { PlayScene } from './Scenes/PlayScene';
import { StartScene } from './Scenes/StartScene';
import { ScoreController } from './ScoreController';

class FlappyBird extends Game {
    scoreController: ScoreController;
    constructor() {
        super()
        this.scoreController = new ScoreController();
    }
}

let flappyBird = new FlappyBird();
let startScene = new StartScene('gameArea', flappyBird);
let playScene = new PlayScene('gameArea', flappyBird, flappyBird.scoreController);
let overScene = new OverScene('gameArea', flappyBird, flappyBird.scoreController);
flappyBird.sceneManager.addScene('StartScene', startScene);
flappyBird.sceneManager.addScene('PlayScene', playScene);
flappyBird.sceneManager.addScene('OverScene', overScene);
flappyBird.startGame();