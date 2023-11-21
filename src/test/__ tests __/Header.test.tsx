import { act, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from '../../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { renderWithProviders } from '../../utils/testWrapper';

describe('Header tests', () => {
  test('render Header', () => {
    const header = renderWithProviders(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(header).toBeTruthy();
  });

  test('get data from Local Storage', async () => {
    await act(async () => {
      return renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });
    const input = await screen.findByPlaceholderText('Enter your query here');
    const searchValue = localStorage.getItem('search');
    searchValue !== null
      ? expect(input.innerHTML).toBe(searchValue)
      : expect(input.innerHTML).toBe('');
  });

  test('write data in Local Storage', async () => {
    await act(async () => {
      return renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });
    const input = await screen.findByPlaceholderText('Enter your query here');
    fireEvent.change(input, { target: { value: 'cat' } });
    const button = screen.getByText('Search');
    await userEvent.click(button);
    expect(localStorage.getItem('search')).toBe('cat');
  });

  test('changing select option', async () => {
    await act(async () => {
      return renderWithProviders(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });
    const select = await screen.findByDisplayValue('25');
    fireEvent.change(select, { target: { value: '10' } });
    await userEvent.click(select);
  });
});
