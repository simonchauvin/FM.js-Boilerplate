/*globals FM */
/**
 * The MenuState for creating title, menu and stuff.
 */
var MenuState = function () {
    "use strict";
    //Call parent constructor
    FM.State.call(this);
    /*
     * Declare your variables here.
     * DO NOT INSTANTIATE OBJECTS HERE (the current state is still the previous
     * one (Preloader))
     */
    this.title;
    this.instructions;
};
//MenuState inherits from FM.State
MenuState.prototype = Object.create(FM.State.prototype);
MenuState.prototype.constructor = MenuState;
/**
 * The init function inherited from FM.State.
 * Called first.
 */
MenuState.prototype.init = function () {
    "use strict";
    //Call parent method
    FM.State.prototype.init.call(this);

    // Init instructions
    // Instantiate your objects here

    //Add a spatial component to the title to specify a position
    this.title = new FM.GameObject(10);
    this.title.addComponent(new FM.SpatialComponent(150, 150, this.title));
    //Add a text renderer component to the title to display a text
    this.title.addComponent(new FM.TextRendererComponent("Your Project Name", this.title));
    //Format the title by calling the setFormat method of the renderer component
    this.title.components[FM.ComponentTypes.RENDERER].setFormat('#fff', '60px sans-serif', 'middle');
    //Add the title to the MenuState to have the engine display and update it
    this.add(this.title);
    //Add a spatial component to the title to specify a position
    this.instructions = new FM.GameObject(10);
    this.instructions.addComponent(new FM.SpatialComponent(270, 450, this.instructions));
    //Add a text renderer component to the title to display a text
    this.instructions.addComponent(new FM.TextRendererComponent("Press SPACE to start", this.instructions));
    //Add the title to the MenuState to have the engine display and update it
    this.add(this.instructions);
};
/**
 * The update function inherited from FM.State.
 * Called each frame.
 * @param {Number} dt Fixed delta time since the last frame.
 */
MenuState.prototype.update = function (dt) {
    "use strict";
    //Call parent method
    FM.State.prototype.update.call(this, dt);

    //Update instructions
    //Switch to the PlayState if the player press the SPACE key
    if (FM.Game.isKeyPressed(FM.Keyboard.SPACE)) {
        FM.Game.switchState(new PlayState());
    }
};