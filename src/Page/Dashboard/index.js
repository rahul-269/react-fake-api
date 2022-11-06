import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { faker } from '@faker-js/faker';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { userData } from '../../data';

function Dashboard() {

    const [users, setUsers] = useState(userData);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [user] = users.filter(user => user.id === id);

        setSelectedUser(user);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [user] = users.filter(user => user.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${user.firstName} ${user.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setUsers(users.filter(user => user.id !== id));
            }
        });
    }


  return (
    <div className='container'>
        {!isAdding && !isEditing && (
            <>
            <Header
                setIsAdding={setIsAdding}
                />
                <List 
                    users={users}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    />
                </>
        )}

        {isAdding && (
            <Add
                users={users}
                setUsers={setUsers}
                setIsAdding={setIsAdding}
                />
        )}

        {isEditing && (
            <Edit
                users={users}
                selectedUser={selectedUser}
                setUsers={setUsers}
                setIsEditing={setIsEditing}
                />
        )}

    </div>
  )
}

export default Dashboard