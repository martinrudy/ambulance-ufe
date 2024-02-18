import { newE2EPage } from '@stencil/core/testing';

describe('mrud-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mrud-ambulance-wl-list></mrud-ambulance-wl-list>');

    const element = await page.find('mrud-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
