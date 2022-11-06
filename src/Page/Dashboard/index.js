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

    const handleEdit = () => {

    }

    const handleDelete = () => {

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