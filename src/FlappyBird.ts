import { Game } from './GameEngine/Game'
import { OverScene } from './Scenes/GameScenes/OverScene';
import { PlayScene } from './Scenes/GameScenes/PlayScene';
import { StartScene } from './Scenes/GameScenes/StartScene';

class FlappyBird extends Game {

}

let flappyBird = new FlappyBird();
let startScene = new StartScene('gameArea');
let playScene = new PlayScene('gameArea');
let overScene = new OverScene('gameArea');
flappyBird.sceneManager.addScene('StartScene', startScene);
flappyBird.sceneManager.addScene('PlayScene', playScene);
flappyBird.sceneManager.addScene('OverScene', overScene);
flappyBird.start();