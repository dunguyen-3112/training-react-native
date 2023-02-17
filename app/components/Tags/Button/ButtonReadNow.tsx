import { COLOR } from '@constants';
import React from 'react';
import CustomButton from './CustomButton';

const ButtonReadNow = ({
  marginTop = 0,
  color,
}: {
  marginTop?: number;
  color?: COLOR;
}) => {
  return (
    <CustomButton
      label="Read now"
      icon={require('@assets/icons/Arrow.png')}
      marginTop={marginTop}
      color={color}
    />
  );
};

export default ButtonReadNow;
