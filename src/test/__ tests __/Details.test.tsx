import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Details from '../../components/Details/Details';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
              width: '300',
              height: '100',
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
          import_datetime: '10.12.23',
          is_sticker: '',
          rating: 'B',
          slug: '',
          source: 'who',
          source_post_url: '',
          source_tld: 'who',
          title: 'Gif',
          trending_datetime: '',
          type: '',
          user: {
            description: 'person',
            display_name: 'human',
            instagram_url: 'inst',
            website_url: 'site',
          },
          username: 'human',
        },
      })
    ),
  };
});

describe('Details tests', () => {
  test('Render Details', async () => {
    const details = render(
      <MemoryRouter initialEntries={['/details/123']}>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );
    expect(details).toBeTruthy();
    const gifBlock = await screen.findByAltText('gif');
    expect(gifBlock).toBeTruthy();

    const titleBlock = await screen.findByText('Gif');
    expect(titleBlock).toBeTruthy();

    const sourceBlock = await screen.findByText('who');
    expect(sourceBlock).toBeTruthy();

    const postedBlock = await screen.findByText('10.12.23');
    expect(postedBlock).toBeTruthy();

    const nameBlock = await screen.findByText('human');
    expect(nameBlock).toBeTruthy();

    const descBlock = await screen.findByText('person');
    expect(descBlock).toBeTruthy();

    const siteBlock = await screen.findByText('website');
    expect(siteBlock).toBeTruthy();

    const instBlock = await screen.findByText('instagram');
    expect(instBlock).toBeTruthy();

    const ratingBlock = await screen.findByText('B');
    expect(ratingBlock).toBeTruthy();
  });

  test('Show loader', () => {
    render(
      <MemoryRouter initialEntries={['/details/123']}>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByAltText('loader')).toBeTruthy();
  });

  test('Closing by button', async () => {
    render(
      <MemoryRouter initialEntries={['/page/1/details/123']}>
        <Routes>
          <Route path="page/:page" element={<div />} />
          <Route path="page/:page/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );
    const closeBtn = await screen.findByText('X');
    await userEvent.click(closeBtn);
    expect(screen.queryByTestId('details')).toBeNull();
  });
});
