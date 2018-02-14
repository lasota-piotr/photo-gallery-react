import {
  unsplashDatagetCollectionPhotos,
  unsplashDataListFeaturedCollections,
} from './unsplashMockData';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const unsplashMock = {
  collections: {
    listFeaturedCollections(_, num) {
      return delay(2000).then(() => unsplashDataListFeaturedCollections.slice(0, num));
    },
    getCollectionPhotos(_, _1, num) {
      return delay(2000).then(() =>
        unsplashDatagetCollectionPhotos.slice(0, num)
      );
    },
  },
};

export default unsplashMock;
