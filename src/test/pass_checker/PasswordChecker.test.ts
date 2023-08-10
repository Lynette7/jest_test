import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe('PasswordChecker test suite', ()=>{

    let sut: PasswordChecker;

    beforeEach(()=>{
        sut = new PasswordChecker();
    })

    it('Password with less than 8 characters is invalid', ()=>{
        const actual = sut.checkPassword('1234567');
        expect(actual).toBe(false);
    })

    it('Password with 8 characters or more is valid', ()=>{
        const actual = sut.checkPassword('12345678Aa');
        expect(actual).toBe(true);
    })

    it('Password with no upper case letter is invalid', ()=>{
        const actual = sut.checkPassword('1234abcd');
        expect(actual).toBe(false);
    })

    it('Password with an upper case letter is okay', ()=>{
        const actual = sut.checkPassword('1234abcdA');
        expect(actual).toBe(true);
    })

    it('Password with no lower case letter is invalid', ()=>{
        const actual = sut.checkPassword('1234ABCD');
        expect(actual).toBe(false);
    })

    it('Password with a lower case letter is okay', ()=>{
        const actual = sut.checkPassword('1234ABCDa');
        expect(actual).toBe(true);
    })

})