import unsplash from './unsplashMock';
import Unsplash, { toJson } from 'unsplash-js';
// import { unsplashData } from '../../data';
//
// const unsplash = new Unsplash(unsplashData);

export const unsplashListFeaturedCollections = () =>
  unsplash.collections.listFeaturedCollections(1, 3).then(toJson);

export const unsplashGetCollectionPhotos = (...args) =>
  unsplash.collections.getCollectionPhotos(...args).then(toJson);
