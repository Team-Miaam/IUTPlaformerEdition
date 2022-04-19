import { ECS, Entities, Components, Systems, PhysicsManager } from 'miaam';
import Player from '../entities/player.js';
import PlayerMovement from '../entities/playerMovment.system.js';

class One extends ECS.Scene {
	player;

	constructor() {
		super();
		const map = new Entities.Map('/assets/tilemaps/newScene1.tilemap.json');
		this.addEntity(map);

		this.player = new Player({ x: 50, y: 400 });
		this.addEntity(this.player);
		this.addSystem({ id: 'physics', system: new Systems.PhysicsSystem() });
		this.addSystem({ id: 'renderer', system: new Systems.Renderer() });
		this.addSystem({ id: 'playerMovement', system: new PlayerMovement(this.player) });

		PhysicsManager.instance.events.addEventListener('collisionStart.door', () => {
			console.log('door');
		});
	}

	update() {
		super.update();
	}
}

export default One;
