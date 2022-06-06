import { Game } from './Game'
import { OverScene } from './Scenes/OverScene';
import { PlayScene } from './Scenes/PlayScene';
import { StartScene } from './Scenes/StartScene';

class FlappyBird extends Game {

}

let flappyBird = new FlappyBird();
let startScene = new StartScene('gameArea');
let playScene = new PlayScene('gameArea');
let overScene = new OverScene('gameArea');
flappyBird.sceneManager.addScene(startScene);
flappyBird.sceneManager.addScene(playScene);
flappyBird.sceneManager.addScene(overScene);
flappyBird.start();