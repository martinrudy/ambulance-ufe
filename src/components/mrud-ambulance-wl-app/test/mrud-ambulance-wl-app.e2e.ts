import { newE2EPage } from '@stencil/core/testing';

describe('mrud-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mrud-ambulance-wl-app></mrud-ambulance-wl-app>');

    const element = await page.find('mrud-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
