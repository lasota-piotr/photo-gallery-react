import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Collections from './Collections';
import Collection from './Collection';
import Photo from './Photo';
import NotFound from './NotFound';
import CollectionModal from './CollectionModal';

class CollectionsSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal =
      location.state &&
      location.state.modal &&
      this.previousLocation !== location; // not initial render
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Collections} />
          <Route path="/collections/:id/:name" component={Collection} />
          <Route path="/photos/:id" component={Photo} />
          <Route render={() => <NotFound />} />
        </Switch>
        {isModal ? (
          <Route path="/photos/:id" component={CollectionModal} />
        ) : null}
      </div>
    );
  }
}

export default CollectionsSwitch;
