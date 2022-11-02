const {createReadStream} = require('fs');

const stream = createReadStream('./content/big-text.txt',{
    highWaterMark: 90000,
    encoding: 'utf-8',
});


//  default 64kb
//  last buffer - remainder
//  highWaterMark - control size
//  const stream = createReadStream('./content/big-text.txt',{highWaterMark: 90000,encoding: 'utf-8',});
//  const stream = createReadStream('../content/big-text.txt',{highWaterMark: 90000,encoding: 'utf-8',});

stream.on('data',(result) => {
    console.log(result);
})