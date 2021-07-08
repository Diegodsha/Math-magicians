import renderer from 'react-test-renderer';
import Home from '../Components/Home';

describe('Home Component', () => {
  test('Renders correctly home component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
