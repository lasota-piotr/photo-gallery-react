import Unsplash, { toJson } from 'unsplash-js';
import unsplash from './unsplashMock';
// import { unsplashData } from '../../data';
// const unsplash = new Unsplash(unsplashData);


unsplash.collections
  .listCollections(1, 10, 'popular')
  .then(toJson)
  .then(json => {
    console.log(json);
  });
