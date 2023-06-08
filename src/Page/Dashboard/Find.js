import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2';
import List from './List';

function Find({ users, setUsers, setIsFinding }) {
    
    const [firstName, setFirstName] = useState('');
    const [searchedUsers, setSearchedUsers] = useState(users);
  

  const handleFind = e => {
      e.preventDefault();
      if ( !firstName ) {
          return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'First name is required.',
              showConfirmButton: true
          });
      }

      const searched = searchedUsers.filter((user)=> user.firstName.toLowerCase() === firstName.toLowerCase());
      setSearchedUsers(searched);

      if(searched.length === 0)
       {Swal.fire({
          icon: 'error',
          title: 'Not Found!',
          text: `Data Not Found.`,
          showConfirmButton: true,
      });}
      else{
        Swal.fire({
          icon: 'success',
          title: 'Found!',
          text: `Results for ${firstName} have been found`,
          showConfirmButton: false,
          timer: 1500
      });
        
      }
  };

  useEffect(() => {
    setSearchedUsers(users);
}, [firstName,users])


    return (
        <div className="small-container">
            <form onSubmit={handleFind}>
                <h1>Find User</h1>
                <label htmlFor="firstName">Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type='name'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
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

            <List users={searchedUsers}/> 
        </div>
    );
}


export default Find