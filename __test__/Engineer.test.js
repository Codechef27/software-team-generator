const Engineer = require('../lib/Engineer');

test('creates a new Engineer', () => {
    const emp = new Engineer('Brad', 'employee id', 'execchef27@hotmail.com', 'git@github');

    expect(emp.name).toBe('Brad');
    expect(emp.id).toBe('employee id');
    expect(emp.email).toBe('execchef27@hotmail.com');
    expect(emp.github).toBe('git@github');
}); 