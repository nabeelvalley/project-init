#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const copyDir = require('./utils/copyDir')

const main = async () => {
  const choices = fs.readdirSync(path.join(__dirname, 'templates'))

  const { template, project } = await inquirer.prompt([
    {
      name: 'template',
      type: 'list',
      message: 'Select a template:',
      choices,
    },
    {
      name: 'project',
      type: 'input',
      message: 'Project Name/Directory:',
    },
  ])

  if (typeof template === 'undefined' || typeof project === 'undefined') {
    console.error('You must select a template and project name')
    console.info(`To view help use the '--help' or '-h' flag`)

    process.exit(1)
  }

  const inPath = path.join(__dirname, 'templates', template)
  const outPath = path.join(process.cwd(), project)

  if (fs.existsSync(outPath)) {
    console.error(
      `Directory ${outPath} already exists, please pick a different project name`
    )
    process.exit(1)
  }

  copyDir(inPath, outPath)
}

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(
    `Starter Tempaltes Help Menu

The application will do the following when running 'project-init'

- Will create a new directory with the project name
- Copy files from the selected template to the created directory

To view the help menu run this application with the '--help' or '-h' flags

To use the application just use 'project-init'
`
  )
} else {
  main()
}
