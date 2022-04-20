import { ECS, Keyboard, Body, Components, Audio, AssetsManager, SceneManager } from 'miaam';
import { SceneTwo as SceneTwoChunk, SceneOne as SceneOneChunk } from '../scenes/index.js';

class PlayerMovement extends ECS.System {
	playerEntity;

	constructor(playerEntity) {
		super();
		this.playerEntity = playerEntity;
		this.jumpAudio = new Audio({ url: '/assets/audio/jump/jump2.wav' });
	}

	update() {
		const { body } = this.playerEntity.getComponent(Components.Box.name)[0].props;
		const position = this.playerEntity.getComponent(Components.Position.name)[0].props;
		const sprite = this.playerEntity.getComponent(Components.Sprite.name)[0].props;

		if (Keyboard.key('ArrowLeft').isDown) {
			Body.applyForce(body, position, { x: -0.01, y: 0 });
		} else if (Keyboard.key('ArrowRight').isDown) {
			// Body.setVelocity(body, { x: 1, y: 0 });
			Body.applyForce(body, position, { x: 0.01, y: 0 });
		} else if (Keyboard.key('ArrowUp').isDown) {
			Body.applyForce(body, position, { x: 0, y: -0.05 });
			this.jumpAudio.play();
		} else if (Keyboard.key('ArrowDown').isDown) {
		}

		if (position.x < 20 && position.y < 145) {
			setTimeout(async () => {
				const { default: SceneTwo } = await AssetsManager.instance.importChunk({ chunk: SceneTwoChunk });
				const sceneTwo = new SceneTwo();
				SceneManager.instance.scene = sceneTwo;
			}, 500);
		}
	}
}

export default PlayerMovement;
