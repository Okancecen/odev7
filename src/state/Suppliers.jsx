import React, { useState } from 'react';
import { suppliersData } from '../data/suppliersData';

function Suppliers() {
    const [suppliers, setsuppliers] = useState(suppliersData);
    const [isAscending, setIsAscending] = useState(true);

    const deleteSuppliers = (id) => {
        var result = window.confirm("Want to delete?");
        if (result) {
            var filteredSuppliers = suppliers.filter((q) => q.id !== id);
            setsuppliers([...filteredSuppliers]);
        }
    };

    const sortByName = () => {
        const sortedSuppliers = [...suppliers].sort((a, b) => {
            const nameA = a.companyName.toUpperCase(); 
            const nameB = b.companyName.toUpperCase(); 
            if (nameA < nameB) {
                return isAscending ? -1 : 1;
            }
            if (nameA > nameB) {
                return isAscending ? 1 : -1;
            }
            return 0;
        });
        setsuppliers(sortedSuppliers);
        setIsAscending(!isAscending);
    };

    return (
        <>
            <h1>Length: {suppliers.length}</h1>
            <table className='w3-table w3-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th onClick={sortByName}>Company Name</th>
                        <th>Contact Name</th>
                        <th>Company City</th>
                        <th>Company Country</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName.toUpperCase()}</td>
                            <td>{item.contactName}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.country}</td>
                            <td>
                                <button onClick={() => deleteSuppliers(item.id)} className='w3-button w3-red'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Suppliers;
