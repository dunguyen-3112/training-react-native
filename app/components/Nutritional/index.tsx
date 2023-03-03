import { FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import React, { memo, useMemo } from 'react';
import { COLOR } from '@constants';
import { TNutritional } from '@types';
import { Text } from '@components/common';

const Nutritional = ({
  nutritional,
  customStyles,
}: {
  nutritional: TNutritional;
  color?: COLOR;
  customStyles?: ViewStyle;
}) => {
  const vi = useMemo(() => {
    return Object.entries(nutritional).map(([x, y]) => ({
      title: x,
      value: y,
    }));
  }, [nutritional]);

  const Item = ({ title, value }: { title: string; value: number }) => (
    <View>
      <Text fontSize="xl-6">{title}</Text>
      <Text fontSize="xxl-4" color="SECONDARY">
        {`${value}g`}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, customStyles]}>
      <FlatList
        data={vi}
        horizontal
        renderItem={({ item }) => <Item {...item} />}
        ItemSeparatorComponent={() => <View style={{ marginLeft: 40 }} />}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default memo(Nutritional);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8EE',
    justifyContent: 'center',
    paddingVertical: 19,
    alignItems: 'center',
  },
});
