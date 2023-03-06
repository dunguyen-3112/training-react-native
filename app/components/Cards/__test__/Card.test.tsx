import { render, screen } from '@utils/test-utils';
import React from 'react';
import Card, { CardProps } from '../Card';

function setup(props?: CardProps) {
  const component = render(
    <Card
      image="https://firebasestorage.googleapis.com/v0/b/react-native-healthy-food-app.appspot.com/o/vegetale.png?alt=media&token=aec0b1a1-5f8a-4f4c-9d27-28032b2e2d79"
      title=" It is commonly used to test user interactions"
      {...(props?.type && { type: props.type })}
    />
  );

  expect(component.toJSON()).toMatchSnapshot();
}

describe('Card', () => {
  it('Type is default', () => {
    setup();
  });
});
