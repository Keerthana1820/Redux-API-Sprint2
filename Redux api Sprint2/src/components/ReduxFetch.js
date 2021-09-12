import * as React from "react";
import reduxFetch from "react-redux-fetch";
import some from "lodash/some";
import isEqual from "lodash/isEqual";

const repositoryItemHasChanged = prevProps => (prop, key) =>
  key.includes("Fetch") && !isEqual(prop, prevProps[key]);

class InnerReduxFetch extends React.Component {
  shouldComponentUpdate(nextProps) {
    return some(nextProps, repositoryItemHasChanged(this.props));
  }

  render() {
    const { children, ...other } = this.props;
    return children(other);
  }
}

const ReduxFetch = ({ children, config }) => {
  const Comp = reduxFetch(config)(InnerReduxFetch);
  return <Comp>{children}</Comp>;
};

export default ReduxFetch;
