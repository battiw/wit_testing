// const argumentsResultObject = require( "../src/argumentsParsing" );
const handlerArgumentsObject = require( "../src/handlerArguments" );

let text = `This is secret. Message about "_" symbol QAZWSXEDCRFVTGBYHNUJMIKOLP abxz!`;

let obj = {config: "-c", cipher:"C0-R1-A-R0-C1"}

test("should return an object with correct configuration -с", () => {
    expect(handlerArgumentsObject.handlerArgumentsExports (text, obj)).toEqual(`Sedt dt thjuhs. Zhttlfh lkxrs \"_\" tnzkxa VLMPTOHIJUGQSFKNEYRCZDBXAW lkom!`);
});

