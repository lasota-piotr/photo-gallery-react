import React from 'react';
import styled from 'styled-components';

const CollectionSelectOrderText = styled.span`
  font-size: 18px;
  margin-right: ${props => props.theme.unitTiny};
`;

const CollectionSelectOrderForm = styled.form`
  margin-bottom: ${props => props.theme.unit};
  display: flex;
  justify-content: flex-end;
`;

const CollectionSelectOrder = ({ currentOrder, handleChange }) => (
  <CollectionSelectOrderForm>
    <label>
      <CollectionSelectOrderText>Sort by:</CollectionSelectOrderText>
      <select value={currentOrder} onChange={handleChange}>
        <option value="latest">Latest</option>
        <option value="popular">Popular</option>
      </select>
    </label>
  </CollectionSelectOrderForm>
);

export default CollectionSelectOrder;
