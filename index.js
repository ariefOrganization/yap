const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/company.db',(err)=>{
    if(err) console.log(err)
    else console.log('Connect sukses')
});

function ONETOMANY(cb){
    db.all(`SELECT Projects.* , Managers.name AS name_manager FROM Projects LEFT JOIN Managers ON Projects.managerId = Managers.id`,(err, data)=>{
        if(!err){
            cb(null,data)
        }else{
            cb(err,null)
        }
    })
}

function MANYTOMANY(){
    var employeeProjects = new Promise((resolve,reject)=>{
        db.all(`SELECT Employees.*, Projects.* 
        FROM EmployeeProjects 
        JOIN Employees ON EmployeeProjects.employeeId = Employees.id 
        JOIN Projects ON EmployeeProjects.projectId = Projects.id`,(err, data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })
    })
    //dsasdasdsad
    return Promise.all([employeeProjects]).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
}
ONETOMANY((err,data)=>{
    if(!err){
        console.log(data)
    }else{
        console.log(err)
    }
})

MANYTOMANY()
