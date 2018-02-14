import React from 'react';
import { LOAD_STATE } from '../constants/constants';
import { unsplashGetCollectionPhotos } from '../api/api';
import InfiniteGrid from './InfiniteGrid';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: LOAD_STATE.LOADING,
      collectionPhotos: [],
      pageNumber: 1,
    };
    this.fetchCollectionPhotos = this.fetchCollectionPhotos.bind(this);
  }

  componentDidMount() {
    this.fetchCollectionPhotos();
  }

  fetchCollectionPhotos() {
    const { pageNumber } = this.state;
    this.setState({ pageNumber: pageNumber + 1 });
    const { params } = this.props.match;
    unsplashGetCollectionPhotos(params.id, pageNumber, 50, 'latest')
      .then(collectionPhotos => {
        this.setState(prevState => ({
          collectionPhotos: [
            ...prevState.collectionPhotos,
            ...collectionPhotos,
          ],
          loadState: LOAD_STATE.SUCCESS,
        }));
      })
      .catch(() => {
        this.setState({
          loadState: LOAD_STATE.ERROR,
        });
      });
  }

  render() {
    const { params } = this.props.match;
    const { collectionPhotos } = this.state;
    return (
      <div>
        Collection {params.name}
        <InfiniteGrid
          elements={collectionPhotos}
          loadMore={this.fetchCollectionPhotos}
        />
      </div>
    );
  }
}

export default Collection;
