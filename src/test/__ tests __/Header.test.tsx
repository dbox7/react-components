import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';
import ContextProvider from '../../components/ContextProvider/Context';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Header tests', () => {
  test('render Header', () => {
    const header = render(
      <BrowserRouter>
        <ContextProvider>
          <Header />
        </ContextProvider>
      </BrowserRouter>
    );
    expect(header).toBeTruthy();
  });

  test('get data from Local Storage', async () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Header />
        </ContextProvider>
      </BrowserRouter>
    );
    const input = await screen.findByPlaceholderText('Enter your query here');
    const searchValue = localStorage.getItem('search');
    searchValue !== null
      ? expect(input.innerHTML).toBe(searchValue)
      : expect(input.innerHTML).toBe('');
  });

  test('write data in Local Storage', async () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Header />
        </ContextProvider>
      </BrowserRouter>
    );
    const input = await screen.findByPlaceholderText('Enter your query here');
    fireEvent.change(input, { target: { value: 'cat' } });
    const button = screen.getByText('Search');
    await userEvent.click(button);
    expect(localStorage.getItem('search')).toBe('cat');
  });

  test('write data in Local Storage', async () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Header />
        </ContextProvider>
      </BrowserRouter>
    );
    const select = await screen.findByDisplayValue('25');
    fireEvent.change(select, { target: { value: '10' } });
    await userEvent.click(select);
  });
});
