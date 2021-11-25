const r8D = require( "../src/Ciphers/ROT8/rot8Decoding" );

let text = `This is secret. Message about "_" symbol QAZWSXEDCRFVTGBYHNUJMIKOLP abxz!`;
let notEngText = `русский алфавит`;
let sumbol = `-!=><()@#$%^&*?/":"1234567890`;
    
test( "should show correct decoding ROT-8", () => {
    expect( r8D( text ) ).toBe( `Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd ISROKPWVUJXNLYTQZFMBEACGDH stpr!` )
} ); 
    
test( "ROT-8 must not encode non-english alphabet", () => {
    expect( r8D( notEngText )).toBe( `русский алфавит` );
});
    
test( "ROT-8 should not encode characters", () => {
    expect( r8D( sumbol )).toBe( `-!=><()@#$%^&*?/":"1234567890` )
});
