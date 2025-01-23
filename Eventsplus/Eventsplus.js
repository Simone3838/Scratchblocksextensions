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
