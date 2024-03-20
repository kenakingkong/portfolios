// import { setupTest } from '@nuxt/test-utils';
// import axios from 'axios';

// describe('Social Link Endpoints', () => {
//   setupTest({ server: true });

//   const BASE_URL = '/api/socials';

 
//   it('Get all social links', async () => {
//     const response = await axios.get(BASE_URL);
//     expect(response.status).toBeGreaterThanOrEqual(200);
//     expect(response.data).toBeInstanceOf(Array);
//   })

//   it('Create social link', async () => {
//     const params = {
//       name: "@instagram",
//       url: "https://instagram.com/@instagram",
//       icon: "fa-instagram",
//       siteType: "dev"
//     };
//     const response = await axios.post(BASE_URL, params);
//     expect(response.status).toBeGreaterThanOrEqual(200);
//     expect(response.data).toBeInstanceOf(Object);
//   })
// });