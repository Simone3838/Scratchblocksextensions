const Strings = {
  // This will be the id of your extension
  id: 'strings',
  
  // This is the name of the extension
  name: 'Strings',
  
  // Blocks to add to the extension
  blocks: [
    {
      // A block that converts a string to uppercase
      opcode: 'toUpperCase',
      blockType: Scratch.BlockType.REPORTER,
      text: 'convert [TEXT] to uppercase',
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'hello'
        }
      }
    },
    {
      // A block that converts a string to lowercase
      opcode: 'toLowerCase',
      blockType: Scratch.BlockType.REPORTER,
      text: 'convert [TEXT] to lowercase',
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'HELLO'
        }
      }
    },
    {
      // A block to join two strings together
      opcode: 'joinStrings',
      blockType: Scratch.BlockType.REPORTER,
      text: 'join [TEXT1] and [TEXT2]',
      arguments: {
        TEXT1: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'Hello'
        },
        TEXT2: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'World'
        }
      }
    },
    {
      // A block to check if one string contains another
      opcode: 'containsSubstring',
      blockType: Scratch.BlockType.BOOLEAN,
      text: '[TEXT1] contains [TEXT2]?',
      arguments: {
        TEXT1: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'Hello World'
        },
        TEXT2: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'World'
        }
      }
    },
    {
      // A block that gets the length of a string
      opcode: 'getStringLength',
      blockType: Scratch.BlockType.REPORTER,
      text: 'length of [TEXT]',
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: 'Hello'
        }
      }
    }
  ],

  // Implement the logic for each block
  // Block 1: Convert to uppercase
  toUpperCase: function (args) {
    return args.TEXT.toUpperCase();
  },
  
  // Block 2: Convert to lowercase
  toLowerCase: function (args) {
    return args.TEXT.toLowerCase();
  },

  // Block 3: Join two strings
  joinStrings: function (args) {
    return args.TEXT1 + args.TEXT2;
  },

  // Block 4: Check if one string contains another
  containsSubstring: function (args) {
    return args.TEXT1.includes(args.TEXT2);
  },

  // Block 5: Get the length of a string
  getStringLength: function (args) {
    return args.TEXT.length;
  }
};

// This exports the extension, so Scratch can recognize and use it.
Scratch.extensions.register(Strings);
