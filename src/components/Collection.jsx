import React, { Fragment } from 'react';
import { LOAD_STATE } from '../constants/constants';
import { getCollectionPhotos, getCollection } from '../api/api';
import InfiniteGrid from './InfiniteGrid';
import CollectionSelectOrder from './CollectionSelectOrder';
import Wrapper from './reusable/Wrapper';
import PageTitle from './reusable/PageTitle';
import PageLoading from './reusable/PageLoading';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    const { state = {} } = this.props.location;
    const { collectionInfo, collectionPhotos } = state;
    this.state = {
      loadStateCollectionPhotos: collectionPhotos
        ? LOAD_STATE.SUCCESS
        : LOAD_STATE.LOADING,
      loadStateCollectionInfo: collectionInfo
        ? LOAD_STATE.SUCCESS
        : LOAD_STATE.LOADING,
      collectionPhotos: collectionPhotos || [],
      collectionInfo: collectionInfo || {},
      pageNumber: 1,
      order: 'latest',
      allPhotosAreFetched: false,
    };
    this.fetchCollectionPhotos = this.fetchCollectionPhotos.bind(this);
    this.handleChangeOrder = this.handleChangeOrder.bind(this);
  }

  componentDidMount() {
    const { state = {} } = this.props.location;
    const { collectionInfo } = state;
    if (!collectionInfo) {
      this.fetchCollectionInfo();
      this.fetchCollectionPhotos();
    }
  }

  fetchCollectionInfo() {
    const { id } = this.props.match.params;
    getCollection(id)
      .then(collectionInfo => {
        this.setState({
          collectionInfo,
          loadStateCollectionInfo: LOAD_STATE.SUCCESS,
        });
      })
      .catch(() => {
        this.setState({ loadStateCollectionInfo: LOAD_STATE.ERROR });
      });
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
    getCollectionPhotos(params.id, pageNumber, 30, this.state.order)
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
              prevState.collectionPhotos.length
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
    const { state = {} } = this.props.location;
    const { collectionPhotos } = state;
    this.setState({
      order,
      collectionPhotos:
        order === 'latest' && collectionPhotos ? collectionPhotos : [],
      pageNumber: 1,
      allPhotosAreFetched: false,
    });
  }

  render() {
    const {
      collectionPhotos,
      order,
      loadStateCollectionPhotos,
      loadStateCollectionInfo,
      collectionInfo,
    } = this.state;
    return (
      <Wrapper>
        {loadStateCollectionInfo === LOAD_STATE.SUCCESS ? (
          <Fragment>
            <PageTitle>{collectionInfo.title}</PageTitle>
            <CollectionSelectOrder
              currentOrder={order}
              handleChange={this.handleChangeOrder}
            />
            <InfiniteGrid
              elements={collectionPhotos}
              loadMore={this.fetchCollectionPhotos}
              isLoading={loadStateCollectionPhotos === LOAD_STATE.LOADING}
            />
          </Fragment>
        ) : loadStateCollectionInfo === LOAD_STATE.LOADING ? (
          <PageLoading />
        ) : (
          <div>Error :(</div>
        )}
      </Wrapper>
    );
  }
}

export default Collection;
