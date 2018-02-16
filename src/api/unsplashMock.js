import {
  unsplashDatagetCollectionPhotos,
  unsplashDataListFeaturedCollections,
  unsplashDataGetPhotoWithCountry,
  unsplashDataGetPhotoWithoutCountry,
} from './unsplashMockData';
import delay from '../helpers/delay';

const unsplashMock = {
  collections: {
    listFeaturedCollections(_, num) {
      return delay(500).then(() =>
        unsplashDataListFeaturedCollections.slice(0, num)
      );
    },
    getCollectionPhotos(_, _1, num, order) {
      console.log(order);
      return delay(500).then(() =>
        unsplashDatagetCollectionPhotos.slice(0, num)
      );
    },
  },
  photos: {
    getPhoto() {
      return delay(500).then(() => unsplashDataGetPhotoWithoutCountry);
    },
  },
};

export default unsplashMock;
