const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];

// Read file
const lines = fs.readFileSync(filename, 'binary').split('\n');

// Set up regex
const regEx = /http[^\'\"]+/;

// Find matches
const https = lines.map((line) => {
    if (line !== null) return line.match(regEx);
});

https.forEach(http => {
    if (http !== null) console.log(http[0]);
})
