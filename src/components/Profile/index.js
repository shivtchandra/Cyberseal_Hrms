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
                // Doc ID matches Firebase Auth UID
                setProfile({ ...data, _docId: user.uid });
                setFormData({ ...data, _docId: user.uid });
                setLoading(false);
            } else {
                // Firestore employee doc was created with auto-generated ID — find by email
                setLoading(true);
                const q = query(collection(db, 'employees'), where('email', '==', user.email));
                getDocs(q).then(snap => {
                    if (!snap.empty) {
                        const data = snap.docs[0].data();
                        const docId = snap.docs[0].id;
                        setProfile({ ...data, _docId: docId });
                        setFormData({ ...data, _docId: docId });
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
            const docId = profile._docId || user.uid;
            await updateDoc(doc(db, 'employees', docId), { password: newPass.next });
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
            const docId = profile._docId || user.uid;
            await updateDoc(doc(db, 'employees', docId), {
                phone: formData.phone || '',
                address: formData.address || '',
                bio: formData.bio || '',
                skills: formData.skills || [],
                emergencyContact: formData.emergencyContact || '',
                emergencyPhone: formData.emergencyPhone || ''
            });
            setEditing(false);
        } catch (err) {
            console.error(err);
            alert("Failed to update profile.");
        }
    };

    const Label = ({ children }) => (
        <div style={{ fontSize: '11px', fontWeight: '800', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
            {children}
        </div>
    );

    const Value = ({ children, muted }) => (
        <div style={{ fontSize: '14px', fontWeight: '600', color: muted ? tokens.colors.secondary : tokens.colors.primary }}>
            {children}
        </div>
    );

    if (loading) return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '48px', color: tokens.colors.secondary }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>hourglass_top</span>
            Loading profile...
        </div>
    );

    if (error) return (
        <div style={{ padding: '48px', textAlign: 'center', background: '#FEF2F2', borderRadius: tokens.radius.lg, border: '1px solid #FCA5A5' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#DC2626', display: 'block', marginBottom: '16px' }}>error</span>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#991B1B', marginBottom: '8px' }}>{error}</div>
            <p style={{ color: '#B91C1C', fontSize: '14px' }}>Contact HR to link your record (Email: {user.email}).</p>
        </div>
    );

    return (
        <div className="animate-fade">

            {/* ── Page Title ── */}
            <div style={{ marginBottom: '32px' }}>
                <h2 style={styles.greeting}>My Profile</h2>
                <p style={{ color: tokens.colors.secondary, fontSize: '14px', marginTop: '4px' }}>
                    Your corporate identity and personal record.
                </p>
            </div>

            {/* ── Hero Card ── */}
            <div style={{
                ...styles.card,
                padding: '32px 40px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
            }}>
                {/* Avatar */}
                <div style={{
                    width: '88px', height: '88px', flexShrink: 0,
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${tokens.colors.accent}18 0%, ${tokens.colors.accent}35 100%)`,
                    border: `2px solid ${tokens.colors.accent}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '36px', fontWeight: '800', color: tokens.colors.accent,
                }}>
                    {profile.name?.charAt(0).toUpperCase()}
                </div>

                {/* Identity */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary, letterSpacing: '-0.02em', marginBottom: '4px' }}>
                        {profile.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '14px', color: tokens.colors.secondary, fontWeight: '500' }}>{profile.role}</span>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: tokens.colors.border, display: 'inline-block' }} />
                        <span style={{ fontSize: '14px', color: tokens.colors.secondary, fontWeight: '500' }}>{profile.dept}</span>
                    </div>
                </div>

                {/* Stats strip */}
                <div style={{ display: 'flex', gap: '32px', flexShrink: 0 }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Status</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: tokens.colors.success, display: 'inline-block' }} />
                            <span style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.success }}>Active</span>
                        </div>
                    </div>
                    <div style={{ width: '1px', background: tokens.colors.border }} />
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Joined</div>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary }}>
                            {new Date(profile.joinedDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
                        </div>
                    </div>
                    <div style={{ width: '1px', background: tokens.colors.border }} />
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>Email</div>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: tokens.colors.primary }}>{profile.email}</div>
                    </div>
                </div>

                {/* Edit action */}
                <button
                    onClick={() => editing ? handleUpdate() : setEditing(true)}
                    style={{ ...styles.button[editing ? 'primary' : 'outline'], padding: '10px 20px', flexShrink: 0 }}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{editing ? 'check' : 'edit'}</span>
                    {editing ? 'Save' : 'Edit Profile'}
                </button>
            </div>

            {/* ── Body Grid ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

                {/* Personal Information */}
                <div style={{ ...styles.card, padding: '28px 32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#F0FDFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.accent }}>person</span>
                        </div>
                        <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>Personal Info</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <Label>Phone Number</Label>
                            {editing ? (
                                <input style={styles.input} value={formData.phone || ''} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
                            ) : (
                                <Value muted={!profile.phone}>{profile.phone || 'Not registered'}</Value>
                            )}
                        </div>
                        <div>
                            <Label>Date of Birth</Label>
                            <Value muted={!profile.dob}>{profile.dob || 'Private'}</Value>
                        </div>
                        <div>
                            <Label>Home Address</Label>
                            {editing ? (
                                <textarea style={{ ...styles.input, minHeight: '72px', resize: 'none' }} value={formData.address || ''} onChange={e => setFormData({ ...formData, address: e.target.value })} placeholder="Full address..." />
                            ) : (
                                <Value muted={!profile.address}>{profile.address || 'Not specified'}</Value>
                            )}
                        </div>
                    </div>
                </div>

                {/* Emergency Contact */}
                <div style={{ ...styles.card, padding: '28px 32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#F97316' }}>emergency_home</span>
                        </div>
                        <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>Emergency Contact</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <Label>Contact Name</Label>
                            {editing ? (
                                <input style={styles.input} value={formData.emergencyContact || ''} onChange={e => setFormData({ ...formData, emergencyContact: e.target.value })} placeholder="Full name & relation" />
                            ) : (
                                <Value muted={!profile.emergencyContact}>{profile.emergencyContact || 'Not set'}</Value>
                            )}
                        </div>
                        <div>
                            <Label>Phone</Label>
                            {editing ? (
                                <input style={styles.input} value={formData.emergencyPhone || ''} onChange={e => setFormData({ ...formData, emergencyPhone: e.target.value })} placeholder="+1 (555) 000-0000" />
                            ) : (
                                <Value muted={!profile.emergencyPhone}>{profile.emergencyPhone || 'Not set'}</Value>
                            )}
                        </div>
                    </div>
                </div>

                {/* Skills & Bio */}
                <div style={{ ...styles.card, padding: '28px 32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#F0FDFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.accent }}>psychology</span>
                        </div>
                        <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>Skills & Bio</h3>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Label>Skill Matrix</Label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                            {(formData.skills || ['Management', 'Communication', 'Strategic Planning']).map(skill => (
                                <div key={skill} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', fontSize: '12px', fontWeight: '600', background: '#F0FDFA', color: tokens.colors.accent, border: '1px solid #CCFBF1', borderRadius: tokens.radius.full }}>
                                    {skill}
                                    {editing && (
                                        <span className="material-symbols-outlined" style={{ fontSize: '14px', cursor: 'pointer', opacity: 0.5 }} onClick={() => setFormData({ ...formData, skills: (formData.skills || []).filter(s => s !== skill) })}>close</span>
                                    )}
                                </div>
                            ))}
                            {editing && (
                                <input
                                    style={{ ...styles.input, width: '120px', padding: '5px 12px', fontSize: '12px', borderStyle: 'dashed', background: 'transparent' }}
                                    placeholder="+ Add skill"
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
                    <div>
                        <Label>Professional Bio</Label>
                        {editing ? (
                            <textarea style={{ ...styles.input, minHeight: '100px', resize: 'none', marginTop: '8px' }} value={formData.bio || ''} onChange={e => setFormData({ ...formData, bio: e.target.value })} placeholder="Brief professional summary..." />
                        ) : (
                            <p style={{ fontSize: '14px', color: profile.bio ? tokens.colors.primary : tokens.colors.secondary, lineHeight: '1.7', fontWeight: '500', marginTop: '4px' }}>
                                {profile.bio || 'No bio added yet. Click Edit Profile to add one.'}
                            </p>
                        )}
                    </div>
                </div>

                {/* Security */}
                <div style={{ ...styles.card, padding: '28px 32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.secondary }}>shield</span>
                        </div>
                        <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>Account Security</h3>
                    </div>

                    <button
                        onClick={() => setShowPasswordModal(true)}
                        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: '#F8FAFC', border: `1px solid ${tokens.colors.border}`, borderRadius: tokens.radius.md, cursor: 'pointer', transition: 'all 0.2s', marginBottom: '12px' }}
                        onMouseOver={e => e.currentTarget.style.borderColor = tokens.colors.accent}
                        onMouseOut={e => e.currentTarget.style.borderColor = tokens.colors.border}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: tokens.colors.accent }}>lock_reset</span>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>Change Password</div>
                                <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>Update your login credentials</div>
                            </div>
                        </div>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.secondary }}>chevron_right</span>
                    </button>

                    <div style={{ padding: '16px', background: '#F8FAFC', border: `1px solid ${tokens.colors.border}`, borderRadius: tokens.radius.md, display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: 0.5 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: tokens.colors.secondary }}>history</span>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: tokens.colors.primary }}>Session History</div>
                                <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>Coming soon</div>
                            </div>
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, background: tokens.colors.border, padding: '3px 10px', borderRadius: '999px' }}>Soon</span>
                    </div>
                </div>

            </div>

            {/* ── Password Modal ── */}
            {showPasswordModal && (
                <div style={styles.modal}>
                    <div style={{ ...styles.card, width: '100%', maxWidth: '420px', padding: 0, overflow: 'hidden', boxShadow: tokens.shadow.xl }}>
                        <div style={{ padding: '28px 32px', borderBottom: `1px solid ${tokens.colors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: tokens.colors.primary }}>Change Password</h3>
                                <p style={{ fontSize: '13px', color: tokens.colors.secondary, marginTop: '2px' }}>Set a new secure credential.</p>
                            </div>
                            <button onClick={() => setShowPasswordModal(false)} style={{ background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '34px', height: '34px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: tokens.colors.secondary }}>close</span>
                            </button>
                        </div>
                        <form onSubmit={handlePasswordUpdate} style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Current Password</label>
                                <input type="password" style={styles.input} required value={newPass.current} onChange={e => setNewPass({ ...newPass, current: e.target.value })} placeholder="••••••••" />
                            </div>
                            <div>
                                <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>New Password</label>
                                <input type="password" style={styles.input} required value={newPass.next} onChange={e => setNewPass({ ...newPass, next: e.target.value })} placeholder="••••••••" />
                            </div>
                            <div>
                                <label style={{ fontSize: '12px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Confirm New Password</label>
                                <input type="password" style={styles.input} required value={newPass.confirm} onChange={e => setNewPass({ ...newPass, confirm: e.target.value })} placeholder="••••••••" />
                            </div>
                            <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                                <button type="button" onClick={() => setShowPasswordModal(false)} style={{ ...styles.button.outline, flex: 1 }}>Cancel</button>
                                <button type="submit" style={{ ...styles.button.primary, flex: 2 }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check</span>
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
