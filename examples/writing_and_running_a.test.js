/**
 * Because this test uses the 'test' method,
 * Jest identifies it as a test.
 */
test('this function is identified as a test', () => {
});

/**
 * This method, too, uses the 'test' method,
 * and is therefore identified by Jest as a test.
 */
test('this function is also identified as a test', () => {
});

/**
 * This is a regular JavaScript method, which will not be identified
 * as a test by Jest.
 */
function thisFunctionIsNotIdentifiedAsATest() {
}