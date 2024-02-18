import { newSpecPage } from '@stencil/core/testing';
import { MrudAmbulanceWlList } from '../mrud-ambulance-wl-list';

describe('mrud-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MrudAmbulanceWlList],
      html: `<mrud-ambulance-wl-list></mrud-ambulance-wl-list>`,
    });
  
    const wlList = page.rootInstance as MrudAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length
    
    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
