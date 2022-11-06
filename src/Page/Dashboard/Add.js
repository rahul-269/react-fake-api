import { faker } from '@faker-js/faker';
import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ users, setUsers, setIsAdding }) {
  const [email, setEmail] = useState(faker.internet.email());
  const [firstName, setFirstName] = useState(faker.name.firstName());
  const [lastName, setLastName] = useState(faker.name.lastName());
  const [avatar, setAvatar] = useState(faker.image.avatar());

  const textInput = useRef(null);

  useEffect(() => {
      textInput.current.focus();
  }, [])

  const handleAdd = e => {
      e.preventDefault();
      if ( !email || !firstName || !lastName || !avatar) {
          return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true
          });
      }

      const id = users.length + 1;
      const newUser = {
          id,
          email,
          firstName,
          lastName,
          avatar
      }
      users.push(newUser);
      setUsers(users);
      setIsAdding(false);

      Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: `${firstName} ${lastName}'s data has been Added.`,
          showConfirmButton: false,
          timer: 1500
      });
  }


  return (
      <div className="small-container">
          <form onSubmit={handleAdd}>
              <h1>Add User</h1>
              <label htmlFor="email">Email</label>
              <input
                  id="email"
                  type="email"
                  ref={textInput}
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="firstName">First Name</label>
              <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
              />
              <label htmlFor="avatar">Avatar</label>
              <input
                  id="avatar"
                  type="avatar"
                  name="avatar"
                  value={avatar}
                  onChange={e => setAvatar(e.target.value)}
              />
              <div style={{ marginTop: '30px' }}>
                  <input type="submit" value="Add" />
                  <input
                      style={{ marginLeft: '12px' }}
                      className="muted-button"
                      type="button"
                      value="Cancel"
                      onClick={() => setIsAdding(false)}
                  />
              </div>
          </form>
      </div>
  );
}

export default Add