const {readFile,writeFile} = require('fs');

// reading first file and writing a callback func
readFile('./content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    // reading second file and writing a callback func
    readFile('./content/second.txt','utf-8',(err,result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        // writing the sum of first file and second file to result-async.text and writing a callback func
        writeFile('./content/result-async.txt',`Here is the result : ${first} | ${second}`,(err,result) => {
            if(err){
                console.log(err);
                return
            }
            // result = undefined
            console.log(result);
        })
    })
})
