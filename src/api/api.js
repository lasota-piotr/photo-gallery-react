// import unsplash from './unsplashMock';
import Unsplash, { toJson } from 'unsplash-js';
export const facebookAppId = process.env.FACEBOOK_APP_ID;

const unsplashData = {
  applicationId: process.env.UNSPLASH_APP_ID,
  secret: process.env.UNSPLASH_SECRET,
};

const unsplash = new Unsplash(unsplashData);

export const listFeaturedCollections = () =>
  unsplash.collections.listFeaturedCollections(1, 4).then(toJson);

export const getCollection = (...args) =>
  unsplash.collections.getCollection(...args).then(toJson);

export const getCollectionPhotos = (...args) =>
  unsplash.collections.getCollectionPhotos(...args).then(toJson);

export const getPhoto = (...args) =>
  unsplash.photos.getPhoto(...args).then(toJson);
