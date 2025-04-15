// src/__tests__/app.int.test.jsx
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../app'

test('Parcours complet - étapes 1 à 32', async () => {
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

  // 9 - L'utilisateur remplit le champ avec "Les pâtes"
  userEvent.type(foodInput, 'Les pâtes')
  expect(foodInput.value).toBe('Les pâtes')

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

  // 22 - Un texte label "favorite food" a pour contenu "Les pâtes"
  expect(screen.getByText(/Les pâtes/i)).toBeInTheDocument()

  // 23 - Un texte label "favorite drink" a pour contenu "Bière"
  expect(screen.getByText(/Bière/i)).toBeInTheDocument()

  // 24 - Un lien "Go back" est dans le document
  expect(screen.getByRole('link', {name: /Go back/i})).toBeInTheDocument()

  // 25 - Un bouton "Confirm" est dans le document
  const confirmButton = screen.getByRole('button', {name: /Confirm/i})
  expect(confirmButton).toBeInTheDocument()

  // 26 - L'utilisateur clique sur le bouton "Confirm"
  userEvent.click(confirmButton)

  // 27 - L'utilisateur est redirigé sur la page de Félicitation
  expect(
    await screen.findByRole('heading', {name: /Congrats\. You did it\./i}),
  ).toBeInTheDocument()

  // 28 - Un titre "Congrats.You did it." est dans le document
  expect(screen.getByText(/Congrats\. You did it\./i)).toBeInTheDocument()

  // 29 - Un lien "Go home" est dans le document (sur la page de Félicitation)
  const goHomeLink = screen.getByRole('link', {name: /Go home/i})
  expect(goHomeLink).toBeInTheDocument()

  // 30 - L'utilisateur clique sur le lien "Go Home"
  userEvent.click(goHomeLink)

  // 31 - L'utilisateur est redirigé sur la home
  expect(await screen.findByText(/Welcome home/i)).toBeInTheDocument()

  // 32 - Un titre "Welcome home" est dans le document
  expect(screen.getByText(/Welcome home/i)).toBeInTheDocument()
})
