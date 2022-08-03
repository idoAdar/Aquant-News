import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../assets/colors/colors';

const itemWidth = Dimensions.get('window').width * 0.85;

const ArticleItem = ({element, onArticle}) => {
  const {title, urlToImage, author} = element;

  const imagePlaceholder =
    'https://adom-it.co.il/wp-content/uploads/2020/01/placeholder.png';

  return (
    <TouchableOpacity onPress={onArticle.bind(this, element)}>
      <ImageBackground
        source={{
          uri: urlToImage || imagePlaceholder,
        }}
        resizeMode={'cover'}
        style={styles.itemContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.item}>{title}</Text>
          <Text style={styles.author}>- {author || 'Unknown'}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 8,
    height: 160,
    width: itemWidth,
    justifyContent: 'flex-end',
  },
  detailsContainer: {
    padding: 5,
    backgroundColor: colors.black,
  },
  item: {
    color: colors.white,
  },
  author: {
    fontSize: 10,
    color: colors.white,
  },
});

export default ArticleItem;