const argumentsResultObject = require( "../src/argumentsParsing" );

let config = "-c";
let config1 = "--config";
let configIncorrect = "";
let cipher = 'C1-A-R0';
let cipherRotIncorrect = 'C1-A-R5';
let cipherAtbashIncorrect = 'C1-A1-R0';
let cipherCaesarIncorrect = 'C5-A-R0';
let cipherNotDefined = 'C5-A-R0';

let input ='';
let inputText='';
let output = '';
let outputText = '';

let inputI = "-i"
let inputTextI = "./inputq.txt"
let outputI = "-o"
let outputTextI = "./outputq.txt"
let duplicat = '-c'

test("should return an object with correct configuration -с", () => {
  let inparr = ['', '', config, cipher, input, inputText, output, outputText];
      expect( argumentsResultObject.argumentsParsingExport( inparr )).toEqual({ config: '-c', cipher: 'C1-A-R0' });
});
test("should return a correctly configured object with --config", () => {
  let inparr = ['', '', config1, cipher, input, inputText, output, outputText];
    expect( argumentsResultObject.argumentsParsingExport( inparr )).toEqual({ config: '-c', cipher: 'C1-A-R0' });
});
test("must confirm that the configuration value is defined", () => {
  let inparr = ['', '', config1, cipher, input, inputText, output, outputText];
    expect( argumentsResultObject.argumentsParsingExport( inparr )).toBeDefined();
});


describe( 'entering invalid function arguments', () => {
    it('should exit the process if incorrect configuration', () => {
      const Process = process;
      const Mock = jest.fn();
      global.process = { ...Process, exit: Mock };
      argumentsResultObject.argumentsParsingExport(configIncorrect, cipher); 
      expect(Mock).toHaveBeenCalledWith(1);
    });

    it('should exit process on condition match', () => {
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(config, cipherRotIncorrect);
        expect(Mock).toHaveBeenCalledWith(1);
      });

      it('should exit process on condition match', () => {
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(config, cipherAtbashIncorrect);
        expect(Mock).toHaveBeenCalledWith(1);
      });

      it('should exit process on condition match', () => {
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(config, cipherCaesarIncorrect);
        expect(Mock).toHaveBeenCalledWith(1);
      });

      it('should exit the process if the cipher is undefined', () => {
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(config, cipherNotDefined);
        expect(Mock).toHaveBeenCalledWith(1);
      });

      it('-i', () => {
        let inparr = ['', '', config, cipher, inputI, inputTextI, output, outputText];
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(inparr);
        expect(Mock).toHaveBeenCalledWith(1);
      });

      it('-o', () => {
        let inparr = ['', '', config, cipher, input, inputText, outputI, outputTextI];
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(inparr);
        expect(Mock).toHaveBeenCalledWith(1);
      });

      it('should exit the process if there is a duplicate argument', () => {
        let inparr = ['', '', config, cipher, input, inputText, output, duplicat];
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(inparr);
        expect(Mock).toHaveBeenCalledWith(1);
      });
      
      it('should exit the process if the Atbash cipher is incorrect', () => {
        let inparr = ['', '', config, cipherAtbashIncorrect, input, inputText, output, outputText];
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(inparr);
        expect(Mock).toHaveBeenCalledWith(1);
      });

      it('should exit the process if the Caesar cipher is incorrect', () => {
        let inparr = ['', '', config, cipherCaesarIncorrect, input, inputText, output, outputText];
        const Process = process;
        const Mock = jest.fn();
        global.process = { ...Process, exit: Mock };
        argumentsResultObject.argumentsParsingExport(inparr);
        expect(Mock).toHaveBeenCalledWith(1);
      });


  });
