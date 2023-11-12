import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Card from '../../components/Card/Card';
import {
  BrowserRouter,
  MemoryRouter,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Details from '../../components/Details/Details';
import ContextProvider from '../../components/ContextProvider/Context';
import { getGifById } from '../../api';

jest.mock('../../api', () => {
  return {
    getGifById: jest.fn(() =>
      Promise.resolve({
        data: {
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
              url: '123',
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
        },
      })
    ),
  };
});

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

describe('Card tests', () => {
  test('Card render', () => {
    const card = render(
      <BrowserRouter>
        <ContextProvider>
          <Card item={gif} />
        </ContextProvider>
      </BrowserRouter>
    );
    expect(card).toBeTruthy();
  });

  test('Opening details', async () => {
    render(
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
    );
    await userEvent.click(screen.getByTestId('card'));
    expect(screen.findByText('rating')).toBeTruthy();
  });

  test('Trigger api call', async () => {
    render(
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
    );
    await userEvent.click(screen.getByTestId('card'));
    expect(getGifById).toHaveBeenCalled();
  });
});
