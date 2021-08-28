///JavaScript Object Notation -- JSON
const obj = {
    name: 'abul',
    profesion: 'Student',
    class: '7'
}
// console.log(obj);
//convert objet to string by json method
const stringify = JSON.stringify(obj);
// console.log(stringify);

// convert string to objet by json method
const parseObj = JSON.parse(stringify);
// console.log(parseObj);