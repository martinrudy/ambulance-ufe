import { newSpecPage } from '@stencil/core/testing';
import { MrudAmbulanceWlApp } from '../mrud-ambulance-wl-app';

describe('mrud-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MrudAmbulanceWlApp],
      html: `<mrud-ambulance-wl-app base-path="/"></mrud-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("mrud-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MrudAmbulanceWlApp],
      html: `<mrud-ambulance-wl-app base-path="/ambulance-wl/"></mrud-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("mrud-ambulance-wl-list");
  });
});