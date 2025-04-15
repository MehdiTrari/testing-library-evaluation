// src/__tests__/app.error.int.test.jsx
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../app'

test('Cas non passant - étapes 1 à 34', async () => {
  // 1 - L'utilisateur est sur la Home
  render(<App />)

  // 2 - Un titre "Welcome home" est dans le document
  expect(screen.getByText(/Welcome home/i)).toBeInTheDocument()

  // 3 - Un lien "Fill out the form" est dans le document
  const fillFormLink = screen.getByRole('link', {name: /Fill out the form/i})
  expect(fillFormLink).toBeInTheDocument()

  // 4 - L'utilisateur clique sur le lien
  userEvent.click(fillFormLink)

  // 5 - L'utilisateur est redirigé sur la page 1
  expect(await screen.findByText(/Page 1/i)).toBeInTheDocument()

  // 6 - Un titre "Page 1" est dans le document
  expect(screen.getByRole('heading', {name: /Page 1/i})).toBeInTheDocument()

  // 7 - Un lien "Go home" est dans le document
  expect(screen.getByRole('link', {name: /Go home/i})).toBeInTheDocument()

  // 8 - Un champ avec le label "Favorite food" est dans le document
  const foodInput = screen.getByLabelText(/Favorite food/i)
  expect(foodInput).toBeInTheDocument()

  // 9 - L'utilisateur remplit le champ avec "" (vide)
  userEvent.clear(foodInput)
  expect(foodInput.value).toBe('')

  // 10 - Un lien "Next" est dans le document
  const nextLink = screen.getByRole('link', {name: /Next/i})
  expect(nextLink).toBeInTheDocument()

  // 11 - L'utilisateur clique sur le lien "Next"
  userEvent.click(nextLink)

  // 12 - L'utilisateur est redirigé sur la page 2
  expect(await screen.findByText(/Page 2/i)).toBeInTheDocument()

  // 13 - Un titre "Page 2" est dans le document
  expect(screen.getByRole('heading', {name: /Page 2/i})).toBeInTheDocument()

  // 14 - Un lien "Go back" est dans le document
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // 15 - Un champ avec le label "Favorite drink" est dans le document
  const drinkInput = screen.getByLabelText(/Favorite drink/i)
  expect(drinkInput).toBeInTheDocument()

  // 16 - L'utilisateur remplit le champ avec "Bière"
  userEvent.type(drinkInput, 'Bière')
  expect(drinkInput.value).toBe('Bière')

  // 17 - Un lien "Review" est dans le document
  const reviewLink = screen.getByRole('link', {name: /Review/i})
  expect(reviewLink).toBeInTheDocument()

  // 18 - L'utilisateur clique sur le lien "Review"
  userEvent.click(reviewLink)

  // 19 - L'utilisateur est redirigé sur la page de confirmation
  expect(
    await screen.findByRole('heading', {name: /Confirm/i}),
  ).toBeInTheDocument()

  // 20 - Un titre "Confirm" est dans le document
  expect(screen.getByRole('heading', {name: /Confirm/i})).toBeInTheDocument()

  // 21 - Un texte "Please confirm your choices" est dans le document
  expect(screen.getByText(/Please confirm your choices/i)).toBeInTheDocument()

  // 22 - Un texte label "favorite food" a pour contenu ""
  const foodSpan = screen.getByText(
    (content, element) =>
      element.tagName.toLowerCase() === 'span' &&
      element.getAttribute('aria-labelledby') === 'food-label',
  )
  expect(foodSpan.textContent).toBe('')

  // 23 - Un texte label "favorite drink" a pour contenu "Bière"
  const drinkSpan = screen.getByText(
    (content, element) =>
      element.tagName.toLowerCase() === 'span' &&
      element.getAttribute('aria-labelledby') === 'drink-label',
  )
  expect(drinkSpan.textContent).toBe('Bière')

  // 24 - Un lien "Go back" est dans le document
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // 25 - Un bouton "Confirm" est dans le document
  const confirmButton = screen.getByRole('button', {name: /Confirm/i})
  expect(confirmButton).toBeInTheDocument()

  // 26 - L'utilisateur clique sur le bouton "Confirm"
  userEvent.click(confirmButton)

  // 27 - L'utilisateur est redirigé sur la page d'erreur
  expect(
    await screen.findByText(/Oh no. There was an error\./i),
  ).toBeInTheDocument()

  // 28 - Un texte "Oh no. There was an error." est dans le document
  expect(screen.getByText(/Oh no. There was an error\./i)).toBeInTheDocument()

  // 29 - Un texte "les champs food et drink sont obligatoires" est dans le document
  expect(
    screen.getByText(/les champs food et drink sont obligatoires/i),
  ).toBeInTheDocument()

  // 30 - Un lien "Go home" est dans le document
  expect(screen.getByRole('link', {name: /Go home/i})).toBeInTheDocument()

  // 31 - Un lien "Try again" est dans le document
  const tryAgainLink = screen.getByRole('link', {name: /Try again/i})
  expect(tryAgainLink).toBeInTheDocument()

  // 32 - L'utilisateur clique sur le lien "Try again"
  userEvent.click(tryAgainLink)

  // 33 - L'utilisateur est redirigé sur la page 1
  expect(await screen.findByText(/Page 1/i)).toBeInTheDocument()

  // 34 - Un titre "Page 1" est dans le document
  expect(screen.getByRole('heading', {name: /Page 1/i})).toBeInTheDocument()
})
