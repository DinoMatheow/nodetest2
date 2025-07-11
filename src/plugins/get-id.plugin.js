    const { v4:uuidv4 } = require('uuid');


    const getUUID =  () => {
        // if ( uuidv4() ) return new Error('Not found with id');

        return uuidv4();
    }
    
    module.exports = { 

        getUUID,
    }
