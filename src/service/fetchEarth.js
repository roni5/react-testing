import 'whatwg-fetch';
import { endpoint } from '../api/endpoint';
import { earthdata } from '../api/earthData';

const fetchQuakes = () => fetch(endpoint);

const parseQuakes = (response, reject) =>
  response.json().then(json => {
    let quakes = [];
    if (json && json.features) {
      quakes = json.features.map(earthdata);
    }
    return quakes;
  });

export { fetchQuakes, parseQuakes };
