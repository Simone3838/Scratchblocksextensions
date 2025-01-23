Scratch.extensions.register('Events Expansion', {
    blocks: [
        {
            opcode: 'whenStopSignClicked',
            blockType: Scratch.BlockType.EVENT,
            text: 'when [stopSign v] clicked',
            arguments: {
                stopSign: {
                    type: Scratch.ArgumentType.IMAGE,
                    menu: 'stopSignMenu',
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

Scratch.blocks['whenStopSignClicked'] = {
    init: function (obj) {
        obj.appendDummyInput('stopSign').appendField(new Scratch.FieldImage('stopSign', 15, 15, 'Choose stop sign'));
    },
    definition: function (block) {
        var stopSign = block.getFieldValue('stopSign');
        console.log("Event listener set for stop sign: " + stopSign);
        
        // Verify stopSign exists and is accessible before adding event listener
        if (stopSign) {
            Scratch.Events.listenTo(stopSign, 'click', function (event) {
                console.log("Stop sign clicked!");
                this.parentThread.start(true, {
                    stopSign: event.target
                });
            });
        } else {
            console.log("Stop sign not available. Check your input.");
        }
    }
};

Scratch.blocks['when'] = {
    init: function (obj) {
        obj.appendValueInput('condition').setCheck(null).setAlign(Scratch.Blocks.CENTER);
    },
    definition: function (block) {
        var condition = block.getFieldValue('condition');
        console.log("Condition set: " + condition);
        
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

Scratch.blocks['always'] = {
    init: function (obj) {},
    definition: function (block) {
        block.setPreviousStatement(true, null);
        block.setNextStatement(true, null);
        console.log("Always block initialized.");
        Scratch.always = function (callback, context) {
            callback.call(context);
        };
    }
};

Scratch.listeners['when'] = {
    evaluate: function (event, callback, context) {
        callback.call(context);
    }
};
