import { request as _request } from 'http'

function checkApiServerStatus(host, port, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const request = _request({ host, port, method: 'HEAD' }, (response) => {
      resolve(response.statusCode === 200)
    })

    request.on('error', (error) => {
      reject(error)
    })

    request.setTimeout(timeout, () => {
      reject(new Error('Request timed out'))
    })

    request.end()
  })
}

// Usage example:
checkApiServerStatus('localhost', 3001)
  .then((isOnline) => {
    console.log(
      `API Server at localhost:3001 is ${isOnline ? 'online' : 'offline'}`
    )
  })
  .catch((error) => {
    console.error(`Error checking Nest API server status: ${error.message}`)
  })
