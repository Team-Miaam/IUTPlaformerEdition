import { ECS, Keyboard, Body, Components, Audio } from 'miaam';

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
	}
}

export default PlayerMovement;
