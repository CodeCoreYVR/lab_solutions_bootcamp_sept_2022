let csvData = `
id,first name,last name,email
1,jane,doe,wildmirror@yahoo.com
2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com
4,natalia,romanov,8legged@ninja.com
5,peter,quill,starlord@gmail.com
`

function parseCSV (csvData) {
  let arr = []
  const csvLines = csvData.trim().split('\n').slice(1);

  for (let line of csvLines) {
    let columns = line.split(',')
    arr.push({
      id: columns[0],
      firstName: columns[1],
      lastName: columns[2],
      email: columns[3]
    });
  }

  return arr;
}

console.log(parseCSV(csvData));
