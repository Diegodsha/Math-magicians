import renderer from 'react-test-renderer';
import Quote from '../Components/Quote';

describe('Quote component', () => {
  it('Renders correctly Quote component', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
