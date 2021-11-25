let fs = require ( 'fs' );
const { stderr } = require( 'process' );

//  function argumentsParsing (config, cipher ) {
 function argumentsParsing ( inputarr ) {

    // выводной объект с параметрами распарсиной строки консоли
    let objParams = {};

    let arrFlag = [];
    let arrArg = [];

    
    // находим циклом аргументы и записываем в массив
     for ( let i = 0; i <= inputarr.length-1; i++ ) {
         let symbolStr = inputarr[i];
            if ( symbolStr.charAt(0) === '-' || symbolStr.charAt(0) === '--' ) {
                arrFlag.push( symbolStr );
            };
            arrArg.push( symbolStr );
    };

    // по элементу массива аргументов находим и вносим в циклом в массив и если в нем больше двух одинаковых элементов то stderr
    arrFlag.forEach(( item ) => {
        let arrTemp = [];
            for ( let i = 0; i <= arrFlag.length; i++ ) {
            if ( item == arrFlag[i] ) {
                arrTemp.push( item[i] );
                if ( arrTemp.length >= 2 ) {
                    stderr.write( `Error: You provided -c argument more than once\n
                    Duplicate element\n` );
                    process.exit(1);
                };
            };
        };
    });

    // проверка на валидность конфигурации
    if ( inputarr[2] === '-c' || inputarr[2] === '--config') {
        if( arrArg.length >=0 && arrArg.length <=8 ) {
            objParams.config = '-c';
            let cipStr = inputarr[3].split( '-' );
            let strCipher = '';

            // перебераем строку с видами шифра и вводим ее параметром выводного объекта
            for ( item of cipStr ) {    
                if ( item[0] === 'C' || item[0] === 'R' ) {
                        if ( item[1] === '0' || item[1] === '1' ) {
                            strCipher = strCipher + '-' + item[0] + item[1];
                        } else {
                            stderr.write( 'Configuration cipher Caesar and ROT-8 entered incorrectly\n' );
                            process.exit(1);
                        } ;
                } else if ( item[0] === 'A' && item[1] == null ) {
                    strCipher = strCipher + '-' + item[0];
                } else {
                        stderr.write( 'Configuration cipher Atbash entered incorrectly\n' );
                        process.exit(1);
                };
            };
            objParams.cipher = strCipher.slice(1); // удаляем первый "-"

        let indexI;
        let indexO;

            // перебераем массив с аргументами и 
            arrArg.forEach( function( item, index ) {
                if ( item == '-i' || item == '--input' ) {
                    item = '-i';
                    objParams.input = item;
                        indexI= index+1 

                } else if ( item == '-o' || item == '--output' ) {
                    item = '-o';
                    objParams.output = item;
                        indexO = index+1;

                } else if ( item.startsWith( './' ) && indexI===index) {
                    objParams.inputText = item;

                } else if ( item.startsWith( './' ) && indexO===index) {
                    objParams.outputText = item;

                } else if ( index !== 1 || index !== 0) {
                } else {
                    stderr.write( 'Configuration arguments entered incorrectly\n' );
                    process.exit(1);
                };
            });
        
        } else {
            stderr.write( 'Exceeded number of parameters\n' );
            process.exit(1);
        };

    } else {
        stderr.write( 'Configuration parameter entered incorrectly\n' );
        process.exit(1);
    };
return objParams;

};

module.exports.argumentsParsingExport = argumentsParsing;
