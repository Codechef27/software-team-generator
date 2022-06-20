const Intern = require('../lib/Intern');

test('creates a new Intern', () => {
    const emp = new Intern('Brad', 'employee id', 'execchef27@hotmail.com', 'UCF');

    expect(emp.name).toBe('Brad');
    expect(emp.id).toBe('employee id');
    expect(emp.email).toBe('execchef27@hotmail.com');
    expect(emp.college).toBe('UCF');
}); 