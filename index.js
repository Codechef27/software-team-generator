// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML

// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username

// THEN that GitHub profile opens in a new tab
// WHEN I start the application

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option

// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option

// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team

// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer' );
// const employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generateHtml = require('./src/markup')
let softwareTeam = [];

const managerPrompt = (data) => {
    return inquirer.prompt([ 

        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name.",
            validate: name => {
                if (name) {
                    return true
                } else {
                    console.log('You must enter a name!');
                }
            }
        },

        {
            type: 'input',
            name: 'employee id',
            message: "Enter the team manager's employee id number.",
            validate: employeeId => {
                if (employeeId) {
                    return true
                } else {
                    console.log('You must enter a id number!');
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter the email address for the team manager.'
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number for the team manager.'
        }
    ])
    .then(data = () => {
        this.Manager = new Manager(data);
        softwareTeam.push(this.Manager);
        addOrFinished();
    })
};



const addOrFinished = () => {
    console.log(`
    =======================
       Add a Team Member
    =======================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            message: 'Are you adding a Engineer, a Intern or are you finished building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Finished!'],
            default: 'finished'
        }
    ])

    .then(data => {
        if (data.teamMember === 'Add Engineer') {
            addEngineer();
        } else if (data.teamMember === 'Add Intern') {
            addIntern();
        } else if ('finished') {
            generateTeam();
            // console.log('Your team page has been created!');
        }
    })

}


const addEngineer = (data) => {
    console.log(`
    =============
      Engineer
    =============  
    `)
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "Enter the Engineer's name.",
        },

        {
            type: 'input',
            name: 'employee id',
            message: "Enter the Engineer's employee id number."
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter the Engineer's email address."
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's Github username."
        }

    ])
    .then(data = () => {
        this.Engineer = new Engineer(data);
        softwareTeam.push(this.Engineer);
        addOrFinished();
    })
};

const addIntern = (data) => {
    console.log(`
    =============
       Intern
    =============  
    `)
    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "Enter the Intern's name.",
        },

        {
            type: 'input',
            name: 'employee id',
            message: "Enter the Intern's employee id number."
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter the Intern's email address."
        },
        {
            type: 'input',
            name: 'college',
            message: "Enter the college the intern is from."
        }
    ])

    .then(data = () => {
        this.Intern = new Intern(data);
        softwareTeam.push(this.Intern);
        addOrFinished();
    })

};

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            throw err
        } else console.log(" Your Software Team's page has been created");

    })
};

const generateTeam = () => {
    let HTMLContent = generateHtml(softwareTeam)
    writeFile('./dist/index.html', HTMLContent)
};


managerPrompt();
   



