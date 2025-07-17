import { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      padding: '15px',
      border: '1px solid #ccc',
      margin: '10px',
      backgroundColor: '#000000ff',
      borderRadius: '8px'
    }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
