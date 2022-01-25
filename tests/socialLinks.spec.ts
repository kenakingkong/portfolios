import { setupTest } from '@nuxt/test-utils';
import axios from 'axios';

describe('Social Link Endpoints', () => {
  setupTest({ server: true });

  const BASE_URL = '/api/socials';

  /*
  test('Get all social links', async () => {
    const response = await axios.get(BASE_URL);
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.data).toBeInstanceOf(Array);
  })
  */

  test('Create social link', async () => {
    const params = {
      name: "@instagram",
      url: "https://instagram.com/@instagram",
      icon: "fa-instagram",
      siteType: "dev"
    };
    const response = await axios.post(BASE_URL, params);
    console.log(response);
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.data).toBeInstanceOf(Object);
  })
});