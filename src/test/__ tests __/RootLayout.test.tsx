import { BrowserRouter } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import { renderWithProviders } from '../../utils/testWrapper';
import { http, delay, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

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
  title: '',
  trending_datetime: '',
  type: '',
  user: null,
  username: '',
};

export const handlers = [
  http.get('https://api.giphy.com/v1/gifs/trending', async () => {
    await delay(30);
    return HttpResponse.json({ data: [gif] });
  }),
];

describe('RootLayout tests', () => {
  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => server.close());

  test('Render RootLayout', async () => {
    const root = await act(async () => {
      return renderWithProviders(
        <BrowserRouter>
          <RootLayout />
        </BrowserRouter>
      );
    });

    expect(root).toBeTruthy();
  });

  test('Show loader', async () => {
    await act(async () => {
      return renderWithProviders(
        <BrowserRouter>
          <RootLayout />
        </BrowserRouter>
      );
    });

    const loader = screen.getByAltText('loader');
    expect(loader).toBeTruthy();
  });

  test('Data from query', async () => {
    const root = await act(async () => {
      return renderWithProviders(
        <BrowserRouter>
          <RootLayout />
        </BrowserRouter>
      );
    });

    expect(root).toBeTruthy();
    const list = await screen.findAllByAltText('card');
    expect(list.length).toBe(1);
  });
});
