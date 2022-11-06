import React from 'react'

function List({ users, handleEdit, handleDelete }) {
  return (
    <div>
      <table className='striped-table'>
                <thead>
                    <tr>
                        <th>Id.</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                        
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, i) => (
                            <tr key={user.id}>
                                <td>{i + 1}</td>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>                               
                                <td><img src={user.avatar}/></td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(user.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Users</td>
                        </tr>
                    )}
                </tbody>
            </table>
    </div>
  )
}

export default List