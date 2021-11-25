const r8E = require( "../src/Ciphers/ROT8/rot8Encoding" );

let text = `This is secret. Message about "_" symbol!`;
let notEngText = `русский алфавит`;
let sumbol = `-!=><()@#$%^&*?/":"1234567890`;

test( "should show correct encoding ROT-8", () => {
    expect(r8E( text )).toBe( `Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!` );
} ); 
    
test( "ROT-8 must not encode non-english alphabet", () => {
    expect( r8E( notEngText )).toBe( `русский алфавит` );
});
    
test( "ROT-8 should not encode characters", () => {
    expect( r8E( sumbol )).toBe( `-!=><()@#$%^&*?/":"1234567890` );
});


