/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// Scale mode for all textures, will retain pixelation
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const sprite = PIXI.Sprite.from('./assets/pikachu.jpg');

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

app.stage.addChild(sprite);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFtQywyQkFBMkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsOEJBQThCO0FBQzlCO0FBQ0EsMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXhpanMtZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbih7IGJhY2tncm91bmRDb2xvcjogMHgxMDk5YmIgfSk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpO1xyXG5cclxuLy8gU2NhbGUgbW9kZSBmb3IgYWxsIHRleHR1cmVzLCB3aWxsIHJldGFpbiBwaXhlbGF0aW9uXHJcblBJWEkuc2V0dGluZ3MuU0NBTEVfTU9ERSA9IFBJWEkuU0NBTEVfTU9ERVMuTkVBUkVTVDtcclxuXHJcbmNvbnN0IHNwcml0ZSA9IFBJWEkuU3ByaXRlLmZyb20oJy4vYXNzZXRzL3Bpa2FjaHUuanBnJyk7XHJcblxyXG4vLyBTZXQgdGhlIGluaXRpYWwgcG9zaXRpb25cclxuc3ByaXRlLmFuY2hvci5zZXQoMC41KTtcclxuc3ByaXRlLnggPSBhcHAuc2NyZWVuLndpZHRoIC8gMjtcclxuc3ByaXRlLnkgPSBhcHAuc2NyZWVuLmhlaWdodCAvIDI7XHJcblxyXG4vLyBPcHQtaW4gdG8gaW50ZXJhY3Rpdml0eVxyXG5zcHJpdGUuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG5cclxuLy8gU2hvd3MgaGFuZCBjdXJzb3Jcclxuc3ByaXRlLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuLy8gUG9pbnRlcnMgbm9ybWFsaXplIHRvdWNoIGFuZCBtb3VzZVxyXG5zcHJpdGUub24oJ3BvaW50ZXJkb3duJywgb25DbGljayk7XHJcblxyXG4vLyBBbHRlcm5hdGl2ZWx5LCB1c2UgdGhlIG1vdXNlICYgdG91Y2ggZXZlbnRzOlxyXG4vLyBzcHJpdGUub24oJ2NsaWNrJywgb25DbGljayk7IC8vIG1vdXNlLW9ubHlcclxuLy8gc3ByaXRlLm9uKCd0YXAnLCBvbkNsaWNrKTsgLy8gdG91Y2gtb25seVxyXG5cclxuYXBwLnN0YWdlLmFkZENoaWxkKHNwcml0ZSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9