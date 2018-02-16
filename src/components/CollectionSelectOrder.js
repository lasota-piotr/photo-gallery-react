import React from 'react';

const CollectionSelectOrder = ({ currentOrder, handleChange }) => (
  <form>
    <label>
      Sort by:
      <select value={currentOrder} onChange={handleChange}>
        <option value="latest">Latest</option>
        <option value="popular">Popular</option>
      </select>
    </label>
  </form>
);

export default CollectionSelectOrder;
