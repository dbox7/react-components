import { act, render, screen } from '@testing-library/react';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import { BrowserRouter } from 'react-router-dom';
import { IGif } from '../../types';
import ContextProvider, {
  IContext,
  MyContext,
} from '../../components/ContextProvider/Context';
import { Dispatch, SetStateAction } from 'react';

jest.mock('../../api', () => {
  return {
    getAllGifs: jest.fn(() =>
      Promise.resolve({
        data: [
          {
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
          },
        ],
      })
    ),
    getGifsByQuery: jest.fn(() =>
      Promise.resolve({
        data: [
          {
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
          },
          {
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
          },
        ],
      })
    ),
  };
});

describe('RootLayout tests', () => {
  test('Render the RootLayout', async () => {
    const root = act(() => {
      render(
        <BrowserRouter>
          <ContextProvider>
            <RootLayout />
          </ContextProvider>
        </BrowserRouter>
      );
    });

    expect(root).toBeTruthy();
  });

  test('Show loader', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <ContextProvider>
            <RootLayout />
          </ContextProvider>
        </BrowserRouter>
      );
    });

    const loader = screen.findByAltText('loader');
    expect(loader).toBeTruthy();

    const list = await screen.findAllByAltText('card');
    expect(list.length).toBe(1);
  });

  test('Data from query', async () => {
    const value: IContext = {
      query: 'cat',
      setQuery: () => {},
      gifs: [],
      setGifs: jest.fn((arr: IGif[]) => (value.gifs = arr)) as Dispatch<
        SetStateAction<IGif[]>
      >,
      limit: 0,
      setLimit: () => {},
    };

    act(() => {
      render(
        <BrowserRouter>
          <MyContext.Provider value={value}>
            <RootLayout />
          </MyContext.Provider>
        </BrowserRouter>
      );
    });

    const list = await screen.findAllByAltText('card');
    expect(list.length).toBe(2);
  });
});
