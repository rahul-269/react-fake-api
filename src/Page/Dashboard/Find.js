import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Find({ users, selectedUser, setUsers, setIsFinding }) {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avatar, setAvatar] = useState('');

    const textInput = useRef(null);

  useEffect(() => {
      textInput.current.focus();
  }, [])

  const handleFind = e => {
      e.preventDefault();
      if ( !id ) {
          return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'ID is required.',
              showConfirmButton: true
          });
      }

      const id = console.log('id',id);
     
      const user = {
        id,
        email,
        firstName,
        lastName,
        avatar
     };

     for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            email = user.email;
            firstName= user.firstName;
            lastName = user.lastName;
            avatar = user.avatar;
            break;
        }
    }
      setUsers(users);
      setIsFinding(false);

      Swal.fire({
          icon: 'success',
          title: 'Found!',
          text: `${firstName} ${lastName}'s data has been Found.`,
          showConfirmButton: false,
          timer: 1500
      });
  };


    return (
        <div className="small-container">
            <form onSubmit={handleFind}>
                <h1>Find User</h1>
                <label htmlFor="id">ID</label>
                <input
                    id="id"
                    type="id"
                    name="id"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Find" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsFinding(false)}
                    />
                </div>
            </form>
        </div>
    );
}


export default Find