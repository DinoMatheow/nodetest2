
    const users = [
        {
            id: 1,
            name: 'Dino'
        },
        {
            id: 2,
            name: 'mati'

        }
    ];

    function getUserById( id, callback ){
        const user = users.find( (user)=> {
            return user.id === id;
        } );


        if ( !user ){
            return callback(` User not found  with id ${id} `);
        }

        return callback( null, user );
    }

    module.exports = {
        getUserById,
    }