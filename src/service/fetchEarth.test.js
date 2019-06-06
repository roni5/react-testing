import 'isomorphic-fetch';
import fakeFetch from './fakeFetch';
import routes from './routes';

describe('(Method) Fetch Quakes', () => {
  test('returns the promise of data from the quakes endpoint', () => {
    jest.spyOn(global, 'fetch');

    const data = fakeFetch();

    expect(global.fetch).toHaveBeenCalledWith(routes.endpoint);
    expect(data.then).toBeTruthy();
  });
});
