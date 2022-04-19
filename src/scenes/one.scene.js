import { ECS, GameManager, Entities, Components } from 'miaam';
import Player from '../entities/player.js';

class One extends ECS.Scene {
	constructor() {
		super();
		const map = new Entities.Map('/assets/tilemaps/scene1.tilemap.json');
		this.addEntity(map);
		const player = new Player({ x: 50, y: 50 });
		const camera = new Components.Camera({ x: 100, y: 100 });
		player.addComponent(camera);
		// GameManager.instance.app.stage.addChild(view.props.map);
	}

	update() {
		super.update();
	}
}

export default One;
