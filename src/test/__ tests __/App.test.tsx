import { act } from 'react-dom/test-utils';

import App from '../../App';
import { renderWithProviders } from '../../utils/testWrapper';

describe('App tests', () => {
  test('Render App', async () => {
    const app = await act(async () => {
      return renderWithProviders(<App />);
    });
    expect(app).toBeTruthy();
  });
});
