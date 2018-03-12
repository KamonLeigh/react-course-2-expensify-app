const add = (a, b) => {
    return a + b;
}

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!!`

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});

test('should return string with name', () => {
    const result = generateGreeting('Byron');

    expect(result).toBe(`Hello Byron!!`);
});

test('should generate greeting with no name', () => {
    const result =  generateGreeting();
    expect(generateGreeting()).toBe(`Hello Anonymous!!`);
})