import { act, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import {
  BrowserRouter,
  MemoryRouter,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import Details from '../../components/Details/Details';
import Card from '../../components/Card/Card';
import { renderWithProviders } from '../../utils/testWrapper';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

const gif = {
  analytics: {
    onload: { url: '' },
    onclick: { url: '' },
    onsent: { url: '' },
  },
  analytics_response_payload: '',
  bitly_gif_url: '',
  bitly_url: '',
  content_url: '',
  embed_url: '',
  id: '132',
  images: {
    downsized: {
      url: '',
      size: 0,
      width: '',
      height: '',
    },
    original_still: {
      url: '',
      width: '',
      height: '',
    },
    preview: {
      mp4: '',
      mp4_size: 0,
      width: '',
      height: '',
    },
    preview_gif: {
      url: '123',
      size: 0,
      width: '',
      height: '',
    },
  },
  import_datetime: '',
  is_sticker: '',
  rating: '',
  slug: '',
  source: '',
  source_post_url: '',
  source_tld: '',
  title: 'Gif',
  trending_datetime: '',
  type: '',
  user: null,
  username: '',
};

export const handlers = [
  http.get('https://api.giphy.com/v1/gifs/132', ({}) => {
    return HttpResponse.json({ data: gif });
  }),
];

describe('Card tests', () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  test('Card render', () => {
    const card = renderWithProviders(
      <BrowserRouter>
        <Card item={gif} />
      </BrowserRouter>
    );
    expect(card).toBeTruthy();
  });

  test('Opening details', async () => {
    await act(async () =>
      renderWithProviders(
        <MemoryRouter initialEntries={['/page/1']}>
          <Routes>
            <Route
              path="page/:page"
              element={
                <div>
                  <Card item={gif} />
                  <Outlet />
                </div>
              }
            >
              <Route path="details/:id" element={<Details />} />
            </Route>
          </Routes>
        </MemoryRouter>
      )
    );
    const card = screen.getByTestId('card');
    await userEvent.click(card);
    expect(await screen.findByText('Gif')).toBeTruthy();
  });
});
