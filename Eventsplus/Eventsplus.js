// Register the extension
Scratch.extensions.register('Events Expansion', {
    blocks: [
        {
            opcode: 'whenStopSignClicked',
            blockType: Scratch.BlockType.EVENT,
            text: 'when [stopSign v] clicked',
            arguments: {
                stopSign: {
                    type: Scratch.ArgumentType.IMAGE,
                    menu: 'stopSignMenu', // Define a menu for the stop sign images
                    defaultValue: 'stopSign'
                }
            }
        },
        {
            opcode: 'when',
            blockType: Scratch.BlockType.EVENT,
            text: 'when <>',
            arguments: {
                condition: {
                    type: Scratch.ArgumentType.TEXT,
                    defaultValue: 'green flag clicked'
                }
            }
        },
        {
            opcode: 'always',
            blockType: Scratch.BlockType.INFINITE_LOOP,
            text: 'always'
        }
    ],
    menus: {
        stopSignMenu: ['stopSign', 'anotherStopSign'] // Example stop signs in a menu
    }
});

// Define the behavior of the "whenStopSignClicked" block
Scratch.blocks['whenStopSignClicked'] = {
    init: function (obj) {
        obj.appendDummyInput('stopSign').appendField(new Scratch.FieldImage('stopSign', 15, 15, 'Choose stop sign'));
    },
    definition: function (block) {
        var stopSign = block.getFieldValue('stopSign');
        Scratch.Events.listenTo(stopSign, 'click', function (event) {
            // Start a thread when the stop sign is clicked
            this.parentThread.start(true, {
                stopSign: event.target
            });
        });
    }
};

// Define the behavior of the "when" block (generic condition event)
Scratch.blocks['when'] = {
    init: function (obj) {
        obj.appendValueInput('condition').setCheck(null).setAlign(Scratch.Blocks.CENTER);
    },
    definition: function (block) {
        var condition = block.getFieldValue('condition');
        var callback = function () {
            if (this.evaluate) {
                this.evaluate(block, this);
            } else {
                throw 'Event callbacks must be functions';
            }
        };
        Scratch.addEventListener(condition, callback, block);
    }
};

// Define the behavior of the "always" block
Scratch.blocks['always'] = {
    init: function (obj) {
        // No input needed for the "always" block
    },
    definition: function (block) {
        block.setPreviousStatement(true, null);
        block.setNextStatement(true, null);
        Scratch.always = function (callback, context) {
            callback.call(context);
        };
    }
};

// Define how events are evaluated
Scratch.listeners['when'] = {
    evaluate: function (event, callback, context) {
        callback.call(context);
    }
};
