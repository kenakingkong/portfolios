import axios from 'axios';
import { RequestHandler } from 'express';

export const getLastPlayedSong: RequestHandler = (req, res) => {
  const ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
  const HEADERS = { 'Authorization': 'Content-Type: application/json'};
  axios
    .get(ENDPOINT, HEADERS)
    .then(response => {
      console.log(response);

    })
    .catch(error => {
      console.log('error')
    })
};