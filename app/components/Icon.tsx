import React from 'react';
import { Image } from 'react-native';

type NameIcon =
  | 'Home'
  | 'Home_Fill'
  | 'Search'
  | 'Search_Fill'
  | 'Favorite'
  | 'Favorite_Fill';

interface IconProps {
  name?: NameIcon;
  size?: number;
}

const HomeIcon = () => <Image source={require('@assets/icons/Home.png')} />;
const HomeFillIcon = () => (
  <Image source={require('@assets/icons/Home_Fill.png')} />
);
const SearchIcon = () => <Image source={require('@assets/icons/Search.png')} />;
const SearchFillIcon = () => (
  <Image source={require('@assets/icons/Search_Fill.png')} />
);
const FavoriteIcon = () => (
  <Image source={require('@assets/icons/Heart.png')} />
);
const FavoriteFillIcon = () => (
  <Image source={require('@assets/icons/Heart_Fill.png')} />
);
const NotFoundIcon = ({ size }: IconProps) => (
  <Image
    source={require('@assets/icons/NotFound.png')}
    style={{ width: size, height: size }}
  />
);

const Icon = ({ name, size = 100 }: IconProps) => {
  switch (name) {
    case 'Home':
      return <HomeIcon />;
    case 'Search':
      return <SearchIcon />;
    case 'Home_Fill':
      return <HomeFillIcon />;
    case 'Search_Fill':
      return <SearchFillIcon />;
    case 'Favorite':
      return <FavoriteIcon />;
    case 'Favorite_Fill':
      return <FavoriteFillIcon />;

    default:
      return <NotFoundIcon size={size} />;
  }
};

export { IconProps, NameIcon };
export default Icon;
