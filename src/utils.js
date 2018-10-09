var constants = require( './constants' );
module.exports = {
    log: function( msg ) {
        if ( constants.DEBUG_MODE ) {
            console.log( msg );
        }
    }
}