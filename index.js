const data = [
  '/public/aaa/1.file',
  '/public/aaa/2.file',
  '/public/bbb/1.file',
  '/public/ccc/1.file',
  '/public/ccc/2.file',
  '/public/ccc/3.file',
  '/public/ddd/1.file'
]

const output = {};
let current;

for (const path of data) {
    current = output;
    for (const segment of path.split('/')) {
        if (segment !== '') {
            if (!(segment in current)) {
                current[segment] = {};
            }
            current = current[segment];
        }
    }
}

console.log(output);