const Employee = require('../lib/Employee');


test('creates employee object', () => {
    const emp = new Employee('Brad', 'employee id', 'execchef27@hotmail.com');

    expect(emp.name).toBe('Brad');
    expect(emp.id).toBe('employee id');
    expect(emp.email).toBe('execchef27@hotmail.com');
});