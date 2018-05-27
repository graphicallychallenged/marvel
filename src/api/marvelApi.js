import 'whatwg-fetch'
import md5 from 'md5'
const PUBLIC_KEY =  '23524fcf9cf3102cc817dd4cfb20db7a'
const PRIVATE_KEY = '6b98af83fac066b2574eb91687abb5dc1e45da5e'

/**
 * Retrieve characters from Marvel API
 *
 * @param category
 * @returns Promise
 */

export function getMarvelCharacters(){
  const ts = new Date().getTime()
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
  return fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
    .then((response)=> {
      return response.json()
    })
    .catch((err) =>{
      return err;
    });
};
