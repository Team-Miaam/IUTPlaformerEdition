import { ECS, AssetsManager } from 'miaam';

const { getResource } = AssetsManager.instance;

class One extends ECS.Scene {
	#map = getResource('/assets/tilemaps/scene1.tilemap.json');

	constructor() {
		super();
		console.log(this.#map);
	}

	update() {
		console.log('hello');
	}
}

export default One;
