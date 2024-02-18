import { newSpecPage } from '@stencil/core/testing';
import { MrudAmbulanceWlList } from '../mrud-ambulance-wl-list';

describe('mrud-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MrudAmbulanceWlList],
      html: `<mrud-ambulance-wl-list></mrud-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <mrud-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mrud-ambulance-wl-list>
    `);
  });
});
