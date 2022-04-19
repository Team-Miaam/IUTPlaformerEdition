import { ECS, GameManager, Components } from 'miaam';

class Player extends ECS.Entity {
	#startingPosition;

	constructor(startingPosition) {
		super();
		this.#startingPosition = startingPosition;
	}

	init() {
		const size = { width: 16, height: 16 };
		this.addComponent(new Components.Position(this.#startingPosition));
		this.addComponent(new Components.Size(size));

		const gameScreen = GameManager.instance.app.screen;
		const camera = new Components.Camera({ width: gameScreen.width, height: gameScreen.height });
		this.addComponent(camera);

		const spriteComp = new Components.Sprite({ asset: '/assets/tilemaps/player.tilemap.json' });
		spriteComp.props.sprite.animationSpeed = 0.2;
		this.addComponent(spriteComp);

		const mass = 30;
		const body = new Components.Box({ position: this.#startingPosition, size, mass });
		this.addComponent(body);
	}
}

export default Player;
