// import * as Pixi from "pixi.js";
import { Application } from "pixi.js";
import { Sprite } from "pixi.js";
import { Texture } from "pixi.js";
import { Graphics } from "pixi.js";
import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lax from "lax.js";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(PixiPlugin);

const app = new Application({ 
	backgroundColor: 0xffffff,
	autoResize: true,
});
app.renderer.resize(window.innerWidth,window.innerHeight);
document.body.appendChild(app.view);

const sprite_1_2 = Sprite.from('./assets/1/1_2.png');
// create a new container to use as scroll trigger
const element = document.createElement('div');
// add a class to that element
element.classList.add('scroll');
// console.log(element.className);
// add style to elemnt to view it in browser
element.style.height = '100px'
element.style.backgroundColor = 'gray'
element.style.position = 'relative'
element.style.bottom = '50%'
element.style.right = '50%'
element.style.marginInline = '40%'
document.body.appendChild(element)

// GSAP based animation of sprite
// directly done on PIXI sprite
// we can directly use properties of PIXI sprites
// to animate in GSAP
gsap.to(sprite_1_2, {
	scrollTrigger: {
		trigger: ".scroll",
		start: "top 40%",
		markers: true // markers enabled for debugging
	},
	duration: 1.0,
	y: -200,
	alpha: 0,
})

// Lax based animation
// To use this we need to render image using css and animate it
 window.onload = function () {
    lax.init()
    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })
    // Add animation bindings to elements
    lax.addElements('.scroll', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ] 
      }
    })
  }
// Scale mode for all textures, will retain pixelation
// Pixi.settings.SCALE_MODE = Pixi.SCALE_MODES.NEAREST;

// load sprite and center the sprite's anchor point
const sprite_1_3 = Sprite.from('./assets/1/1_3.png');
const sprite_1_4 = Sprite.from('./assets/1/1_4.png');

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only
sprite_1_2.interactive = true
sprite_1_2.position.set(window.innerWidth/4-190, -5)
sprite_1_3.interactive = true
sprite_1_3.position.set(window.innerWidth/2-190, 0)
sprite_1_4.interactive = true
sprite_1_4.position.set(window.innerWidth*3/4-190, -9)

app.stage.addChild(sprite_1_2, sprite_1_3, sprite_1_4);

// We stop Pixi ticker using stop() function because autoStart = false does NOT stop the shared ticker:
// doc: http://pixijs.download/release/docs/PIXI.Application.html
// app.ticker.stop();

// // Now, we use 'tick' from gsap
// gsap.ticker.add(() => {
//     app.ticker.update();
// });
// Listen for window resize events
window.addEventListener('resize', resize);

// Resize function window
function resize() {
	// Resize the renderer
	app.renderer.resize(window.innerWidth, window.innerHeight);
  
  // You can use the 'screen' property as the renderer visible
  // area, this is more useful than view.width/height because
  // it handles resolution
  rect.position.set(app.screen.width, app.screen.height);
}

resize();