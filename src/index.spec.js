import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
});

// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h2>Welcome to React</h2>;
//   // expect(wrapper.contains(welcome)).toBe(true);  expect(true).to.be.equal(true)
//   expect(wrapper.contains(welcome)).toEqual(true);
// });
