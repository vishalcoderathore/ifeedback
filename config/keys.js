if(process.env.NODE_ENV === 'productin'){
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}