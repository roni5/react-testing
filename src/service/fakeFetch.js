import 'isomorphic-fetch';
import routes from './routes';

const fakeFetch = () => global.fetch(routes.endpoint);

export default fakeFetch;
