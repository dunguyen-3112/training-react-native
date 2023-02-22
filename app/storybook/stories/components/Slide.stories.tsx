import SlideItem from '@components/Slide/base/SlideItem';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from './CenterView';

storiesOf('Slide', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <SlideItem
      image={{
        uri: 'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/image1.png?alt=media&token=45bbf690-ea27-466c-b025-67e6fc7aed6a',
      }}
      title="The pros and cons of vegetable"
      color="orange"
    />
  ))
  .add('green', () => (
    <SlideItem
      image={{
        uri: 'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/Group%2036209.png?alt=media&token=57ef4bf8-c2ec-4fb4-927d-1cf16b4bfaaa',
      }}
      title="The pros and cons of vegetable"
      color="green"
    />
  ));
