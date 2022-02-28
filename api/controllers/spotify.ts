
import { RequestHandler } from 'express';
//import axios from 'axios';
//import { Buffer } from 'buffer';
//import { handleTrackResponse } from '../helpers/spotify';


export const getLastPlayedSong: RequestHandler = (req, res) => {
  res.status(201).json({message: 'spotify'});
};

/*
export const getPlayerAuth: RequestHandler = (request, response, next) => {
  const basicToken = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET_KEY}`, 
    'base64'
  );

  const options = {
    headers: { 
      'Authorization': `Basic ${basicToken}`
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  axios
    .post(`https://accounts.spotify.com/api/token`, options)
    .then(res => {
      process.env['SPOTIFY_ACCESS_TOKEN'] = res.data.access_token;
    })
    .catch(err => {
      console.log(err);
    }) 
}
*/

/*
export const getLastPlayedSong: RequestHandler = (request, response) => {
  const headers = { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`
    }
  };

  axios
    .get(`https://api.spotify.com/v1/me/player/recently-played?limit=1`, headers)
    .then(res => {
      const newTrack = handleTrackResponse(res.data);
      response.status(200).json(newTrack);
    })
    .catch(err => {
      console.log('error');
      console.log(err)
    })

};
    */
