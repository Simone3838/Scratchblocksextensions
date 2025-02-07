const Strings = {
  // Metadata about the extension (this is where getInfo() is used)
  getInfo: function () {
    return {
      id: 'strings', // A unique identifier for your extension
      name: 'Strings', // The name of your extension
      blocks: [
        {
          // Block that converts a string to uppercase
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
          // Block that converts a string to lowercase
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
          // Block to join two strings together
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
          // Block to check if one string contains another
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
          // Block that gets the length of a string
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
      // Optional description
      description: 'An extension for string manipulations (e.g., converting case, joining strings, etc.)'
    };
  },

  // Block implementations
  toUpperCase: function (args) {
    return args.TEXT.toUpperCase();
  },

  toLowerCase: function (args) {
    return args.TEXT.toLowerCase();
  },

  joinStrings: function (args) {
    return args.TEXT1 + args.TEXT2;
  },

  containsSubstring: function (args) {
    return args.TEXT1.includes(args.TEXT2);
  },

  getStringLength: function (args) {
    return args.TEXT.length;
  }
};

// Register the extension
Scratch.extensions.register(Strings);
