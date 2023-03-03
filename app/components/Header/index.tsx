import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, Button } from '@components/common';
import { QuestionIcon } from '@constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="xxl-3" fontWeight="800">
        {`Want to eat\nhealthy Food?`}
      </Text>

      <Button customStyle={styles.buttonHelp}>
        <QuestionIcon />
      </Button>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  buttonHelp: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
});
