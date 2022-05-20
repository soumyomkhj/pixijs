// import * as Pixi from "pixi.js";
import { Application } from "pixi.js";
import { Sprite } from "pixi.js";
import { Texture } from "pixi.js";
import { Graphics } from "pixi.js";
const app = new Application({ 
	backgroundColor: 0xffffff,
	width: 500,
	height: 500 });

app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';
document.body.appendChild(app.view);

// Scale mode for all textures, will retain pixelation
// Pixi.settings.SCALE_MODE = Pixi.SCALE_MODES.NEAREST;

// load sprite and center the sprite's anchor point
const sprite_1_1 = Sprite.from('./assets/1/1_1.png');
// Create play button that can be used to trigger the video
const button = new Graphics()
    .beginFill(0x0, 0.5)
    .drawRoundedRect(0, 0, 100, 100, 10)
    .endFill()
    .beginFill(0xffffff)
    .moveTo(36, 30)
    .lineTo(36, 70)
    .lineTo(70, 50);

// Position the button
button.x = (app.screen.width - button.width) / 2;
button.y = (app.screen.height - button.height) / 2;

// Enable interactivity on the button
button.interactive = true;
button.buttonMode = true;

// Add to the stage
button.on('pointertap', onPlayVideo);

function onPlayVideo() {
	// Don't need the button anymore
    button.destroy();
	console.log('Start playing video....');
	const bird_texture = Texture.from('./assets/1/Animations/bird-spin.webm');
	// const bird_texture = Texture.from('./assets/1/Animations/bird-spin.mov');
	console.log("Texture: " + bird_texture);
	const bird_anim = new Sprite.from(bird_texture);
	bird_anim.width = app.screen.width;
	bird_anim.height = app.screen.height;
	console.log("Anim: " + bird_anim);
	app.stage.addChild(bird_anim);
}


sprite_1_1.anchor.set(0.5)
// Set sprite's position
sprite_1_1.position.set(app.screen.width/2,app.screen.height/2);
// // Opt-in to interactivity
sprite_1_1.interactive = true;

// // Shows hand cursor
sprite_1_1.buttonMode = true;

// Pointers normalize touch and mouse
sprite_1_1.on('pointerdown', onClick);
// sprite.on('scroll', onScroll);

function onClick() {
	console.log('Mouse Clicked');
}

function onScroll() {
	console.log('Mouse Scrolled');
}
// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

app.stage.addChild(sprite_1_1);
app.stage.addChild(button);