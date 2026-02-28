import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import EmployeeInsight from './EmployeeInsight';

const Employees = ({ searchTerm, isAdmin }) => {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dept: '',
    role: '',
    salary: '',
    phone: '',
    address: '',
    dob: '',
    nationalId: '',
    password: ''
  });

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'employees'), snapshot => {
      setEmployees(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const openModal = (emp = null) => {
    if (emp) {
      setEditingEmployee(emp);
      setFormData({
        name: emp.name,
        email: emp.email,
        dept: emp.dept,
        role: emp.role,
        salary: emp.salary || '',
        phone: emp.phone || '',
        address: emp.address || '',
        dob: emp.dob || '',
        nationalId: emp.nationalId || '',
        password: emp.password || ''
      });
    } else {
      setEditingEmployee(null);
      setFormData({
        name: '',
        email: '',
        dept: '',
        role: '',
        salary: '',
        phone: '',
        address: '',
        dob: '',
        nationalId: '',
        password: ''
      });
    }
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!isAdmin) return;
    try {
      if (editingEmployee) {
        await updateDoc(doc(db, 'employees', editingEmployee.id), formData);
      } else {
        await addDoc(collection(db, 'employees'), {
          ...formData,
          status: 'Active',
          joinedDate: new Date().toISOString().split('T')[0],
          profileComplete: false
        });
      }
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };


  if (selectedEmployee) {
    return <EmployeeInsight employee={selectedEmployee} onBack={() => setSelectedEmployee(null)} />;
  }

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes((searchTerm || '').toLowerCase())
  );

  return (
    <div className="animate-fade">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Workforce Directory</h2>
          <p style={{ color: tokens.colors.textMuted, fontSize: '14px' }}>Manage and monitor your active staff members.</p>
        </div>
        {isAdmin && (
          <button style={styles.button.primary} onClick={() => openModal()}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_add</span> Add Record
          </button>
        )}
      </div>

      <div style={styles.card}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={styles.th}>Identity</th>
              <th style={styles.th}>Contact</th>
              <th style={styles.th}>Unit/Role</th>
              <th style={styles.th}>Status</th>
              <th style={{ ...styles.th, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(emp => (
              <tr key={emp.id}>
                <td style={styles.td}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: '#F3F4F6',
                      color: tokens.colors.primary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '16px',
                      borderRadius: tokens.radius.full,
                    }}>
                      {emp.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '15px' }}>{emp.name}</div>
                      <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>Emp ID: {emp.id.slice(0, 6).toUpperCase()}</div>
                    </div>
                  </div>
                </td>
                <td style={styles.td}>
                  <div style={{ fontWeight: '500', fontSize: '14px' }}>{emp.email}</div>
                  <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{emp.phone || 'No phone recorded'}</div>
                </td>
                <td style={styles.td}>
                  <div style={{ fontWeight: '600', fontSize: '13px', color: tokens.colors.primary }}>{emp.dept}</div>
                  <div style={{ fontSize: '12px', color: tokens.colors.textMuted }}>{emp.role}</div>
                </td>
                <td style={styles.td}>
                  <div style={{
                    ...styles.badge(emp.profileComplete ? 'primary' : 'outline'),
                    fontSize: '11px',
                    borderColor: emp.profileComplete ? tokens.colors.border : tokens.colors.error,
                    color: emp.profileComplete ? tokens.colors.primary : tokens.colors.error
                  }}>
                    {emp.profileComplete ? 'Active' : 'Pending Setup'}
                  </div>
                </td>
                <td style={{ ...styles.td, textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => setSelectedEmployee(emp)}
                      style={{ ...styles.button.outline, padding: '6px 12px', fontSize: '13px' }}
                    >Insight</button>
                    {isAdmin && (
                      <button
                        onClick={() => openModal(emp)}
                        style={{ ...styles.button.outline, padding: '6px 12px', fontSize: '13px' }}
                      >Edit</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          zIndex: 100,
          backdropFilter: 'blur(4px)',
          overflowY: 'auto',
          padding: '40px 20px'
        }}>
          <div style={{ ...styles.card, width: '100%', maxWidth: '600px', margin: 'auto' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '24px' }}>
              {editingEmployee ? 'Update Profile' : 'Onboard New Staff'}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Full Name</label>
                <input style={styles.input} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Work Email</label>
                <input style={styles.input} type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="john@company.com" />
              </div>
              {!editingEmployee && (
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Initial Password</label>
                  <input style={styles.input} type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} placeholder="••••••••" />
                </div>
              )}
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Department</label>
                <select style={styles.input} value={formData.dept} onChange={e => setFormData({ ...formData, dept: e.target.value })}>
                  <option value="">Select Department</option>
                  <option>Engineering</option>
                  <option>Product</option>
                  <option>Operations</option>
                  <option>Human Resources</option>
                  <option>Sales & Marketing</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Job Role</label>
                <input style={styles.input} value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} placeholder="Senior Developer" />
              </div>

              <div style={{ gridColumn: 'span 2', height: '1px', background: tokens.colors.border, margin: '10px 0' }}></div>

              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Phone Number</label>
                <input style={styles.input} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Date of Birth</label>
                <input style={styles.input} type="date" value={formData.dob} onChange={e => setFormData({ ...formData, dob: e.target.value })} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>National ID / Passport Number</label>
                <input style={styles.input} value={formData.nationalId} onChange={e => setFormData({ ...formData, nationalId: e.target.value })} placeholder="ID Number" />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Permanent Address</label>
                <textarea style={{ ...styles.input, minHeight: '80px', resize: 'none' }} value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} placeholder="Home Address..." />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
              <button style={{ ...styles.button.outline, flex: 1, justifyContent: 'center' }} onClick={() => setShowModal(false)}>Cancel</button>
              <button style={{ ...styles.button.primary, flex: 1, justifyContent: 'center' }} onClick={handleSave}>Save Record</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;