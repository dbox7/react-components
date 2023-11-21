import { screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { IGif } from '../../utils/types';
import userEvent from '@testing-library/user-event';

import List from '../../components/List/List';
import { renderWithProviders } from '../../utils/testWrapper';

describe('List tests', () => {
  test('Renders the list', () => {
    const list = renderWithProviders(
      <BrowserRouter>
        <List data={gif} />
      </BrowserRouter>
    );
    expect(list).toBeTruthy();
  });

  const gif: IGif[] = [
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
  ];

  test('Check count of item in List', () => {
    renderWithProviders(
      <BrowserRouter>
        <List data={gif} />
      </BrowserRouter>
    );
    expect(screen.getAllByAltText('card')).toHaveLength(1);
  });

  test('No items in list', () => {
    renderWithProviders(
      <BrowserRouter>
        <List data={undefined} />
      </BrowserRouter>
    );
    expect(screen.getByText('No items')).toBeTruthy();
  });

  test('Paggination test', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/page/1']}>
        <Routes>
          <Route path="page/:page" element={<List data={gif} />} />
        </Routes>
      </MemoryRouter>
    );

    const paginationIncrement = await screen.findByTestId(
      'paginationIncrement'
    );
    await userEvent.click(paginationIncrement);
    let pageCounter = await screen.findByTestId('pageCounter');
    expect(pageCounter.innerHTML).toContain('2');

    const paginationDecrement = await screen.findByTestId(
      'paginationDecrement'
    );
    await userEvent.click(paginationDecrement);
    pageCounter = await screen.findByTestId('pageCounter');
    expect(pageCounter.innerHTML).toContain('1');
  });
});
