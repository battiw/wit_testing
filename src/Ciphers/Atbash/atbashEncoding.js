const alphabet = require( "../../alphabet" );

module.exports = function ( text ) {

    let outArr = [];

    // преобразование строки в массив (converting string to array)
    let strArr = text.split( '' );

    // перебор входящего массива (iterating over the incoming array)
    strArr.forEach(( item ) => {
        
        // поиск в исходном массиве элемента из входящего массива (search in the original array for an element from the input array)
        let resultindex = alphabet.findIndex(( item1 ) => item1 === item );

        if ( resultindex >= 0 && resultindex <= 12 ) {
            let letter1 = alphabet[25-resultindex];
            outArr.push( letter1 ) 
        } else if ( resultindex >= 13 && resultindex <= 25 ) {
            let letter2 = alphabet[25-resultindex];
            outArr.push( letter2 );
        } else if ( resultindex >= 26 && resultindex <= 38 ) {
            let letter3 = alphabet[51-( resultindex-26 )];
            outArr.push( letter3 ) 
        } else if (resultindex >= 39 && resultindex <= 51 ) {
            let letter4 = alphabet[51-( resultindex-26 )];
            outArr.push( letter4 ); 
        } else {
            outArr.push( item )
        };
    });
    return outArr.join( "" );
};

