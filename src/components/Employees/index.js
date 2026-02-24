import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { styles } from '../../styles';

const Employees = ({ searchTerm, isAdmin }) => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', dept: '', role: '' });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'employees'), snapshot => {
      setEmployees(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const openModal = (emp = null) => {
    if (emp) {
      setEditingEmployee(emp);
      setFormData({ name: emp.name, email: emp.email, dept: emp.dept, role: emp.role });
    } else {
      setEditingEmployee(null);
      setFormData({ name: '', email: '', dept: '', role: '' });
    }
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!isAdmin) {
      alert('Only admin can perform this action');
      return;
    }
    try {
      if (editingEmployee) {
        await updateDoc(doc(db, 'employees', editingEmployee.id), formData);
      } else {
        await addDoc(collection(db, 'employees'), formData);
      }
      setShowModal(false);
    } catch (err) {
      console.error('save employee', err);
      alert('Failed to save employee');
    }
  };

  const handleDelete = async (id) => {
    if (!isAdmin) {
      alert('Only admin can perform this action');
      return;
    }
    if (window.confirm('Delete this employee?')) {
      await deleteDoc(doc(db, 'employees', id));
    }
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  return (
    <div style={styles.tableContainer}>
      <div style={styles.tableHeader}>
        <h2>Employee Management</h2>
        {isAdmin && <button style={styles.addButton} onClick={() => openModal()}>+ Add Employee</button>}
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Department</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(emp => (
            <tr key={emp.id}>
              <td style={styles.td}>{emp.name}</td>
              <td style={styles.td}>{emp.email}</td>
              <td style={styles.td}>{emp.dept}</td>
              <td style={styles.td}>{emp.role}</td>
              <td style={styles.td}>
                {isAdmin ? (
                  <div style={styles.actionButtons}>
                    <button style={styles.editButton} onClick={() => openModal(emp)}>Edit</button>
                    <button style={styles.deleteButton} onClick={() => handleDelete(emp.id)}>Delete</button>
                  </div>
                ) : (
                  <span style={{ opacity: 0.6 }}>restricted</span>
                )}
              </td>
            </tr>
          ))}
          {filteredEmployees.length === 0 && (
            <tr><td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>No employees found</td></tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <div style={styles.modalTitle}>{editingEmployee ? 'Edit Employee' : 'Add Employee'}</div>
            <input
              style={styles.input}
              placeholder="Name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              style={styles.input}
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              style={styles.input}
              placeholder="Department"
              value={formData.dept}
              onChange={e => setFormData({ ...formData, dept: e.target.value })}
            />
            <input
              style={styles.input}
              placeholder="Role"
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
            />
            <div style={styles.modalButtons}>
              <button style={styles.cancelButton} onClick={() => setShowModal(false)}>Cancel</button>
              <button style={styles.saveButton} onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;