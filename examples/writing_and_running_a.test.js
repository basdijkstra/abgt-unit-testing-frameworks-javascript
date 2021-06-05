/**
 * Because this function uses the 'test' function,
 * Jest identifies it as a test.
 */
test('this function is identified as a test', () => {
});

/**
 * This function, too, uses the 'test' function,
 * and is therefore identified by Jest as a test.
 */
test('this function is also identified as a test', () => {
});

/**
 * This is a regular JavaScript function, which will not be identified
 * as a test by Jest.
 */
function thisFunctionIsNotIdentifiedAsATest() {
}