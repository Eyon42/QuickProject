import * as fs from 'fs';

const helloWorld = 'Hello World!';

console.log(helloWorld);

fs.writeFileSync('helloWorld.txt', helloWorld);