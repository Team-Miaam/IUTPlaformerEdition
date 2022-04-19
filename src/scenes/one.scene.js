import { ECS, GameManager, Entities, Components, Systems } from 'miaam';
import Player from '../entities/player.js';

class One extends ECS.Scene {
	constructor() {
		super();
		const map = new Entities.Map('/assets/tilemaps/scene1.tilemap.json');
		this.addEntity(map);
		const player = new Player({ x: 500, y: 500 });
		const gameScreen = GameManager.instance.app.screen;
		const camera = new Components.Camera({ width: gameScreen.width, height: gameScreen.height });
		this.addEntity(player);
		player.addComponent(camera);
		this.addSystem({ id: 'renderer', system: new Systems.Renderer() });

		// GameManager.instance.app.stage.addChild(view.props.map);
	}

	update() {
		super.update();
	}
}

export default One;
