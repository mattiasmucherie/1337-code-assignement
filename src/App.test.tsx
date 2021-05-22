import React from 'react'
import { fireEvent, render, screen, waitForElementToBeRemoved, within } from '@testing-library/react'
import App from './App'
import { rest, server } from './setupTests'
import { mockResponse } from './mock/mockData'

test('renders three cards', async () => {
  render(<App />)
  const cards = await screen.findAllByTestId(/card-/i)
  expect(cards).toHaveLength(4)
})
test('render card info', async () => {
  render(<App />)
  const card = await screen.findByTestId(/card-grid-christopher-lebond/i)
  const picture = within(card).getByRole('img', {
    name: /portrait of christopher lebond/i,
  })
  const name = screen.getByRole('heading', {
    name: /christopher lebond/i,
  })

  const office = within(card).getByText(/office: Stockholm/i)
  const githubIcon = within(card).getByRole('img', {
    name: /github icon/i,
  })
  const linkedInIcon = within(card).getByRole('img', {
    name: /linkedin icon/i,
  })
  const twitterIcon = within(card).getByRole('img', {
    name: /twitter icon/i,
  })
  expect(picture).toBeInTheDocument()
  expect(name).toBeInTheDocument()
  expect(office).toBeInTheDocument()
  expect(githubIcon).toBeInTheDocument()
  expect(linkedInIcon).toBeInTheDocument()
  expect(twitterIcon).toBeInTheDocument()
})
test('sort cards by name', async () => {
  render(<App />)
  const cards = await screen.findAllByTestId(/card-grid/i)
  const firstName = within(cards[0]).getByText(mockResponse[1].name)
  const secondName = within(cards[1]).getByText(mockResponse[0].name)
  const thirdName = within(cards[2]).getByText(mockResponse[2].name)
  const fourthName = within(cards[3]).getByText(mockResponse[3].name)
  expect(firstName).toBeInTheDocument()
  expect(secondName).toBeInTheDocument()
  expect(thirdName).toBeInTheDocument()
  expect(fourthName).toBeInTheDocument()
})
test('sort cards by office', async () => {
  render(<App />)
  fireEvent.click(screen.getByLabelText(/office/i))
  const cardsOffice = await screen.findAllByTestId(/card-grid/i)
  const firstNameOffice = within(cardsOffice[0]).getByText(mockResponse[2].name)
  const secondNameOffice = within(cardsOffice[1]).getByText(mockResponse[3].name)
  const thirdNameOffice = within(cardsOffice[2]).getByText(mockResponse[0].name)
  const fourthNameOffice = within(cardsOffice[3]).getByText(mockResponse[1].name)
  expect(firstNameOffice).toBeInTheDocument()
  expect(secondNameOffice).toBeInTheDocument()
  expect(thirdNameOffice).toBeInTheDocument()
  expect(fourthNameOffice).toBeInTheDocument()
})
test('show list instead of grids', async () => {
  render(<App />)
  const cardsGrid = await screen.findAllByTestId(/card-grid/i)
  expect(cardsGrid).toHaveLength(4)
  fireEvent.click(screen.getByLabelText(/list/i))
  const cardsList = await screen.findAllByTestId(/card-list/i)
  expect(cardsList).toHaveLength(4)
})

test('filter on name', async () => {
  render(<App />)
  await screen.findAllByTestId(/card-/i)
  const input = screen.getByRole('textbox', {
    name: /filtering-input/i,
  })
  fireEvent.change(input, { target: { value: mockResponse[1].name } })
  await waitForElementToBeRemoved(() => screen.getByText(/Cristofer/i))
  const oneCard = await screen.findAllByTestId(/card-/i)
  expect(oneCard).toHaveLength(1)
})
test('filter on office', async () => {
  render(<App />)
  await screen.findAllByTestId(/card-/i)
  const input = screen.getByRole('textbox', {
    name: /filtering-input/i,
  })
  fireEvent.change(input, { target: { value: mockResponse[1].office } })
  await waitForElementToBeRemoved(() => screen.getByText(/Lund/i))
  const oneCard = await screen.findAllByTestId(/card-/i)
  expect(oneCard).toHaveLength(1)
})
test('fails to render cards and show error', async () => {
  server.use(
    rest.get('https://api-dev.1337co.de/v3/employees', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )
  render(<App />)
  const errorElement = await screen.findByText(/Error loading employees/i)
  expect(errorElement).toBeInTheDocument()
})
