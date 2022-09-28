const fs = require("fs");
// get the 2 files names 
const marked = process.argv[2];
const deleted = process.argv[3];

// read the file 
// check the marked if it's no, put this line into the new file => deleted

fs.readFile(marked, 'utf8', (err, data) => {
    // loop this data
    // get the column marked?
    // if it's no put it into the new file
    const fileArr = data.split('\n');
    const deletedArr = [];
    fileArr.forEach((element) => {
        // [Catelyn Stark, cs@winterfell.gov, yes]
        // arr[2] => yes
        const columnMarked = element.split(',')[2];
        if (columnMarked !== 'yes') {
            // if it's not yes, we put this line into a new array
            // in the end of this loop, we combine this arr into a string 
            // (put enter at the end of each line)
            // then put this string into the deleted file
            deletedArr.push(element);
        }
    });
    const result = deletedArr.join('\n');
    // put it into the new file
    fs.writeFile(deleted, result, err => {
        console.log('saved to the new file');
    })
});