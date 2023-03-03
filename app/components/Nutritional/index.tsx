import React, { memo, useCallback, useMemo } from 'react';
import { FlatList, StyleSheet, View, ViewStyle } from 'react-native';

import { COLOR } from '@constants';
import { TNutritional } from '@types';
import { Text } from '@components/common';

interface INatritional {
  title: string;
  value: number;
}

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

  const Item = ({ title, value }: INatritional) => (
    <View>
      <Text fontSize="xl-6" customStyle={{ textTransform: 'capitalize' }}>
        {title}
      </Text>

      <Text fontSize="xxl-4" color="secondary">
        {`${value}g`}
      </Text>
    </View>
  );

  const handleItemSeparatorComponent = useCallback(
    () => <View style={{ marginLeft: 40 }} />,
    []
  );

  const handleRenderItem = useCallback(({ item }: { item: INatritional }) => {
    return <Item {...item} />;
  }, []);

  const handleKeyExtractor = useCallback(
    (item: INatritional) => item.title + '',
    []
  );

  return (
    <View style={[styles.container, customStyles]}>
      <FlatList
        data={vi}
        horizontal
        renderItem={handleRenderItem}
        ItemSeparatorComponent={handleItemSeparatorComponent}
        keyExtractor={handleKeyExtractor}
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
