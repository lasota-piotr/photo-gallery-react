import React from 'react';
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
            unsplashGetCollectionPhotos(collection.id, 1, 10, 'latest')
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
            <CollectionsList
              collection={collection}
              key={index}
              collectionPhotos={
                collectionsPhotos.length > 0 ? collectionsPhotos[index] : []
              }
              isLoading={loadStateCollectionsPhotos === LOAD_STATE.LOADING}
              isError={loadStateCollectionsPhotos === LOAD_STATE.ERROR}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default Collections;
