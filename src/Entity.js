/*globals FM */
/**
 * An entity.
 */
var Entity = function () {
    "use strict";
    //Call parent constructor, provide the z index
    FM.GameObject.call(this, 10);
    //Add components to the game object
    this.addComponent(new FM.SpatialComponent(100, 200, this));
    this.addComponent(new FM.BoxRendererComponent(50, 20, "fff", this));
};
//PlayState inherits from FM.State
Entity.prototype = Object.create(FM.GameObject.prototype);
Entity.prototype.constructor = Entity;
/**
 * The update function inherited from FM.State.
 * Called each frame.
 * @param {Number} dt Fixed delta time since the last frame.
 */
Entity.prototype.update = function (dt) {
    "use strict";
    //Update instructions
};