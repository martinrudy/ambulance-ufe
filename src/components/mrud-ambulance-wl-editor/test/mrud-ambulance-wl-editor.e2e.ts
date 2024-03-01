import { newE2EPage } from '@stencil/core/testing';

describe('mrud-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mrud-ambulance-wl-editor></mrud-ambulance-wl-editor>');

    const element = await page.find('mrud-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
