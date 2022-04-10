import emoji from 'node-emoji';

// if there is an input in the command line
if (process.argv.length === 3) {
  // see if that input coresponds to an emoji and get that emoji
  if (emoji.hasEmoji(process.argv[2])) {
    console.log(emoji.get(process.argv[2]));
    // else write error message
  } else {
    console.log('Emoji not found');
  }
  // if no input is provided print a random emoji
} else {
  console.log(emoji.random()['emoji']);
}
