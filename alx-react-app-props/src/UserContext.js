// UserContext.js
import { createContext } from 'react';

const UserContext = createContext({
  name: 'Default User',
  email: 'default@example.com',
});

export default UserContext;
