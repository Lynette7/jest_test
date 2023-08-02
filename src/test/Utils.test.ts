import { toUpperCase } from "../app/Utils"
import { getStringInfo } from "../app/Utils"


describe('Utils test suite', () => {

    it('should return uppercase of valid string', ()=>{
        //arrange:
        const sut = toUpperCase;
        const expected = 'ABC';

        //act:
        const actual = sut('abc');

        //assert:
        expect(actual).toBe(expected);
    })

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