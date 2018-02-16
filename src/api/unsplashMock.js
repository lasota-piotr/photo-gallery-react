import {
  unsplashDatagetCollectionPhotos,
  unsplashDataListFeaturedCollections,
  unsplashDataGetPhotoWithCountry,
  unsplashDataGetPhotoWithoutCountry,
} from './unsplashMockData';
import delay from '../helpers/delay';

let counter = 0;
const unsplashMock = {
  collections: {
    listFeaturedCollections(_, num) {
      return delay(500).then(() =>
        unsplashDataListFeaturedCollections.slice(0, num)
      );
    },
    getCollectionPhotos(_, _1, num, order) {
      counter++;
      if (counter > 4) {
        return Promise.resolve([]);
      }
      console.log(order);
      return delay(5000).then(() =>
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
