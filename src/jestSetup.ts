import '@testing-library/jest-dom';
import { http } from 'msw';
import { setupServer } from 'msw/node';
import dummyPokemon from 'src/tests/dummyPokemon';

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/*', (_req, res, ctx) => {
    return res(ctx.json(dummyPokemon));
  }),
];

export const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
