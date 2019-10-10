import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card test suite', () => {
  it(' Card renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card key={1} title="Test Title" content={[1,2,3]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders Card UI as expected', () => {
    const tree = renderer
      .create(<Card key={1} title="Test Title" content={[1,2,3]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
