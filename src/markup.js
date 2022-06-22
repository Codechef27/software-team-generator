
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

   
    
    const data =[];
    data.push(softwareTeam.filter(employee => employee.getRole() == "Manager").map(manager => generateManager(manager))); 
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


