import { Game } from '../GameEngine/Game';
import { OverScene } from './Scenes/OverScene';
import { PlayScene } from './Scenes/PlayScene';
import { StartScene } from './Scenes/StartScene';

class FlappyBird extends Game {

}

let flappyBird = new FlappyBird();
let startScene = new StartScene('gameArea', flappyBird);
let playScene = new PlayScene('gameArea', flappyBird);
let overScene = new OverScene('gameArea', flappyBird);
flappyBird.sceneManager.addScene('StartScene', startScene);
flappyBird.sceneManager.addScene('PlayScene', playScene);
flappyBird.sceneManager.addScene('OverScene', overScene);
flappyBird.startGame();