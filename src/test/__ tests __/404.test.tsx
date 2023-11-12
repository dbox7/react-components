import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';

import NotFound from '../../components/404/404';

describe('Not found tests', () => {
  test('Right redirect', () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <Routes>
          <Route path="/" element={<Navigate to="page/1" />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(404)).toBeTruthy();
  });
});
