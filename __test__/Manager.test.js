const Manager = require('../lib/Manager');

test('creates a new Manager', () => {
    const emp = new Manager('Brad', 'employee id', 'execchef27@hotmail.com', '100');

    expect(emp.name).toBe('Brad');
    expect(emp.id).toBe('employee id');
    expect(emp.email).toBe('execchef27@hotmail.com');
    expect(emp.officeNumber).toBe('100');
}); 