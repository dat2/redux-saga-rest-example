import React from 'react';
import { lifecycle } from 'recompose';
import { Item, LoadingPayload } from './Utils';

// need this for later
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHttpBin } from './actions';

// demonstrates everything
const GetDemo = props =>
  <Item>
    <p>GET from httpbin, delay of 3 seconds</p>
    <LoadingPayload {...props} />
  </Item>;

// trigger a fetch on mount
const enhance = lifecycle({
  componentDidMount() {
    const { getHttpBin } = this.props;
    setTimeout(getHttpBin, 3000);
  }
});

// the state will just be the get payload from httpbin
// the 'fetch' action will trigger the request
const mapStateToProps = ({ get: { loaded, payload } }) => ({ loaded, payload });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getHttpBin }, dispatch);
const connected = connect(mapStateToProps, mapDispatchToProps);

export default connected(enhance(GetDemo));
