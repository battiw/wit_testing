const caesarEncoding = require( "./Ciphers/Caesar/caesarEncoding" );
const caesarDecoding = require( "./Ciphers/Caesar/caesarDecoding" );
const atbashEncoding = require( "./Ciphers/Atbash/atbashEncoding" );
const rot8Encoding = require( "./Ciphers/ROT8/rot8Encoding" );
const rot8Decoding = require( "./Ciphers/ROT8/rot8Decoding" );


function handlerArguments( text, argumentsParsing ) {
    let cip = argumentsParsing.cipher;
    let newtext = text;
    let newarr = cip.split( '-' );

        for ( element of newarr ) {
            if ( element === "C1" ) {
                newtext = caesarEncoding( newtext );

            } else if ( element === "C0" ) {
                newtext = caesarDecoding( newtext );
            
            } else if ( element === "R1" ) {
                newtext = rot8Encoding( newtext );

            } else if ( element === "R0" ) {
                newtext = rot8Decoding( newtext );

            } else if ( element === "A" ) {
                newtext = atbashEncoding( newtext );
            };
        };
        return newtext;
};

module.exports.handlerArgumentsExports = handlerArguments