import { Game } from '../GameEngine/Game';
import { OverScene } from './Scenes/OverScene';
import { PauseScene } from './Scenes/PauseScene';
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
let startScene = new StartScene('StartScene', flappyBird);
let playScene = new PlayScene('PlayScene', flappyBird, flappyBird.scoreController);
let pauseScene = new PauseScene('PauseScene', flappyBird);
let overScene = new OverScene('OverScene', flappyBird, flappyBird.scoreController);
flappyBird.sceneManager.addScene('StartScene', startScene);
flappyBird.sceneManager.addScene('PlayScene', playScene);
flappyBird.sceneManager.addScene('PauseScene', pauseScene);
flappyBird.sceneManager.addScene('OverScene', overScene);
flappyBird.startGame();