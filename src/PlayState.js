/*globals FM */
/**
 * The PlayState for creating gameplay.
 */
var PlayState = function () {
    "use strict";
    //Call parent constructor
    FM.State.call(this);
    /*
     * An entity of the game.
     */
    this.entity = new Entity();
};
//PlayState inherits from FM.State
PlayState.prototype = Object.create(FM.State.prototype);
PlayState.prototype.constructor = PlayState;
/**
 * The init function inherited from FM.State.
 * Called first.
 */
PlayState.prototype.init = function () {
    "use strict";
    //Call parent method
    FM.State.prototype.init.call(this);

    //Init instructions
    //Add an entity to the state
    this.add(this.entity);
};
/**
 * The update function inherited from FM.State.
 * Called each frame.
 * @param {Number} dt Fixed delta time since the last frame.
 */
PlayState.prototype.update = function (dt) {
    "use strict";
    //Call parent method
    FM.State.prototype.update.call(this, dt);

    //Update instructions
};
/**
 * 
 */
PlayState.prototype.destroy = function () {
    "use strict";
    //Call parent method
    FM.State.prototype.destroy.call(this);

    //Remove the references
    this.entity = null;
};