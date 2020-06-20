const sum = (a: number, b: number): number => a + b

it('adds two numbers', () => {
    const newSum = sum(2, 3)
    expect(newSum).toBe(5)
})
