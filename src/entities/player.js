import { ECS, GameManager, Components } from 'miaam';

class Player extends ECS.Entity {
	#startingPosition;

	constructor(startingPosition) {
		super();
		this.#startingPosition = new Components.Position(startingPosition);
	}

	init() {
		this.addComponent(this.#startingPosition);
		this.addComponent(new Components.Size({ width: 16, height: 16 }));

		const gameScreen = GameManager.instance.app.screen;
		const camera = new Components.Camera({ width: gameScreen.width, height: gameScreen.height });
		this.addComponent(camera);

		const sprite = new Components.Sprite({ asset: '/assets/tilemaps/player.tilemap.json' });
		sprite.props.sprite.animationSpeed = 0.2;
		this.addComponent(sprite);
	}
}

export default Player;
