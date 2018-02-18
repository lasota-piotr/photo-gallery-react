import {
  unsplashDataGetCollection,
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
    getCollection() {
      return delay(4000).then(() => unsplashDataGetCollection);
    },
    getCollectionPhotos(_, _1, num, order) {
      return delay(8000).then(() =>
        unsplashDatagetCollectionPhotos.slice(0, num)
      );
    },
  },
  photos: {
    getPhoto() {
      return delay(500).then(() => unsplashDataGetPhotoWithCountry);
    },
  },
};

export default unsplashMock;
