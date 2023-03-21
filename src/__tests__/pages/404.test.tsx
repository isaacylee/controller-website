import { render, screen } from '@testing-library/react';
import * as React from 'react';

import NotFoundPage from '@/pages/404';

describe('404', () => {
  it('renders a heading', () => {
    render(<NotFoundPage />);

    const heading = screen.getByText(/The corgi couldn't find the page!/i);

    expect(heading).toBeInTheDocument();
  });
});
