import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import EmployeeInsight from './EmployeeInsight';
import { calcSalary, formatINR, formatLPA } from '../../utils/salaryCalc';
import { logAction } from '../../utils/auditLog';

const Employees = ({ searchTerm, isAdmin }) => {
  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({
    name: '', email: '', dept: '', role: '',
    ctcAnnual: '', isMetro: true, tdsMonthly: '0',
    phone: '', address: '', dob: '', nationalId: '', password: '',
    // New SRS fields
    empCode: '', gender: '', personalEmail: '',
    employmentType: 'fulltime', joiningDate: '', confirmationDate: '', exitDate: '',
    status: 'Active',
    emergencyContactName: '', emergencyContactPhone: '',
    reportingManager: '',
    city: '', state: '', pincode: '',
    designation: '',
  });
  const [statutoryData, setStatutoryData] = useState({
    pan: '', aadhaar: '', bankAccount: '', bankIfsc: '', uan: '', esiNumber: ''
  });

  useEffect(() => {
    const u1 = onSnapshot(collection(db, 'employees'), snapshot => {
      setEmployees(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    const u2 = onSnapshot(collection(db, 'departments'), s =>
      setDepartments(s.docs.map(d => ({ id: d.id, ...d.data() })))
    );
    const u3 = onSnapshot(collection(db, 'designations'), s =>
      setDesignations(s.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => (a.level || 99) - (b.level || 99)))
    );
    return () => { u1(); u2(); u3(); };
  }, []);

  const openModal = (emp = null) => {
    if (emp) {
      setEditingEmployee(emp);
      setFormData({
        name: emp.name || '', email: emp.email || '',
        dept: emp.dept || '', role: emp.role || '',
        ctcAnnual: emp.ctcAnnual || '', isMetro: emp.isMetro !== false, tdsMonthly: emp.tdsMonthly || '0',
        phone: emp.phone || '', address: emp.address || '',
        dob: emp.dob || '', nationalId: emp.nationalId || '', password: emp.password || '',
        empCode: emp.empCode || '', gender: emp.gender || '', personalEmail: emp.personalEmail || '',
        employmentType: emp.employmentType || 'fulltime',
        joiningDate: emp.joiningDate || emp.joinedDate || '',
        confirmationDate: emp.confirmationDate || '', exitDate: emp.exitDate || '',
        status: emp.status || 'Active',
        emergencyContactName: emp.emergencyContactName || '', emergencyContactPhone: emp.emergencyContactPhone || '',
        reportingManager: emp.reportingManager || '',
        city: emp.city || '', state: emp.state || '', pincode: emp.pincode || '',
        designation: emp.designation || '',
      });
      setStatutoryData({
        pan: emp.pan || '', aadhaar: emp.aadhaar || '',
        bankAccount: emp.bankAccount || '', bankIfsc: emp.bankIfsc || '',
        uan: emp.uan || '', esiNumber: emp.esiNumber || '',
      });
    } else {
      setEditingEmployee(null);
      const nextCode = `CS-${String(employees.length + 1).padStart(4, '0')}`;
      setFormData({
        name: '', email: '', dept: '', role: '',
        ctcAnnual: '', isMetro: true, tdsMonthly: '0',
        phone: '', address: '', dob: '', nationalId: '', password: '',
        empCode: nextCode, gender: '', personalEmail: '',
        employmentType: 'fulltime', joiningDate: new Date().toISOString().split('T')[0],
        confirmationDate: '', exitDate: '', status: 'Active',
        emergencyContactName: '', emergencyContactPhone: '',
        reportingManager: '', city: '', state: '', pincode: '',
        designation: '',
      });
      setStatutoryData({ pan: '', aadhaar: '', bankAccount: '', bankIfsc: '', uan: '', esiNumber: '' });
    }
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!isAdmin) return;
    try {
      const saveData = { ...formData };
      // Include statutory data directly (could be encrypted in future)
      if (statutoryData.pan) saveData.pan = statutoryData.pan;
      if (statutoryData.aadhaar) saveData.aadhaar = statutoryData.aadhaar;
      if (statutoryData.bankAccount) saveData.bankAccount = statutoryData.bankAccount;
      if (statutoryData.bankIfsc) saveData.bankIfsc = statutoryData.bankIfsc;
      if (statutoryData.uan) saveData.uan = statutoryData.uan;
      if (statutoryData.esiNumber) saveData.esiNumber = statutoryData.esiNumber;

      if (editingEmployee) {
        await updateDoc(doc(db, 'employees', editingEmployee.id), saveData);
        await logAction('EMPLOYEE_UPDATED', { name: formData.name, email: formData.email }, 'admin');
      } else {
        await addDoc(collection(db, 'employees'), {
          ...saveData,
          joinedDate: formData.joiningDate || new Date().toISOString().split('T')[0],
          profileComplete: false,
          createdAt: new Date().toISOString(),
        });
        await logAction('EMPLOYEE_CREATED', { name: formData.name, email: formData.email, empCode: formData.empCode }, 'admin');
      }
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };


  if (selectedEmployee) {
    return <EmployeeInsight employee={selectedEmployee} onBack={() => setSelectedEmployee(null)} isAdmin={isAdmin} />;
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
        <div style={styles.modal}>
          <div style={{
            display: 'flex',
            width: '100%',
            maxWidth: '780px',
            maxHeight: '90vh',
            borderRadius: tokens.radius.xl,
            overflow: 'hidden',
            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.35)',
          }}>

            {/* ── LEFT PANEL ─────────────────────────────── */}
            <div style={{
              width: '260px',
              flexShrink: 0,
              background: 'linear-gradient(160deg, #134E4A 0%, #0F766E 60%, #0D9488 100%)',
              padding: '40px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* decorative circles */}
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
              <div style={{ position: 'absolute', bottom: '60px', left: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Brand mark */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
                  <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#fff' }}>bolt</span>
                  </div>
                  <span style={{ color: '#fff', fontWeight: '800', fontSize: '15px', letterSpacing: '-0.01em' }}>Cyberseal</span>
                </div>

                {/* Avatar / employee preview */}
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.12)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '30px', fontWeight: '800', color: '#fff',
                  marginBottom: '16px',
                }}>
                  {formData.name ? formData.name.charAt(0).toUpperCase() : <span className="material-symbols-outlined" style={{ fontSize: '32px', opacity: 0.5 }}>person</span>}
                </div>
                <div style={{ color: '#fff', fontWeight: '800', fontSize: '18px', letterSpacing: '-0.01em', marginBottom: '4px', minHeight: '24px' }}>
                  {formData.name || 'New Member'}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', marginBottom: '4px' }}>
                  {formData.email || 'email@hrmate.com'}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', padding: '4px 12px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5EEAD4', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.05em' }}>
                    {editingEmployee ? 'EDITING PROFILE' : 'NEW HIRE'}
                  </span>
                </div>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Steps */}
                {[
                  { icon: 'passkey', label: 'Account Credentials' },
                  { icon: 'work', label: 'Work Assignment' },
                  { icon: 'lock_person', label: 'Private Details' },
                  { icon: 'badge', label: 'Employment Lifecycle' },
                  { icon: 'verified_user', label: 'Statutory & Compliance' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '10px',
                      background: 'rgba(255,255,255,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>{step.icon}</span>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px', fontWeight: '600' }}>{step.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT PANEL ────────────────────────────── */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: tokens.colors.white,
              overflow: 'hidden',
            }}>
              {/* Header */}
              <div style={{
                padding: '28px 32px 20px',
                borderBottom: `1px solid ${tokens.colors.border}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: tokens.colors.primary, letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    {editingEmployee ? 'Update Record' : 'Onboard New Staff'}
                  </h3>
                  <p style={{ fontSize: '13px', color: tokens.colors.secondary }}>
                    {editingEmployee ? `Editing profile for ${editingEmployee.name}` : 'Fill in the details to provision a new work identity.'}
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  style={{ background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.secondary }}>close</span>
                </button>
              </div>

              {/* Scrollable Form Body */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '28px 32px' }}>

                {/* Section: Credentials */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: tokens.colors.accent }}>passkey</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: tokens.colors.accent }}>Account Credentials</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Full Legal Name</label>
                      <input style={styles.input} value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Jane Smith" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Corporate Email</label>
                      <input style={styles.input} type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="jane@cyberseal.com" />
                    </div>
                    {!editingEmployee ? (
                      <div>
                        <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Temp Password</label>
                        <input style={styles.input} type="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} placeholder="••••••••" />
                      </div>
                    ) : (
                      <div>
                        <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>System ID</label>
                        <input style={{ ...styles.input, background: '#F8FAFC', color: tokens.colors.secondary, cursor: 'not-allowed', fontFamily: 'monospace', letterSpacing: '0.05em' }} value={editingEmployee.id.slice(0, 8).toUpperCase()} disabled />
                      </div>
                    )}
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Employee Code</label>
                      <input style={{ ...styles.input, fontFamily: 'monospace' }} value={formData.empCode} onChange={e => setFormData({ ...formData, empCode: e.target.value })} placeholder="CS-0001" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Gender</label>
                      <select style={styles.input} value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: tokens.colors.border, margin: '4px 0 24px' }} />

                {/* Section: Work */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: tokens.colors.accent }}>work</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: tokens.colors.accent }}>Work Assignment</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Department</label>
                      <select style={styles.input} value={formData.dept} onChange={e => setFormData({ ...formData, dept: e.target.value })}>
                        <option value="">Select Department</option>
                        {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                        {departments.length === 0 && <>
                          <option>Engineering</option><option>Product</option>
                          <option>Operations</option><option>HR</option>
                          <option>Sales</option><option>Finance</option><option>Legal</option>
                        </>}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Designation</label>
                      <select style={styles.input} value={formData.designation} onChange={e => setFormData({ ...formData, designation: e.target.value })}>
                        <option value="">Select Designation</option>
                        {designations.map(d => <option key={d.id} value={d.name}>{d.name}{d.level ? ` (L${d.level})` : ''}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Job Title / Role</label>
                      <input style={styles.input} value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. Senior Security Analyst" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Reporting Manager</label>
                      <select style={styles.input} value={formData.reportingManager} onChange={e => setFormData({ ...formData, reportingManager: e.target.value })}>
                        <option value="">Select Manager</option>
                        {employees.filter(e => e.id !== editingEmployee?.id).map(e => <option key={e.id} value={e.id}>{e.name} ({e.dept || 'No dept'})</option>)}
                      </select>
                    </div>

                    {/* CTC Annual */}
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>CTC Per Annum (₹)</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', fontWeight: '700', color: tokens.colors.secondary }}>₹</span>
                        <input
                          style={{ ...styles.input, paddingLeft: '28px' }}
                          type="number" min="0"
                          value={formData.ctcAnnual}
                          onChange={e => setFormData({ ...formData, ctcAnnual: e.target.value })}
                          placeholder="e.g. 600000"
                        />
                      </div>
                      {formData.ctcAnnual > 0 && (
                        <div style={{ fontSize: '12px', color: tokens.colors.accent, marginTop: '4px', fontWeight: '600' }}>
                          {formatLPA(formData.ctcAnnual)} per annum
                        </div>
                      )}
                    </div>

                    {/* Metro toggle */}
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>City Type</label>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {['Metro', 'Non-Metro'].map(c => (
                          <button key={c} type="button"
                            onClick={() => setFormData({ ...formData, isMetro: c === 'Metro' })}
                            style={{
                              flex: 1, padding: '10px', borderRadius: tokens.radius.md, fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                              border: `1.5px solid ${(formData.isMetro ? 'Metro' : 'Non-Metro') === c ? tokens.colors.accent : tokens.colors.border}`,
                              background: (formData.isMetro ? 'Metro' : 'Non-Metro') === c ? '#F0FDFA' : tokens.colors.white,
                              color: (formData.isMetro ? 'Metro' : 'Non-Metro') === c ? tokens.colors.accent : tokens.colors.secondary,
                            }}
                          >{c}</button>
                        ))}
                      </div>
                      <div style={{ fontSize: '11px', color: tokens.colors.secondary, marginTop: '4px' }}>
                        HRA: {formData.isMetro ? '50%' : '40%'} of Basic
                      </div>
                    </div>

                    {/* TDS override */}
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Monthly TDS (₹)</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '14px', fontWeight: '700', color: tokens.colors.secondary }}>₹</span>
                        <input style={{ ...styles.input, paddingLeft: '28px' }} type="number" min="0"
                          value={formData.tdsMonthly}
                          onChange={e => setFormData({ ...formData, tdsMonthly: e.target.value })}
                          placeholder="0"
                        />
                      </div>
                    </div>

                    {/* Live salary preview */}
                    {formData.ctcAnnual > 0 && (() => {
                      const s = calcSalary({ ctcAnnual: formData.ctcAnnual, isMetro: formData.isMetro, tdsMonthly: formData.tdsMonthly });
                      return (
                        <div style={{ gridColumn: 'span 2', background: 'linear-gradient(135deg, #F0FDFA, #ECFDF5)', borderRadius: tokens.radius.md, padding: '14px 16px', border: `1px solid ${tokens.colors.accent}30` }}>
                          <div style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>Salary Preview</div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                            {[
                              { label: 'Gross / mo', value: formatINR(s.gross) },
                              { label: 'In-Hand / mo', value: formatINR(s.netInHand) },
                              { label: 'Basic / mo', value: formatINR(s.basic) },
                              { label: 'HRA / mo', value: formatINR(s.hra) },
                              { label: 'Emp PF / mo', value: formatINR(s.employeePF) },
                              { label: 'Prof Tax', value: formatINR(s.profTax) },
                            ].map(item => (
                              <div key={item.label}>
                                <div style={{ fontSize: '10px', color: tokens.colors.secondary, fontWeight: '700', marginBottom: '2px' }}>{item.label}</div>
                                <div style={{ fontSize: '13px', fontWeight: '800', color: tokens.colors.primary }}>{item.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: tokens.colors.border, margin: '4px 0 24px' }} />

                {/* Section: Private */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: tokens.colors.accent }}>lock_person</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: tokens.colors.accent }}>Private Details</span>
                    <span style={{ marginLeft: '4px', fontSize: '10px', color: tokens.colors.secondary, background: '#F1F5F9', padding: '2px 8px', borderRadius: '999px', fontWeight: '600' }}>Encrypted</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Phone Number</label>
                      <input style={styles.input} value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Personal Email</label>
                      <input style={styles.input} type="email" value={formData.personalEmail} onChange={e => setFormData({ ...formData, personalEmail: e.target.value })} placeholder="personal@gmail.com" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Date of Birth</label>
                      <input style={styles.input} type="date" value={formData.dob} onChange={e => setFormData({ ...formData, dob: e.target.value })} />
                    </div>
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Home Address</label>
                      <textarea style={{ ...styles.input, minHeight: '60px', resize: 'none' }} value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} placeholder="Street address" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>City</label>
                      <input style={styles.input} value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} placeholder="e.g. Pune" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>State</label>
                      <input style={styles.input} value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} placeholder="e.g. Maharashtra" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Pincode</label>
                      <input style={styles.input} value={formData.pincode} onChange={e => setFormData({ ...formData, pincode: e.target.value })} placeholder="411001" />
                    </div>
                  </div>
                  {/* Emergency Contact */}
                  <div style={{ marginTop: '20px' }}>
                    <div style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, marginBottom: '10px' }}>Emergency Contact</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Contact Name</label>
                        <input style={styles.input} value={formData.emergencyContactName} onChange={e => setFormData({ ...formData, emergencyContactName: e.target.value })} placeholder="Spouse / Parent name" />
                      </div>
                      <div>
                        <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Contact Phone</label>
                        <input style={styles.input} value={formData.emergencyContactPhone} onChange={e => setFormData({ ...formData, emergencyContactPhone: e.target.value })} placeholder="+91 98765 43210" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: tokens.colors.border, margin: '4px 0 24px' }} />

                {/* Section: Employment Lifecycle */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: tokens.colors.accent }}>badge</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: tokens.colors.accent }}>Employment Lifecycle</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Employment Type</label>
                      <select style={styles.input} value={formData.employmentType} onChange={e => setFormData({ ...formData, employmentType: e.target.value })}>
                        <option value="fulltime">Full-Time</option>
                        <option value="parttime">Part-Time</option>
                        <option value="contract">Contract</option>
                        <option value="intern">Intern</option>
                        <option value="ojt">OJT Trainee</option>
                        <option value="consultant">Consultant</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Status</label>
                      <select style={styles.input} value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
                        <option value="Active">Active</option>
                        <option value="Probation">Probation</option>
                        <option value="Notice Period">Notice Period</option>
                        <option value="Suspended">Suspended</option>
                        <option value="Exited">Exited</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Joining Date</label>
                      <input style={styles.input} type="date" value={formData.joiningDate} onChange={e => setFormData({ ...formData, joiningDate: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Confirmation Date</label>
                      <input style={styles.input} type="date" value={formData.confirmationDate} onChange={e => setFormData({ ...formData, confirmationDate: e.target.value })} />
                    </div>
                    {formData.status === 'Exited' && (
                      <div>
                        <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Exit Date</label>
                        <input style={styles.input} type="date" value={formData.exitDate} onChange={e => setFormData({ ...formData, exitDate: e.target.value })} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: tokens.colors.border, margin: '4px 0 24px' }} />

                {/* Section: Statutory & Compliance */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: '#D97706' }}>verified_user</span>
                    <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D97706' }}>Statutory & Compliance</span>
                    <span style={{ marginLeft: '4px', fontSize: '10px', color: tokens.colors.secondary, background: '#FEF3C7', padding: '2px 8px', borderRadius: '999px', fontWeight: '600' }}>PII</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>PAN Number</label>
                      <input style={{ ...styles.input, textTransform: 'uppercase' }} value={statutoryData.pan} onChange={e => setStatutoryData({ ...statutoryData, pan: e.target.value.toUpperCase() })} placeholder="ABCDE1234F" maxLength={10} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Aadhaar Number</label>
                      <input style={styles.input} value={statutoryData.aadhaar} onChange={e => setStatutoryData({ ...statutoryData, aadhaar: e.target.value.replace(/\D/g, '') })} placeholder="1234 5678 9012" maxLength={12} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Bank Account No.</label>
                      <input style={styles.input} value={statutoryData.bankAccount} onChange={e => setStatutoryData({ ...statutoryData, bankAccount: e.target.value })} placeholder="Account number" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>Bank IFSC Code</label>
                      <input style={{ ...styles.input, textTransform: 'uppercase' }} value={statutoryData.bankIfsc} onChange={e => setStatutoryData({ ...statutoryData, bankIfsc: e.target.value.toUpperCase() })} placeholder="SBIN0001234" maxLength={11} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>UAN (PF)</label>
                      <input style={styles.input} value={statutoryData.uan} onChange={e => setStatutoryData({ ...statutoryData, uan: e.target.value })} placeholder="Universal Account Number" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, display: 'block', marginBottom: '6px' }}>ESI Number</label>
                      <input style={styles.input} value={statutoryData.esiNumber} onChange={e => setStatutoryData({ ...statutoryData, esiNumber: e.target.value })} placeholder="ESI number (if applicable)" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Sticky Footer */}
              <div style={{
                padding: '20px 32px',
                borderTop: `1px solid ${tokens.colors.border}`,
                display: 'flex',
                gap: '12px',
                backgroundColor: '#FAFBFC',
              }}>
                <button
                  onClick={() => setShowModal(false)}
                  style={{ ...styles.button.outline, flex: 1, padding: '13px', fontSize: '14px', fontWeight: '700' }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  style={{
                    ...styles.button.primary,
                    flex: 2,
                    padding: '13px',
                    fontSize: '14px',
                    fontWeight: '800',
                    background: `linear-gradient(135deg, ${tokens.colors.accent} 0%, #0F766E 100%)`,
                    boxShadow: '0 8px 24px -8px rgba(13,148,136,0.5)',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    {editingEmployee ? 'save' : 'person_add'}
                  </span>
                  {editingEmployee ? 'Save Changes' : 'Create Employee'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Employees;