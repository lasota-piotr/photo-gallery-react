import React from 'react';
import { LOAD_STATE } from '../constants/constants';
import { unsplashGetCollectionPhotos } from '../api/api';
import InfiniteGrid from './InfiniteGrid';
import CollectionSelectOrder from './CollectionSelectOrder';
import Wrapper from './reusable/Wrapper';
import PageTitle from './reusable/PageTitle';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    const { state = {} } = this.props.location;
    const { collectionInfo = {}, collectionPhotos } = state;
    this.state = {
      loadStateCollectionPhotos: collectionPhotos
        ? LOAD_STATE.SUCCESS
        : LOAD_STATE.LOADING,
      collectionPhotos: collectionPhotos || [],
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
    const collectionPhotosAreInLocationState =
      this.props.location.state && this.props.location.state.collectionPhotos;
    const { params } = this.props.match;
    this.setState({ loadStateCollectionPhotos: LOAD_STATE.LOADING });
    unsplashGetCollectionPhotos(params.id, pageNumber, 30, this.state.order)
      .then(fetchedCollectionPhotos => {
        this.setState(prevState => {
          let fetchedCollectionPhotosFiltered = [...fetchedCollectionPhotos];
          /*
          * If it is the first fetch of photos and props.location.state passed photos
          * skip that photos in fetched photos
          * */
          if (
            collectionPhotosAreInLocationState &&
            prevState.order === 'latest' &&
            prevState.pageNumber === 1
          ) {
            /** Skip photos from props.location.state */
            fetchedCollectionPhotosFiltered = fetchedCollectionPhotosFiltered.slice(
              this.props.location.state.collectionPhotos.length
            );
          }
          return {
            allPhotosAreFetched: fetchedCollectionPhotos.length <= 0,
            collectionPhotos: [
              ...prevState.collectionPhotos,
              ...fetchedCollectionPhotosFiltered,
            ],
            loadStateCollectionPhotos: LOAD_STATE.SUCCESS,
          };
        });
        this.setState({ pageNumber: pageNumber + 1 });
      })
      .catch(() => {
        this.setState({
          loadStateCollectionPhotos: LOAD_STATE.ERROR,
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
    const { collectionPhotos, order, loadStateCollectionPhotos } = this.state;
    return (
      <Wrapper>
        <PageTitle>{params.name}</PageTitle>
        <CollectionSelectOrder
          currentOrder={order}
          handleChange={this.handleChangeOrder}
        />
        <InfiniteGrid
          elements={collectionPhotos}
          loadMore={this.fetchCollectionPhotos}
          isLoading={loadStateCollectionPhotos === LOAD_STATE.LOADING}
        />
      </Wrapper>
    );
  }
}

export default Collection;
