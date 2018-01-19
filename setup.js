const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/company.db');

function createTable() {
  db.serialize(function() {
    let qCreateManager = `CREATE TABLE
                          IF NOT EXISTS Managers
                          (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name VARCHAR(100),
                            gender VARCHAR(12)
                          )`;
    db.run(qCreateManager, function(err) {
      if(!err) {
        console.log(`Managers created`);
      } else {
        console.log(`Error when create Manager: ${err}`);
      }
    })

    let qCreateProject = `CREATE TABLE
                          IF NOT EXISTS Projects
                          (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name_of_project VARCHAR(100),
                            durasi INTEGER,
                            managerId INTEGER,
                            FOREIGN KEY (managerId) REFERENCES Managers (id)
                          )
                         `;

   db.run(qCreateProject, function(err) {
     if(!err) {
       console.log(`Projects created`);
     } else {
       console.log(`Error when create Projects: ${err}`);
     }
   })

   let qCreateEmployee = `CREATE TABLE
                         IF NOT EXISTS Employees
                         (
                           id INTEGER PRIMARY KEY AUTOINCREMENT,
                           first_name VARCHAR(50),
                           last_name VARCHAR(50),
                           gender VARCHAR(12),
                           status VARCHAR(25)
                         )`;
   db.run(qCreateEmployee, function(err) {
     if(!err) {
       console.log(`Employees created`);
     } else {
       console.log(`Error when create Employees: ${err}`);
     }
   })

   let qCreateEmployeeProject = `CREATE TABLE
                                 IF NOT EXISTS EmployeeProjects
                                 (
                                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                                   employeeId INTEGER,
                                   projectId INTEGER
                                 )
                                `
    db.run(qCreateEmployeeProject, function(err) {
      if(!err) {
        console.log(`Conjunction created`);
      } else {
        console.log(`Error when create Conjuction: ${err}`);
      }
    })
  })
}

function seeders() {
  db.serialize(function() {
    let qInsertManagers = `INSERT INTO Managers (name, gender)
                           VALUES
                              ('Agung Pangestu', 'male'),
                              ('Aang Wijaya', 'male'),
                              ('Ayunda Hamzah', 'female'),
                              ('Anang Reza', 'male'),
                              ('Ahmad Syahab', 'male'),
                              ('Ahmad Nasikin', 'male'),
                              ('Alang Mahendra', 'male'),
                              ('Fabio Kaunang', 'male'),
                              ('Febriliando Sinaga', 'male'),
                              ('Ferdi Tok', 'male'),
                              ('Ida Bagus Angga', 'male'),
                              ('Rizki N Putra', 'male'),
                              ('Yofriadi Yahya', 'male'),
                              ('Yulian Prasetia', 'male')
                          `;
    db.run(qInsertManagers, function(err) {
      if(!err) {
        console.log(`Managers seed created`);
      } else {
        console.log(`Error when Seed Managers: ${err}`);
      }
    })


    let qInsertEmployees = `INSERT INTO Employees (first_name, last_name, gender, status)
                           VALUES
                              ('Chandra', 'Budiman', 'male', 'kontrak'),
                              ('Dhani', 'Luthfi', 'male', 'tetap'),
                              ('Eko', 'Santoso', 'male', 'kontrak'),
                              ('Anang', 'Reza', 'male', 'outsource'),
                              ('Haniiful', 'Wahib', 'male', 'tetap'),
                              ('Heraldo', 'Yusron', 'male', 'outsource'),
                              ('Julius', 'Ade', 'male', 'outsource'),
                              ('Luthfi', 'Tok', 'male', 'tetap'),
                              ('Andrey', 'Amrulloh', 'male', 'outsource'),
                              ('Fajar', 'Patappari', 'male', 'tetap'),
                              ('Fuadi', 'Naqi', 'male', 'kontrak'),
                              ('Aldi', 'Wijaya', 'male', 'outsource'),
                              ('Tobias', 'Kusnaman', 'male', 'outsource'),
                              ('Zaki', 'Elyasa', 'male', 'outsource'),
                              ('Arief', 'Trimanda', 'male', 'tetap')
                          `;
    db.run(qInsertEmployees, function(err) {
      if(!err) {
        console.log(`Employees seed created`);
      } else {
        console.log(`Error when Seed Employees: ${err}`);
      }
    })

    let qInsertProjects = `INSERT INTO Projects (name_of_project, durasi, managerId)
                           VALUES
                              ('Project Jalan Tol Online', 45, 5),
                              ('Pendaftaran Antrian Pajak', 28, 5),
                              ('Generate Soal Live Code', 23, 6),
                              ('Search Engine Logic Livecode', 50, 2),
                              ('Belajar Online', 53, 1),
                              ('Pengisian Sistem Pegawai', 10, 4),
                              ('CLI Sequelize 4', 59, 5),
                              ('Applikasi Absensi', 29, 8),
                              ('Applikasi Sumbangan Like', 30, 5)
                          `;
    db.run(qInsertProjects, function(err) {
      if(!err) {
        console.log(`Projects seed created`);
      } else {
        console.log(`Error when Seed Projects: ${err}`);
      }
    })


    let qInsertEmployeeProjects = `INSERT INTO EmployeeProjects (employeeId, projectId)
                           VALUES
                              (1,3),
                              (1,5),
                              (5,3),
                              (3,2),
                              (2,1),
                              (5,4),
                              (6,6),
                              (13,3),
                              (2,8),
                              (9,7),
                              (12,1),
                              (10,4),
                              (3,6),
                              (9,3),
                              (2,7),
                              (15,2)
                          `;
    db.run(qInsertEmployeeProjects, function(err) {
      if(!err) {
        console.log(`Employee Projects seed created`);
      } else {
        console.log(`Error when Seed Employee Projects: ${err}`);
      }
    })
  })


}

createTable();
seeders();
