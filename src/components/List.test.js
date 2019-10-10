import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List test suite', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List key={1} header="Test Header" cards={[1,2,3]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const tree = renderer
      .create(<List key={1} header="Test Header" cards={[1,2,3]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

