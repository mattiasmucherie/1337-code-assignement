import '@testing-library/jest-dom'
import 'whatwg-fetch'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

import { mockResponse } from './mock/mockData'

const server = setupServer(
  rest.get('https://api-dev.1337co.de/v3/employees', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse))
  }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Add request handler for  ${req.url.toString()}`)
    return res(ctx.status(404), ctx.json({ error: 'Please add request handler' }))
  })
)
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

export { server, rest }
