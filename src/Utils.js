import React from 'react';
import { branch, renderComponent } from 'recompose';
import styled from 'styled-components';

export const Parent = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Item = styled.div`
  width: 50%;
  padding: 5px;
  margin: 0;
  border: 1px solid red;
`;

export const Pre = styled.pre`white-space: pre-wrap;`;

// if not loaded, show the word Loading
const Loading = branch(
  props => !props.loaded,
  renderComponent(() => <Pre>Loading...</Pre>)
);

// the payload will just stringify it in a nice way
const Payload = ({ payload }) =>
  <Pre>
    {JSON.stringify(payload, null, 2)}
  </Pre>;

// loading payload just switches between Loading and Payload
export const LoadingPayload = Loading(Payload);
