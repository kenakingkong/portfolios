import axios from 'axios';

describe('Hello Endpoints', () => {
  it('Get Hello', async () => {
    try {
      const response = await axios.get('/api/hello')
      console.log(response)
    } catch(err) {
      console.log(err)
    }
  })
})