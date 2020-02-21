const fs = require('fs')
const prompt = require('inquirer').createPromptModule()
const path = require('path')

const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')



async function createTeam() {
  let employeeList = []
  let employeeInput = {}
  try {

    employeeInput = await prompt(
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
      ]
    )
      switch (employeeInput.type) {
        case 'Manager':
          employeeList.push(new Manager(employeeInput.name, employeeInput.id, employeeInput.email))
          break
        case 'Engeneer':
          employeeList.push(new Manager(employeeInput.name, employeeInput.id, employeeInput.email))
          break
        case 'Intern':
          employeeList.push(new Manager(employeeInput.name, employeeInput.id, employeeInput.email))
          break
      }
      console.log(employeeList)
      

      
    // console.log(employeeInput)

  } catch (e) {
    console.log.error(e)
  }
}



createTeam()


