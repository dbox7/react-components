import { render, screen } from '@testing-library/react';
import { IGif } from '../../utils/types';
import ContextProvider, {
  IContext,
  MyContext,
} from '../../components/ContextProvider/Context';
import { Dispatch, SetStateAction } from 'react';
import { act } from 'react-dom/test-utils';

import { BrowserRouter } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout/RootLayout';
import { renderWithProviders } from '../../utils/testWrapper';
// import { http, delay, HttpResponse } from 'msw';
// import { setupServer } from 'msw/lib/node';

// jest.mock('../../store/api', () => {
//   return {
//     getAllGifs: jest.fn(() =>
//       Promise.resolve({
//         data: [
//           {
//             analytics: {
//               onload: { url: '' },
//               onclick: { url: '' },
//               onsent: { url: '' },
//             },
//             analytics_response_payload: '',
//             bitly_gif_url: '',
//             bitly_url: '',
//             content_url: '',
//             embed_url: '',
//             id: '132',
//             images: {
//               downsized: {
//                 url: '',
//                 size: 0,
//                 width: '',
//                 height: '',
//               },
//               original_still: {
//                 url: '',
//                 width: '',
//                 height: '',
//               },
//               preview: {
//                 mp4: '',
//                 mp4_size: 0,
//                 width: '',
//                 height: '',
//               },
//               preview_gif: {
//                 url: '123',
//                 size: 0,
//                 width: '',
//                 height: '',
//               },
//             },
//             import_datetime: '',
//             is_sticker: '',
//             rating: '',
//             slug: '',
//             source: '',
//             source_post_url: '',
//             source_tld: '',
//             title: '',
//             trending_datetime: '',
//             type: '',
//             user: null,
//             username: '',
//           },
//         ],
//       })
//     ),
//     getGifsByQuery: jest.fn(() =>
//       Promise.resolve({
//         data: [
//           {
//             analytics: {
//               onload: { url: '' },
//               onclick: { url: '' },
//               onsent: { url: '' },
//             },
//             analytics_response_payload: '',
//             bitly_gif_url: '',
//             bitly_url: '',
//             content_url: '',
//             embed_url: '',
//             id: '132',
//             images: {
//               downsized: {
//                 url: '',
//                 size: 0,
//                 width: '',
//                 height: '',
//               },
//               original_still: {
//                 url: '',
//                 width: '',
//                 height: '',
//               },
//               preview: {
//                 mp4: '',
//                 mp4_size: 0,
//                 width: '',
//                 height: '',
//               },
//               preview_gif: {
//                 url: '123',
//                 size: 0,
//                 width: '',
//                 height: '',
//               },
//             },
//             import_datetime: '',
//             is_sticker: '',
//             rating: '',
//             slug: '',
//             source: '',
//             source_post_url: '',
//             source_tld: '',
//             title: '',
//             trending_datetime: '',
//             type: '',
//             user: null,
//             username: '',
//           },
//           {
//             analytics: {
//               onload: { url: '' },
//               onclick: { url: '' },
//               onsent: { url: '' },
//             },
//             analytics_response_payload: '',
//             bitly_gif_url: '',
//             bitly_url: '',
//             content_url: '',
//             embed_url: '',
//             id: '132',
//             images: {
//               downsized: {
//                 url: '',
//                 size: 0,
//                 width: '',
//                 height: '',
//               },
//               original_still: {
//                 url: '',
//                 width: '',
//                 height: '',
//               },
//               preview: {
//                 mp4: '',
//                 mp4_size: 0,
//                 width: '',
//                 height: '',
//               },
//               preview_gif: {
//                 url: '123',
//                 size: 0,
//                 width: '',
//                 height: '',
//               },
//             },
//             import_datetime: '',
//             is_sticker: '',
//             rating: '',
//             slug: '',
//             source: '',
//             source_post_url: '',
//             source_tld: '',
//             title: '',
//             trending_datetime: '',
//             type: '',
//             user: null,
//             username: '',
//           },
//         ],
//       })
//     ),
//   };
// });

// export const handlers = [
//   http.get('/api/user', async () => {
//     await delay(150);
//     return HttpResponse.json('John Smith');
//   }),
// ];

// const server = setupServer(...handlers);

// // Enable API mocking before tests.
// beforeAll(() => server.listen());

// // Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// // Disable API mocking after the tests are done.
// afterAll(() => server.close());

describe('RootLayout tests', () => {
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

  // test('Show loader', async () => {
  //   renderWithProviders(
  //     <BrowserRouter>
  //       <RootLayout />
  //     </BrowserRouter>
  //   );

  //   const loader = screen.getByAltText('loader');
  //   expect(loader).toBeTruthy();

  //   const list = await screen.findAllByAltText('card');
  //   expect(list.length).toBe(1);
  // });

  // test('Data from query', async () => {
  //   const value: IContext = {
  //     query: 'cat',
  //     setQuery: () => {},
  //     gifs: [],
  //     setGifs: jest.fn((arr: IGif[]) => (value.gifs = arr)) as Dispatch<
  //       SetStateAction<IGif[]>
  //     >,
  //     limit: 0,
  //     setLimit: () => {},
  //   };

  //   render(
  //     <BrowserRouter>
  //       <MyContext.Provider value={value}>
  //         <RootLayout />
  //       </MyContext.Provider>
  //     </BrowserRouter>
  //   );

  //   const list = await screen.findAllByAltText('card');
  //   expect(list.length).toBe(2);
  // });
});
