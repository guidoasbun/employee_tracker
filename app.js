const fs = require('fs')
const prompt = require('inquirer').createPromptModule()
const path = require('path')

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

async function createTeam(){

  let employeeList = []
  let employee = {}
  let employeeInput = ''
  let extraIntup = ''
  let more = ''
  try {
    do {
    let employeeInput = await prompt(
      [
        {
          type: 'list',
          name: 'employeeType',
          message: 'Employee type:',
          choices: ['Manager', 'Engineer', 'Intern']
        },
        {
          type: 'input',
          name: 'name',
          message: 'Employee name:'
        },
        {
          type: 'number',
          name: 'id',
          message: 'Employee ID:'
        },
        {
          type: 'input',
          name: 'email',
          message: 'Employee Email:'
        }
      ])
      employee.type = employeeInput.employeeType
      employee.name = employeeInput.name
      employee.id = employeeInput.id
      employee.email = employeeInput.email

      switch (employee.type) {
        case 'Manager':
          extraInput = await prompt(
            {
              type: 'input',
              name: 'roomNumber',
              message: 'Enter room number:'
            }
          )
          employee.roomNumber = extraInput.roomNumber
          employeeList.push(new Manager(employee.name, employee.id, employee.email, employee.roomNumber))
          break
        case 'Engineer':
          extraInput = await prompt(
            {
              type: 'input',
              name: 'gitHub',
              message: 'Enter GIT-hub:'
            }
          )
          employee.gitHub = extraInput.gitHub
          employeeList.push(new Engineer(employee.name, employee.id, employee.email, employee.gitHub))
          break
        case 'Intern':
          extraInput = await prompt(
            {
              type: 'input',
              name: 'school',
              message: 'Enter School:'
            }
          )
          employee.school = extraInput.school
          employeeList.push(new Intern(employee.name, employee.id, employee.email, employee.school))
          break
          
      }
      more = await prompt(
      {
        type: 'confirm',
        name: 'more',
        message: 'Any more employees?'
      })
    }while (more.more)
    console.log(employeeList)


    

  } catch (e){ console.error(e)}
}

createTeam()


