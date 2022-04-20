import { ECS, Entities, Components, Systems, PhysicsManager, Audio, SceneManager, AssetsManager } from 'miaam';
import Player from '../entities/player.js';
import PlayerMovement from '../entities/playerMovment.system.js';
import { SceneTwo as SceneTwoChunk } from './index.js';

class One extends ECS.Scene {
	player;

	constructor() {
		super();
		const map = new Entities.Map('/assets/tilemaps/newScene1.tilemap.json');
		this.addEntity(map);

		this.player = new Player({ x: 250, y: 100 });
		this.addEntity(this.player);
		this.addSystem({ id: 'physics', system: new Systems.PhysicsSystem() });
		this.addSystem({ id: 'renderer', system: new Systems.Renderer() });
		this.addSystem({ id: 'playerMovement', system: new PlayerMovement(this.player) });

		PhysicsManager.instance.events.addEventListener('collisionStart.door', () => {
			console.log('door');
		});

		const bgclip = new Audio({
			url: '/assets/audio/bg/bg2.mp3',
			loop: true,
		});
		setTimeout(() => {
			bgclip.play();
		}, 1000);

		// setTimeout(async () => {
		// 	const { default: SceneTwo } = await AssetsManager.instance.importChunk({ chunk: SceneTwoChunk });
		// 	const sceneTwo = new SceneTwo();
		// 	SceneManager.instance.scene = sceneTwo;
		// }, 4000);
	}

	update() {
		super.update();
	}
}

export default One;
