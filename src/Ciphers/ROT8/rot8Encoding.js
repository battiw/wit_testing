const alphabet = require( "../../alphabet" )

module.exports = function ( text ) {

    let outArr = [];

    // преобразование строки в массив (converting string to array)
    let strArr = text.split( '' );

    // перебор входящего массива (iterating over the incoming array)
    strArr.forEach(( item ) => {
    
            // поиск в исходном массиве элемента из входящего массива (search in the original array for an element from the input array)
            let resultindex = alphabet.findIndex(( item1 ) => item1 === item );

            if ( resultindex >= 0 && resultindex < 18 ) {
                let letter1 = alphabet[resultindex+8];
                outArr.push( letter1 ); 
            } else if ( resultindex >= 18 && resultindex < 26 ) {
                let letter2 = alphabet[resultindex-18];
                outArr.push( letter2 );
            } else if ( resultindex >= 26 && resultindex <= 43) {
                let letter3 = alphabet[resultindex+8];
                outArr.push( letter3 );
            } else if ( resultindex > 43 && resultindex <= 51) {
                let letter4 = alphabet[resultindex-18];
                outArr.push( letter4 );
            } else {
                outArr.push( item );
            };
    });
    // конвертация выводного массива в строку (convert output array to string)
    return outArr.join( "" );
};