'use strict';

import React from 'react';
import NoMatch from './NoMatch.jsx';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
Date.now = jest.fn(() => 1482363367071);

it('renders correctly', () => {
  const tree = renderer.create(<NoMatch />).toJSON();
  expect(tree).toMatchSnapshot();
});