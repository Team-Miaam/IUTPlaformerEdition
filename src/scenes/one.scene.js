import { ECS, GameManager, Entities, Components, Systems } from 'miaam';
import Player from '../entities/player.js';

class One extends ECS.Scene {
	player;

	constructor() {
		super();
		const map = new Entities.Map('/assets/tilemaps/newScene1.tilemap.json');
		this.addEntity(map);

		this.player = new Player({ x: 50, y: 200 });
		this.addEntity(this.player);
		this.addSystem({ id: 'physics', system: new Systems.PhysicsSystem() });
		this.addSystem({ id: 'renderer', system: new Systems.Renderer() });
	}

	update() {
		super.update();
	}
}

export default One;
