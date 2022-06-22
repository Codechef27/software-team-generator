
function generateTeamCards(softwareTeam) {

    const generateManager = (manager) => {
        return `
        <div class="row card col-4">
        <div class="card-header bg-info text-light">
            <div>
            <h2 class="card-title">${manager.getName()}</h2>
             <div class="d-flex flex-row text-light "><img src="./images/man.svg">
                <h2 class="card-title ps-3">${manager.getRole()}</h2>
              </div>
            </div>
        </div>
        <div class="card-body">
            <h4 class="list-group-item">Employee ID: ${manager.getId()}</h4>
            <h4 class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h4>
            <h4 class="list-group-item">Office Number: ${manager.getOfficeNumber()}</h4>
        </div>
        </div>
        `
    

    };

    const generateEngineer = (engineer) => {
        return `
        <div class="row card col-4">
        <div class="card-header bg-info text-light">
            <div>
            <h2 class="card-title">${engineer.getName()}</h2>
            <div class="d-flex flex-row text-light engine"><img src="./images/engineer.svg">
                <h2 class="card-title ps-3 pt-2">${engineer.getRole()}</h2>
              </div>
            </div>
        </div>
        <div class="card-body">
            <h4 class="list-group-item">Employee ID: ${engineer.getId()}</h4>
            <h4 class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h4>
            <h4 class="list-group-item">Github: ${engineer.getGithub()}</h4>
        </div>
        </div>
        `
    

    };

    const generateIntern = (intern) => {
        return `
        <div class="row card col-4">
        <div class="card-header bg-info text-light">
            <div>
            <h2 class="card-title">${intern.getName()}</h2>
             <div class="d-flex flex-row text-light intern"><img src="./images/intern.svg">
                <h2 class="card-title ps-3">${intern.getRole()}</h2>
              </div>
            </div>
        </div>
        <div class="card-body">
            <h4 class="list-group-item">Employee ID: ${intern.getId()}</h4>
            <h4 class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h4>
            <h4 class="list-group-item">College: ${intern.getCollege()}</h4>
        </div>
        </div>
        `
    

    };
    const data =[];
    data.push(softwareTeam.filter(employee => employee.getRole() == "Manager").map(manager => generateManager(manager)));
    data.push(softwareTeam.filter(employee => employee.getRole() == "Engineer").map(engineer => generateEngineer(engineer)));
    data.push(softwareTeam.filter(employee => employee.getRole() == "Intern").map(intern => generateIntern(intern))); 
    return data.flat().join('');  
};


module.exports = generateHtml => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Software Development Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
           integrity="sha256-YvdLHPgkqJ8DVUxjjnGVlMMJtNimJ6dYkowFFvp4kKs=" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-4 jumbotron bg-danger">
                    <h1 class="text-center text-light mb-5 mt-5 ">Software Team</h1>
                </div>
            </div>
        </div>
        
        <div class="container">${generateTeamCards(generateHtml)}
            
        </div>
    </body>
    </html>
    `
};


