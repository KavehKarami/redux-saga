// Phase 07

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './store/reducers/users.js';

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h1>Hello Redux-Saga</h1>
      {users.map((user, index) => (
        <h4 key={index}>{user.name}</h4>
      ))}
    </div>
  );
}
