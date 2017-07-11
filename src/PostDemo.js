import React from 'react';
import { lifecycle } from 'recompose';
import { Item, LoadingPayload } from './Utils';

// need this for later
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postHttpBin } from './actions';

// demonstrates everything
const PostDemo = props =>
  <Item>
    <p>
      POST {`{'hello':'world'}`} to httpbin, delay of 5 seconds
    </p>
    <LoadingPayload {...props} />
  </Item>;

// trigger a fetch on mount
const enhance = lifecycle({
  componentDidMount() {
    const { postHttpBin } = this.props;
    setTimeout(postHttpBin, 5000);
  }
});

// the state will just be the get payload from httpbin
// the 'fetch' action will trigger the request
const mapStateToProps = ({ post: { loaded, payload } }) => ({
  loaded,
  payload
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ postHttpBin }, dispatch);
const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(enhance(PostDemo));
