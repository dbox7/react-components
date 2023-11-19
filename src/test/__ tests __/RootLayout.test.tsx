import { render, screen } from '@testing-library/react';
import { IGif } from '../../utils/types';
import { Dispatch, SetStateAction } from 'react';
import { act } from 'react-dom/test-utils';

import { BrowserRouter } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import { Provider } from 'react-redux';
import { store } from '../../store/Store';

jest.mock('../../utils/api', () => {
  return {
    useGetAllGifsQuery: jest.fn(() =>
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
    useGetGifByIdQuery: jest.fn(() =>
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
  test('Render RootLayout', async () => {
    const root = await act(async () => {
      return render(
        <BrowserRouter>
          <Provider store={store}>
            <RootLayout />
          </Provider>
        </BrowserRouter>
      );
    });

    expect(root).toBeTruthy();
  });

  //   test('Show loader', async () => {
  //     render(
  //       <BrowserRouter>
  //         <Provider store={store}>
  //           <RootLayout />
  //         </ContextProvider>
  //       </BrowserRouter>
  //     );

  //     const loader = screen.getByAltText('loader');
  //     expect(loader).toBeTruthy();

  //     const list = await screen.findAllByAltText('card');
  //     expect(list.length).toBe(1);
  //   });

  //   test('Data from query', async () => {
  //     const value: IContext = {
  //       query: 'cat',
  //       setQuery: () => {},
  //       gifs: [],
  //       setGifs: jest.fn((arr: IGif[]) => (value.gifs = arr)) as Dispatch<
  //         SetStateAction<IGif[]>
  //       >,
  //       limit: 0,
  //       setLimit: () => {},
  //     };

  //     render(
  //       <BrowserRouter>
  //         <Provider store={value}>
  //           <RootLayout />
  //         </Provider>
  //       </BrowserRouter>
  //     );

  //     const list = await screen.findAllByAltText('card');
  //     expect(list.length).toBe(2);
  //   });
});
