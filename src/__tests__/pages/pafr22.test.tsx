import { render, screen } from '@testing-library/react';

import Pafr22 from '@/pages/reports/pafr22';

describe('pafr22', () => {
  it('hastitle', () => {
    render(<Pafr22 />);

    const heading = screen.getByText(/Popular Annual Financial Report FY22/gi);

    expect(heading).toBeInTheDocument();
  });
});
