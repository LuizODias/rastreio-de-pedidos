import Hapi from '@hapi/hapi'
import routes from './routes'
import map from 'lodash/map'

const server = new Hapi.server({
  port: 7000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
      headers: ['content-type', 'accept-language'],
      additionalHeaders: ['accept', 'authorization', 'content-type', 'tenant'],
    },
  },
})

const init = async () => {
  map(routes, route => server.route(route))

  await server.start()

  console.log(`[stub] server running at: ${server.info.uri}`)
}

init()
