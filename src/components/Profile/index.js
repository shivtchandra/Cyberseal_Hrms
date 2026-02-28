import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, onSnapshot, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { styles, tokens } from '../../styles';

const Profile = ({ user }) => {
    const [profile, setProfile] = useState(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({});
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [newPass, setNewPass] = useState({ current: '', next: '', confirm: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!user.uid) return;

        const checkByUid = onSnapshot(doc(db, 'employees', user.uid), (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.data();
                setProfile(data);
                setFormData(data);
                setLoading(false);
            } else {
                // If not found by UID, try finding by email (common for Auth users)
                setLoading(true);
                const q = query(collection(db, 'employees'), where('email', '==', user.email));
                getDocs(q).then(snap => {
                    if (!snap.empty) {
                        const data = snap.docs[0].data();
                        setProfile({ ...data, id: snap.docs[0].id });
                        setFormData(data);
                    } else {
                        setError("Profile record not found in directory.");
                    }
                    setLoading(false);
                }).catch(err => {
                    console.error(err);
                    setError("Failed to fetch profile data.");
                    setLoading(false);
                });
            }
        }, (err) => {
            console.error(err);
            setError("Connection to profile service lost.");
            setLoading(false);
        });

        return () => checkByUid();
    }, [user.uid, user.email]);

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();
        if (newPass.next !== newPass.confirm) return alert("Passwords do not match.");
        if (newPass.current !== profile.password) return alert("Incorrect current password.");

        try {
            await updateDoc(doc(db, 'employees', user.uid), {
                password: newPass.next
            });
            setShowPasswordModal(false);
            setNewPass({ current: '', next: '', confirm: '' });
            alert("Password updated successfully!");
        } catch (err) {
            console.error(err);
            alert("Failed to update password.");
        }
    };

    const handleUpdate = async () => {
        try {
            await updateDoc(doc(db, 'employees', user.uid), {
                phone: formData.phone || '',
                address: formData.address || '',
                bio: formData.bio || '',
                skills: formData.skills || [],
                emergencyContact: formData.emergencyContact || 'Sarah Doe (Spouse)',
                emergencyPhone: formData.emergencyPhone || '+1 (555) 999-8888'
            });
            setEditing(false);
        } catch (err) {
            console.error(err);
            alert("Failed to update profile.");
        }
    };

    if (loading) return <div style={{ padding: '40px', color: tokens.colors.textMuted }}>Loading profile...</div>;

    if (error) {
        return (
            <div style={{ padding: '60px', textAlign: 'center', background: '#FEF2F2', borderRadius: '12px', border: '1px solid #FCA5A5' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#DC2626', marginBottom: '16px' }}>error</span>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#991B1B', marginBottom: '8px' }}>{error}</div>
                <p style={{ color: '#B91C1C', fontSize: '14px' }}>Please contact HR to ensure your employee record is correctly linked to your login (Email: {user.email}).</p>
            </div>
        );
    }

    return (
        <div className="animate-fade">
            <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>My Profile</h2>
                <p style={{ color: tokens.colors.textMuted, fontSize: '14px' }}>View and manage your personal employment details.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ ...styles.card, textAlign: 'center' }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: '#F3F4F6',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 16px',
                            fontSize: '32px',
                            fontWeight: '800',
                            color: tokens.colors.primary
                        }}>
                            {profile.name?.charAt(0)}
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '4px' }}>{profile.name}</h3>
                        <p style={{ color: tokens.colors.textMuted, fontSize: '14px', marginBottom: '24px' }}>{profile.role} • {profile.dept}</p>

                        <div style={{ textAlign: 'left', fontSize: '13px' }}>
                            <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: tokens.colors.textMuted }}>Status</span>
                                <span style={{ fontWeight: '600', color: tokens.colors.success }}>Active</span>
                            </div>
                            <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: tokens.colors.textMuted }}>Joined</span>
                                <span style={{ fontWeight: '600' }}>{new Date(profile.joinedDate).toLocaleDateString()}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: tokens.colors.textMuted }}>Email</span>
                                <span style={{ fontWeight: '600' }}>{profile.email}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ ...styles.card, background: tokens.colors.primary, color: 'white', border: 'none' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>Digital ID</h3>
                        <div style={{ fontSize: '12px', opacity: 0.8, marginBottom: '20px' }}>Use this QR code for building access and secure verification.</div>
                        <div style={{ background: 'white', padding: '16px', borderRadius: '12px', width: 'fit-content', margin: '0 auto' }}>
                            <span className="material-symbols-outlined" style={{ color: 'black', fontSize: '120px' }}>qr_code_2</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={styles.card}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>Personal Information</h3>
                            <button
                                onClick={() => editing ? handleUpdate() : setEditing(true)}
                                style={{ ...styles.button.outline, padding: '8px 16px' }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{editing ? 'save' : 'edit'}</span>
                                {editing ? 'Save Changes' : 'Update Details'}
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <div>
                                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.textMuted, display: 'block', marginBottom: '8px' }}>Phone Number</label>
                                {editing ? (
                                    <input
                                        style={styles.input}
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                ) : (
                                    <div style={{ fontWeight: '600' }}>{profile.phone || 'Not provided'}</div>
                                )}
                            </div>
                            <div>
                                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.textMuted, display: 'block', marginBottom: '8px' }}>Date of Birth</label>
                                <div style={{ fontWeight: '600' }}>{profile.dob || 'Not provided'}</div>
                            </div>
                            <div style={{ gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '13px', fontWeight: '600', color: tokens.colors.textMuted, display: 'block', marginBottom: '8px' }}>Mailing Address</label>
                                {editing ? (
                                    <textarea
                                        style={{ ...styles.input, minHeight: '80px', resize: 'none' }}
                                        value={formData.address}
                                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                                        placeholder="Enter your full home address..."
                                    />
                                ) : (
                                    <div style={{ fontWeight: '600' }}>{profile.address || 'Not provided'}</div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        <div style={styles.card}>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Emergency Contact</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div>
                                    <label style={{ fontSize: '12px', color: tokens.colors.textMuted }}>Contact Name</label>
                                    {editing ? (
                                        <input
                                            style={styles.input}
                                            value={formData.emergencyContact || ''}
                                            onChange={e => setFormData({ ...formData, emergencyContact: e.target.value })}
                                            placeholder="Sarah Doe (Spouse)"
                                        />
                                    ) : (
                                        <div style={{ fontWeight: '600' }}>{profile.emergencyContact || 'Sarah Doe (Spouse)'}</div>
                                    )}
                                </div>
                                <div>
                                    <label style={{ fontSize: '12px', color: tokens.colors.textMuted }}>Emergency Phone</label>
                                    {editing ? (
                                        <input
                                            style={styles.input}
                                            value={formData.emergencyPhone || ''}
                                            onChange={e => setFormData({ ...formData, emergencyPhone: e.target.value })}
                                            placeholder="+1 (555) 999-8888"
                                        />
                                    ) : (
                                        <div style={{ fontWeight: '600' }}>{profile.emergencyPhone || '+1 (555) 999-8888'}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div style={styles.card}>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Security & Auth</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <button
                                    onClick={() => setShowPasswordModal(true)}
                                    style={{ ...styles.button.outline, width: '100%', justifyContent: 'space-between' }}
                                >
                                    <span>Update Password</span>
                                    <span className="material-symbols-outlined">lock_reset</span>
                                </button>
                                <button style={{ ...styles.button.outline, width: '100%', justifyContent: 'space-between' }}>
                                    <span>Session History</span>
                                    <span className="material-symbols-outlined">history</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
                        <div style={styles.card}>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Professional Biography</h3>
                            {editing ? (
                                <textarea
                                    style={{ ...styles.input, minHeight: '120px', resize: 'none' }}
                                    value={formData.bio || ''}
                                    onChange={e => setFormData({ ...formData, bio: e.target.value })}
                                    placeholder="Describe your professional background, skills, and expertise..."
                                />
                            ) : (
                                <p style={{ fontSize: '14px', color: tokens.colors.secondary, lineHeight: '1.6' }}>
                                    {profile.bio || "No professional summary added yet. Use the 'Update Details' button to add your background, skills, and expertise to help your colleagues know you better."}
                                </p>
                            )}
                        </div>
                        <div style={styles.card}>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px' }}>Expertise & Skills</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {(formData.skills || ['Management', 'Communication', 'Strategic Planning']).map(skill => (
                                    <div key={skill} style={{ ...styles.badge('primary'), padding: '6px 12px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {skill}
                                        {editing && (
                                            <span
                                                className="material-symbols-outlined"
                                                style={{ fontSize: '14px', cursor: 'pointer' }}
                                                onClick={() => setFormData({ ...formData, skills: (formData.skills || []).filter(s => s !== skill) })}
                                            >close</span>
                                        )}
                                    </div>
                                ))}
                                {editing && (
                                    <input
                                        style={{ ...styles.input, width: '120px', padding: '4px 8px', fontSize: '12px' }}
                                        placeholder="+ Skill"
                                        onKeyDown={e => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                const val = e.target.value.trim();
                                                if (val && !(formData.skills || []).includes(val)) {
                                                    setFormData({ ...formData, skills: [...(formData.skills || []), val] });
                                                    e.target.value = '';
                                                }
                                            }
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showPasswordModal && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div style={{ ...styles.card, width: '100%', maxWidth: '400px', margin: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Update Password</h3>
                            <button onClick={() => setShowPasswordModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <form onSubmit={handlePasswordUpdate}>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Current Password</label>
                                <input
                                    type="password"
                                    style={styles.input}
                                    required
                                    value={newPass.current}
                                    onChange={e => setNewPass({ ...newPass, current: e.target.value })}
                                />
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>New Password</label>
                                <input
                                    type="password"
                                    style={styles.input}
                                    required
                                    value={newPass.next}
                                    onChange={e => setNewPass({ ...newPass, next: e.target.value })}
                                />
                            </div>
                            <div style={{ marginBottom: '32px' }}>
                                <label style={{ fontSize: '13px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Confirm New Password</label>
                                <input
                                    type="password"
                                    style={styles.input}
                                    required
                                    value={newPass.confirm}
                                    onChange={e => setNewPass({ ...newPass, confirm: e.target.value })}
                                />
                            </div>
                            <button type="submit" style={{ ...styles.button.primary, width: '100%', justifyContent: 'center', padding: '12px' }}>
                                Update Secret Key
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
