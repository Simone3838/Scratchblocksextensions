const StringsExtension = {
  // This function is used to describe the extension's metadata
  getInfo: function() {
    return {
      id: 'strings',
      name: 'Strings',
      blocks: [
        {
          opcode: 'concat',
          blockType: Scratch.BlockType.REPORTER,
          text: 'join [STRING1] and [STRING2]',
          arguments: {
            STRING1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello',
            },
            STRING2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'World!',
            },
          },
        },
        {
          opcode: 'length',
          blockType: Scratch.BlockType.REPORTER,
          text: 'length of [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hello World!',
            },
          },
        },
        {
          opcode: 'toUpperCase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [STRING] to uppercase',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello',
            },
          },
        },
        {
          opcode: 'toLowerCase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'convert [STRING] to lowercase',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'HELLO',
            },
          },
        },
      ],
      menus: {},
    };
  },

  // Concatenate two strings
  concat: function(args) {
    return args.STRING1 + args.STRING2;
  },

  // Get the length of a string
  length: function(args) {
    return args.STRING.length;
  },

  // Convert string to uppercase
  toUpperCase: function(args) {
    return args.STRING.toUpperCase();
  },

  // Convert string to lowercase
  toLowerCase: function(args) {
    return args.STRING.toLowerCase();
  },
};

// Register the extension with Scratch
Scratch.extensions.register(StringsExtension);
