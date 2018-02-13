import { unsplashListCollections } from './unsplashMockData';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const unsplashMock = {
  collections: {
    listCollections() {
      return delay(500).then(() => unsplashListCollections);
    },
  },
};

export default unsplashMock;
