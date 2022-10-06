const file = require('fs');  
var departments = [];
var employees = [];


exports.initialize = () =>
{
    return new Promise ((resolve, reject) =>{
        file.readFile('./students.json', (err,data)=> {
            if (err) {
                reject ('unable to read file');
            }
            else {
                departments = JSON.parse(data);
            }
        });  
        resolve();
    })
};