/**
 * This test checks that 2 and 2 equals 4.
 * As that is true, the test will pass
 */
test('2 and 2 should equal 4', () => {
    let ourResult = 2 + 2;

    expect(ourResult).toBe(4);
});

/**
 * This test checks that 2 and 2 equals 5.
 * As that is not true, the test will fail
 */
test('2 and 2 should equal 5', () => {
    let ourResult = 2 + 2;

    expect(ourResult).toBe(5);
});

/**
 * This test checks the value of a boolean is 'true'.
 * It also checks that the value is 'truthy', i.e. not
 * false, 0, '', null, undefined or NaN. As both assertions
 * are true, the test will pass.
 */
test('a boolean true is true and truthy', () => {
    let ourBoolean = true;

    expect(ourBoolean).toBe(true);
    expect(ourBoolean).toBeTruthy();
});

function ourErrorFunction() {
    throw new SyntaxError('Incorrect syntax!');
}

/**
 * This test checks that a code statement throws a specific type of error,
 * in this case a SyntaxError. As that is the case, the test will pass.
 */
test('calling a function throws a SyntaxError', () => {
   expect(ourErrorFunction).toThrowError(SyntaxError);
});

/**
 * This test checks that a code statement throws a specific type of error,
 * in this case a RangeError. As that is not the case, the test will fail.
 */
test('calling a function throws a RangeError', () => {
    expect(ourErrorFunction).toThrowError(RangeError);
});