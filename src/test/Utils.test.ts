import { toUpperCase } from "../app/Utils"
import { getStringInfo } from "../app/Utils"
import { StringUtils } from "../app/Utils"


describe('Utils test suite', () => {

    describe('StringUtils tests', ()=>{

        let sut: StringUtils;

        beforeEach(()=>{
            sut = new StringUtils();
            //console.log('Setup');
        })

        /*afterEach(()=>{
            //clearing mocks
            console.log('Teardown');
        })*/

        it('Should return correct UpperCase', ()=>{
            const actual = sut.toUpperCase('abc');

            expect(actual).toBe('ABC');
            console.log('Actual test');
        })

        it.only('Should throw error on invalid argument - function', ()=>{
            //using function
            function expectError() {
                const actual = sut.toUpperCase('');
            }
            expect(expectError).toThrow();
            expect(expectError).toThrowError('Invalid argument!');
        })

        it.only('Should throw error on invalid argument - arrow function', ()=>{
            //using arrow function
            expect(()=>{
                sut.toUpperCase('');
            }).toThrowError('Invalid argument!');
        })

        it.only('Should throw error on invalid argument - try catch block', (done)=>{
            //using try catch block
            try {
                sut.toUpperCase('');
                done('GetStringInfo should throw error for invalid arg!')
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid argument!');
                done();
            }
        })

    });


    it('should return uppercase of valid string', ()=>{
        //arrange:
        const sut = toUpperCase;
        const expected = 'ABC';

        //act:
        const actual = sut('abc');

        //assert:
        expect(actual).toBe(expected);
    })

    //Parametrized tests
    describe.only('ToUpperCase examples', ()=>{
        it.each([
            {input:'abc', expected: 'ABC'},
            {input:'My-string', expected: 'MY-STRING'},
            {input:'def', expected: 'DEF'},
        ])('$input toUpperCase should be $expected', ({input, expected})=>{
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        });
    })

    //Multiple tests
    describe('getStringInfo for arg My-string should', ()=>{
        test('return right length', ()=>{
            const actual = getStringInfo('My-string');
            expect(actual.characters).toHaveLength(9);
        });

        test('return right lower case', ()=>{
            const actual = getStringInfo('My-string');
            expect(actual.lowerCase).toBe('my-string');
        });

        test('return right upper case', ()=>{
            const actual = getStringInfo('My-string');
            expect(actual.upperCase).toBe('MY-STRING');
        });

        test('return right characters', ()=>{
            const actual = getStringInfo('My-string');
            expect(actual.characters).toEqual(['M','y','-','s','t','r','i','n','g']);
            expect(actual.characters).toContain('M');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['s','t','r','i','n','g','M','y','-'])
            );
        });

        test('return defined extra info', ()=>{
            const actual = getStringInfo('My-string');
            expect(actual.extraInfo).toBeDefined();
        });

        test('return right extra info', ()=>{
            const actual = getStringInfo('My-string');
            expect(actual.extraInfo).toEqual({});
        });
    });

    //Jest assertions and matchers
    /*it.only('should return info for valid string', ()=>{
        const actual = getStringInfo('My-string');

        expect(actual.lowerCase).toBe('my-string');
        expect(actual.extraInfo).toEqual({});

        expect(actual.characters.length).toBe(9);
        expect(actual.characters).toHaveLength(9);

        expect(actual.characters).toEqual(['M','y','-','s','t','r','i','n','g']);
        expect(actual.characters).toContain('M');
        expect(actual.characters).toEqual(
            expect.arrayContaining(['s','t','r','i','n','g','M','y','-'])
        );

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    })*/

})