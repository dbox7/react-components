import { render, screen } from '@testing-library/react';
import List from '../../components/List/List';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from '../../components/ContextProvider/Context';
import { MyContext } from '../../components/ContextProvider/Context';
import { IGif } from '../../types';

describe('List tests', () => {
  test('Renders the list', () => {
    const list = render(
      <BrowserRouter>
        <ContextProvider>
          <List />
        </ContextProvider>
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

  let value = {
    query: '',
    setQuery: () => {},
    gifs: gif,
    setGifs: () => {},
    limit: 0,
    setLimit: () => {},
  };

  test('Check count of item in List', () => {
    render(
      <BrowserRouter>
        <MyContext.Provider value={value}>
          <List />
        </MyContext.Provider>
      </BrowserRouter>
    );
    screen.debug();
    expect(screen.getAllByAltText('card')).toHaveLength(1);
  });

  test('No items in list', () => {
    value = {
      query: '',
      setQuery: () => {},
      gifs: [],
      setGifs: () => {},
      limit: 0,
      setLimit: () => {},
    };
    render(
      <BrowserRouter>
        <MyContext.Provider value={value}>
          <List />
        </MyContext.Provider>
      </BrowserRouter>
    );
    screen.debug();
    expect(screen.getByText('No items')).toBeTruthy();
  });
});
