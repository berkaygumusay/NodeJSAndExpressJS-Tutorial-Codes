// First Middleware Function
const logger = (req,res,next) => {
    const time = new Date().getFullYear();
    const url = req.url;
    const method = req.method;
    console.log(method,url,time);
    next();
}

module.exports = logger ;