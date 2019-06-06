// import 'whatwg-fetch';
import 'isomorphic-fetch';
import { endpoint } from '../api/endpoint';
import { earthdata } from '../api/earthData';

const fetchEarth = () => fetch(endpoint);

const parseQuakes = (response, reject) =>
  response.json().then(json => {
    let quakes = [];
    if (json && json.features) {
      quakes = json.features.map(earthdata);
    }
    return quakes;
  });

export { fetchEarth, parseQuakes };
