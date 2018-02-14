import React from 'react';
import CollectionsListItem from './CollectionsListItem';
import {
  unsplashGetCollectionPhotos,
  unsplashListFeaturedCollections,
} from '../api/api';
import { LOAD_STATE } from '../constants/constants';
import Loading from './Loading';
import CollectionsList from './CollectionsList';

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadStateCollections: LOAD_STATE.LOADING,
      loadStateCollectionsPhotos: LOAD_STATE.LOADING,
      collections: [],
      collectionsPhotos: [],
    };
    this.fetchCollections = this.fetchCollections.bind(this);
  }

  componentDidMount() {
    this.fetchCollections();
  }

  fetchCollections() {
    unsplashListFeaturedCollections()
      .then(collections => {
        this.setState({
          collections,
          loadStateCollections: LOAD_STATE.SUCCESS,
        });
        return Promise.resolve(collections);
      })
      .then(collections =>
        Promise.all(
          collections.map(collection =>
            unsplashGetCollectionPhotos(collection.id, 1, 3, 'latest')
          )
        )
      )
      .then(collectionsPhotos => {
        this.setState({
          collectionsPhotos,
          loadStateCollectionsPhotos: LOAD_STATE.SUCCESS,
        });
      })
      .catch(() => {
        this.setState({
          loadStateCollections: LOAD_STATE.ERROR,
          loadStateCollectionsPhotos: LOAD_STATE.ERROR,
        });
      });
  }

  render() {
    const {
      loadStateCollections,
      collections,
      loadStateCollectionsPhotos,
      collectionsPhotos,
    } = this.state;
    return (
      <div>
        {loadStateCollections === LOAD_STATE.SUCCESS ? (
          collections.map((collection, index) => (
            <CollectionsList collection={collection} key={index}>
              {loadStateCollectionsPhotos === LOAD_STATE.SUCCESS ? (
                collectionsPhotos[index].map((collectionPhotos, index) => (
                  <CollectionsListItem
                    collectionPhotos={collectionPhotos}
                    key={index}
                  />
                ))
              ) : (
                <Loading />
              )}
            </CollectionsList>
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default Collections;
