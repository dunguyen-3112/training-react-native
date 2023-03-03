import { Image, StyleSheet } from 'react-native';
import React from 'react';

const EmptyImage = () => (
  <Image source={require('@assets/images/empty_2x.png')} style={styles.empty} />
);
const NotFoundImage = () => (
  <Image
    source={require('@assets/images/not_found_2x.png')}
    style={styles.notFound}
  />
);

const LoadingImage = () => (
  <Image
    source={require('@assets/images/loading_2x.png')}
    style={styles.loading}
  />
);

const ArrowICon = () => <Image source={require('@assets/icons/arrow.png')} />;

const QuestionIcon = () => (
  <Image source={require('@assets/icons/question.png')} />
);

const SearchIcon = () => (
  <Image source={require('@assets/icons/iconsearch.png')} />
);

const FavoriteMenu = ({ isFill = false }: { isFill?: boolean }) => {
  const path = isFill
    ? require('@assets/icons/favoritefill.png')
    : require('@assets/icons/favorite.png');
  return <Image source={path} />;
};

const HomeMenu = ({ isFill = false }: { isFill?: boolean }) => {
  const path = isFill
    ? require('@assets/icons/homefill.png')
    : require('@assets/icons/home.png');
  return <Image source={path} />;
};

const SearchMenu = ({ isFill = false }: { isFill?: boolean }) => {
  const path = isFill
    ? require('@assets/icons/searchfill.png')
    : require('@assets/icons/search.png');
  return <Image source={path} />;
};

const SplashImage = () => (
  <Image
    source={require('@assets/images/pattern.png')}
    style={styles.topImage}
  />
);

const styles = StyleSheet.create({
  empty: {
    height: 96,
    width: 108,
  },
  notFound: {
    width: 96,
    height: 96,
  },
  loading: {
    width: 122,
    height: 122,
  },
  topImage: {
    width: '100%',
    resizeMode: 'cover',
  },
});

export {
  EmptyImage,
  NotFoundImage,
  LoadingImage,
  ArrowICon,
  QuestionIcon,
  SearchIcon,
  SplashImage,
  FavoriteMenu,
  HomeMenu,
  SearchMenu,
};
