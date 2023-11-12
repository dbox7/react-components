import { render } from '@testing-library/react';
import App from '../../App';

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

describe('App tests', () => {
  test('Render App', () => {
    const app = render(<App />);
    expect(app).toBeTruthy();
  });
});
