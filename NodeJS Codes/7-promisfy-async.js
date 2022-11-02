const fs = require('fs').promises;
const util = require('util');

/* const readFilePromised = util.promisify(fs.readFile);   
const writeFilePromised = util.promisify(fs.writeFile);    */



const start = async () => {
    try {
        const first = await fs.readFile('./content/first.txt','utf-8');
        const second = await fs.readFile('./content/second.txt','utf-8');
        await fs.writeFile('./content/promisfy-result-async.txt',`This Is the result = !! '${first}' | '${second}' !! `,{flag:'a'});
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
}
start();



/* const getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path,'utf-8',(err,data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data)
            }
        })
    })
} */
/* getText('./content/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err)) */
