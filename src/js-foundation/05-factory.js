
    // const { getUUID } = require('../plugins/get-id.plugin');
    // const  { getAge } = require('../plugins/get-age.plugin');


    // const obj = { name:'john', birthdate: '2001-10-17' };

    const buildMakePerson = ({ getUUID, getAge }) =>{
    return ( { name, birthdate } ) => {
        return { 
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            // age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
            age: getAge(birthdate),
        }
    }

    }

    module.exports = {
        buildMakePerson,
    }


    // const buildPerson = ( { name, birthdate } ) => {
    //     return { 
    //         id: getUUID(),
    //         name: name,
    //         birthdate: birthdate,
    //         // age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    //         age: getAge(birthdate),
    //     }
    // }

    // const matheow = buildPerson( obj );
    // console.log( matheow );