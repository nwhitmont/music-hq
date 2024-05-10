const util = require('util')
const exec = util.promisify(require('child_process').exec)
const {
  color,
  log,
  red,
  green,
  cyan,
  cyanBright,
} = require('console-log-colors')
const figlet = require('figlet')

async function isServiceRunning(serviceName) {
  try {
    const { stdout: composeId } = await exec(
      `docker-compose ps -q ${serviceName}`
    )
    const { stdout: runningIds } = await exec('docker ps -q --no-trunc')

    if (composeId && runningIds.includes(composeId.trim())) {
      console.log(cyanBright(`Postgres database is running 🚀`))
      figlet.text(
        'DATABASE ONLINE',
        {
          font: 'Graceful',
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 100,
          whitespaceBreak: true,
        },
        (error, data) => {
          if (error) {
            console.log('Figlet: something went wrong...')
            console.dir(error)
            return
          }
          console.log(data)
        }
      )
      return true
    } else {
      console.log(`Service: '${serviceName}' is not running`)
      return false
    }
  } catch (error) {
    console.error(`Error checking service '${serviceName}':`, error.message)
    return false // Assume not running on error
  }
}

const serviceName = 'postgres'
isServiceRunning(serviceName).then((isRunning) => {
  if (isRunning) {
    console.info(`Run 'nx api.start' to initialize the Nest.js API Server`)
  } else {
    console.info(`Run 'nx db.start' to initialize the API PostgeSQL Container`)
  }
})
