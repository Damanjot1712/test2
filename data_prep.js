const file = require('fs');  
var departments = [];
var employees = [];


exports.initialize = () =>
{
    return new Promise ((resolve, reject) =>
    {
        file.readFile('./students.json', (err,data)=> 
        {
            if (err) 
            {
                reject ('no result found');
            }
            else 
            {
                students = JSON.parse(data);
            }
        })
        resolve();
    })
};

exports.cpa = () =>{
    return new Promise ((resolve,reject) => {
        if (students.length == 0) {
            reject('unable to read file');
        }
        else {
            resolve(students);
        }
    })
};