// const { emailTemplate } = require('./js-foundation/01-template');

// require('./js-foundation/02-destructuring');
//  const { getUserById } = require('./js-foundation/03-callbacks');
 const { getAge } = require('./plugins/get-age.plugin');
 const { getUUID } = require('./plugins/get-id.plugin');

const { buildMakePerson } = require('./js-foundation/05-factory');




    const makePerson = buildMakePerson({ getUUID, getAge });

    const obj = { name:'john', birthdate: '2001-10-17' };

    const  john = makePerson( obj );

    console.log({ john });
// console.log(emailTemplate);

// const id = 1;

// getUserById( id, ( error, user ) =>  {
//     if ( error ){
//         throw new Error( error );
//     }
//     console.log(user);
// });