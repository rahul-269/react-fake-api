import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ users, selectedUser, setUsers, setIsEditing }) {

    const id = selectedUser.id;

    const [email, setEmail] = useState(selectedUser.email);
    const [firstName, setFirstName] = useState(selectedUser.firstName);
    const [lastName, setLastName] = useState(selectedUser.lastName);
    const [avatar, setAvatar] = useState(selectedUser.avatar);

    const handleEdit = e => {
        e.preventDefault();

        if (!email || !firstName || !lastName || !avatar) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const user = {
            id,
            email,
            firstName,
            lastName,
            avatar
        };

        for (let i = 0; i < users.length; i++) {
            if (users[i].id === id) {
                users.splice(i, 1, user);
                break;
            }
        }

        setUsers(users);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${user.firstName} ${user.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleEdit}>
                <h1>Edit User</h1>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
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
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit