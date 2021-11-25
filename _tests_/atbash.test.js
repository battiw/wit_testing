const atbash = require( "../src/Ciphers/Atbash/atbashEncoding" );

let text = `This is secret. Message about "_" symbol!`;
let notEngText = `русский алфавит`;
let sumbol = `-!=><()@#$%^&*?/":"1234567890`;

    test( "should show correct coding atbash", () => {
        expect( atbash( text )).toBe( `Gsrh rh hvxivg. Nvhhztv zylfg "_" hbnylo!` );
    } ); 

    test( "atbash must not encode non-english alphabet", () => {
        expect( atbash( notEngText )).toBe( `русский алфавит` );
    });

    test( "atbash should not encode characters", () => {
        expect( atbash( sumbol )).toBe( `-!=><()@#$%^&*?/":"1234567890` );
    });
