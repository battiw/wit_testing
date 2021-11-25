const alphabet = require( "../../alphabet" );

module.exports = function (text) {

     let alpLen = alphabet.length-1;
     let outArr=[];

     let strArr = text.split( '' );

     strArr.forEach(( item ) => {
    
          let result = alphabet.find(( item1 ) => item1 === item );
          let resultindex = alphabet.findIndex(( item1 ) => item1 === item ); 
                
          if ( result && resultindex !== alpLen && resultindex+26 !== alpLen ) {
               let letter1 = alphabet[resultindex+1];
               outArr.push( letter1 );
          } else if ( alpLen == resultindex ) {
               let letter2 = alphabet[26];
               outArr.push( letter2 );
          } else if ( alpLen == resultindex+26 ) {
               let letter3 = alphabet[0];
               outArr.push( letter3 );
          } else {
               outArr.push( item );
          };
     });
     return outArr.join("");
};
