import emoji from 'node-emoji';

if (process.argv.length === 3) {
  if (emoji.hasEmoji(process.argv[2])) {
    console.log(emoji.get(process.argv[2]));
  } else {
    console.log('Emoji not found');
  }
} else {
  console.log(emoji.random()['emoji']);
}
