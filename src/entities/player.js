import { ECS, Components } from 'miaam';

class Player extends ECS.Entity {
	#startingPosition;

	constructor(startingPosition) {
		super();
		this.#startingPosition = new Components.Position(startingPosition);
	}

	init() {
		this.addComponent(this.#startingPosition);
	}
}

export default Player;
