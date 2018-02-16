import React from 'react';
import { LOAD_STATE } from '../constants/constants';
import { unsplashGetCollectionPhotos } from '../api/api';
import InfiniteGrid from './InfiniteGrid';
import CollectionSelectOrder from './CollectionSelectOrder';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: LOAD_STATE.LOADING,
      collectionPhotos: [],
      pageNumber: 1,
      order: 'latest',
      allPhotosAreFetched: false,
    };
    this.fetchCollectionPhotos = this.fetchCollectionPhotos.bind(this);
    this.handleChangeOrder = this.handleChangeOrder.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.order !== this.state.order) {
      this.fetchCollectionPhotos();
    }
  }

  fetchCollectionPhotos() {
    const { pageNumber, allPhotosAreFetched } = this.state;
    if (allPhotosAreFetched) {
      return;
    }
    console.log(pageNumber);
    this.setState({ pageNumber: pageNumber + 1 });
    const { params } = this.props.match;
    this.setState({ loadState: LOAD_STATE.LOADING });
    unsplashGetCollectionPhotos(params.id, pageNumber, 50, this.state.order)
      .then(collectionPhotos => {
        this.setState(prevState => ({
          allPhotosAreFetched: collectionPhotos.length <= 0,
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

  handleChangeOrder(event) {
    const { value: order } = event.target;
    this.setState({
      order,
      collectionPhotos: [],
      pageNumber: 1,
      allPhotosAreFetched: false,
    });
  }

  render() {
    const { params } = this.props.match;
    const { collectionPhotos, order, loadState } = this.state;
    return (
      <div>
        Collection {params.name}
        <CollectionSelectOrder
          currentOrder={order}
          handleChange={this.handleChangeOrder}
        />
        <InfiniteGrid
          elements={collectionPhotos}
          loadMore={this.fetchCollectionPhotos}
          isLoading={loadState === LOAD_STATE.LOADING}
        />
      </div>
    );
  }
}

export default Collection;
