// This is just a sample script. Paste your real code (javascript or HTML) here.
Scratch.extensions.register('Events Espansion', {
    blocks: [{
        opcode: 'whenStopSignClicked',
        blockType: Scratch.BlockType.EVENT,
        text: 'when [stop sign v] clicked',
        arguments: {
            stopSign: {
                type: Scratch.ArgumentType.IMAGE,
                menu: 'Choose stop sign',
                defaultValue: 'stopSign'
            }
        }
    }, {
        opcode: 'when',
        blockType: Scratch.BlockType.EVENT,
        text: 'when <>',
        arguments: {
            condition: {
                type: Scratch.ArgumentType.TEXT,
                defaultValue: 'green flag clicked'
            }
        }
    }, {
        opcode: 'always',
        blockType: Scratch.BlockType.INFINITE_LOOP,
        text: 'always'
    }]
});
Scratch.blocks['whenStopSignClicked'] = {
    init: function(obj) {
        obj.appendDummyInput("stopSign").appendField(new Scratch.fieldImage("stopSign", 15, 15, "Choose stop sign"));
    },
    definition: function(block) {
        Scratch.Events.listenTo(block, "click", {
            target: "stopSign",
            callback: function(event) {
                this.parentThread.start(true, {
                    stopSign: event.target
                });
            }
        });
    }
};
Scratch.blocks['when'] = {
    init: function(obj) {
        obj.appendValueInput("condition").setCheck(null).setAlign(Scratch.Blocks.CENTER);
    },
    definition: function(block) {
        var condition = block.getFieldValue('condition');
        var callback = function() {
            if (this.evaluate) {
                this.evaluate(block, this);
            } else {
                throw "Event callbacks must be functions";
            }
        };
        Scratch.addEventListener("when", condition, callback, block);
    }
};
Scratch.blocks['always'] = {
    init: function(obj) {},
    definition: function(block) {
        block.setPreviousStatement(true, null);
        block.setNextStatement(true, null);
        Scratch.always = function(callback, context) {
            callback.call(context);
        };
    }
};
Scratch.listeners['when'] = {
    evaluate: function(event, callback, context) {
        callback.call(context);
    }
};
