import { GameManager, SceneManager, AssetsManager } from 'miaam';
import { SceneOne as SceneOneChunk } from './scenes/index.js';

GameManager.instance.createApplication({
	width: 512,
	height: 512,
	antialias: true,
	backgroundAlpha: false,
	resolution: 1,
});

const { default: SceneOne } = await AssetsManager.instance.importChunk({ chunk: SceneOneChunk });
SceneManager.instance.scene = new SceneOne();
SceneManager.instance.start();

document.getElementById('root').appendChild(GameManager.instance.window);
