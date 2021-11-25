let fs = require ( 'fs' )

const { stdout, stdin, stderr } = require ( 'process' )

const objParams = require ( "./argumentsParsing" );


const TransformStreamCoding = require ( './transformCoding' );
const transformCoding = new TransformStreamCoding();

if ( objParams.input !== undefined && objParams.output !== undefined ) {
        fs.access(objParams.inputText && objParams.outputText, fs.F_OK, ( err ) => {
                if ( err ) {
                  console.error( err );
                  return
                };
                const readStream = fs.createReadStream( objParams.inputText, 'utf-8' );
                const writeStream = fs.createWriteStream(objParams.outputText,  {flags: 'a+'});
                 readStream.pipe( transformCoding ).pipe( writeStream );
        });

} else  if ( objParams.input !== undefined && objParams.output === undefined ) {
        fs.access(objParams.inputText, fs.F_OK, ( err ) => {
                if (err) {
                  console.error( err );
                  return
                };
                const readStream = fs.createReadStream( objParams.inputText, 'utf-8' );
                readStream.pipe(transformCoding).pipe(stdout);
        });
        
} else if ( objParams.input === undefined && objParams.output !== undefined ) {
        fs.access(objParams.outputText, fs.F_OK, ( err ) => {
                if ( err ) {
                  console.error( err );
                  return
                };
                const writeStream = fs.createWriteStream(objParams.outputText, {flags: 'a+'});
                stdin.pipe(transformCoding).pipe(writeStream);
        });
        
} else if ( objParams.input === undefined && objParams.output === undefined ) {
        stdin.pipe(transformCoding).pipe(stdout);

} else {
        stderr.write( 'parameters are set incorrectly' );
};