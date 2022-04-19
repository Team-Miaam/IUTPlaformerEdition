import { ECS, GameManager, Entities, Components, Systems } from 'miaam';
import Player from '../entities/player.js';

class One extends ECS.Scene {
	player;

	constructor() {
		super();
		const map = new Entities.Map('/assets/tilemaps/scene1.tilemap.json');
		this.addEntity(map);

		this.player = new Player({ x: 100, y: 100 });
		this.addEntity(this.player);
		this.addSystem({ id: 'renderer', system: new Systems.Renderer() });
	}

	update() {
		super.update();
	}
}

export default One;
