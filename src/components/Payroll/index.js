'use client';
import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot, addDoc, doc, updateDoc } from 'firebase/firestore';
import { styles, tokens } from '../../styles';
import { calcSalary, formatINR, formatLPA } from '../../utils/salaryCalc';

/* ─── Indian month names ─── */
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/* ─── Payslip Print Component ─── */
const PayslipPrint = ({ payslip, employee, onClose }) => {
    const ref = useRef(null);
    const handlePrint = () => {
        const content = ref.current.innerHTML;
        const w = window.open('', '_blank');
        w.document.write(`<html><head><title>Payslip</title><style>body{font-family:sans-serif;padding:32px;color:#0F172A;}table{width:100%;border-collapse:collapse;}th,td{padding:8px 12px;border:1px solid #E2E8F0;text-align:left;}th{background:#F8FAFC;font-weight:700;}</style></head><body>${content}</body></html>`);
        w.document.close(); w.print();
    };
    const s = calcSalary({ ctcAnnual: employee.ctcAnnual, isMetro: employee.isMetro, tdsMonthly: employee.tdsMonthly });
    return (
        <div style={styles.modal}>
            <div style={{ background: '#fff', borderRadius: tokens.radius.xl, width: '640px', maxHeight: '90vh', overflowY: 'auto', padding: '40px' }}>
                <div ref={ref}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', paddingBottom: '16px', borderBottom: '2px solid #0D9488' }}>
                        <div>
                            <div style={{ fontSize: '22px', fontWeight: '800', color: '#0D9488' }}>Cyberseal Infosec Solutions Pvt. Ltd.</div>
                            <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>Salary Slip — {MONTHS[payslip.month - 1]} {payslip.year}</div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '12px', color: '#64748B' }}>
                            <div><strong>Emp ID:</strong> {employee.id?.slice(0, 8).toUpperCase()}</div>
                            <div><strong>PAN:</strong> {employee.pan || 'XXXXXXXXXX'}</div>
                        </div>
                    </div>
                    {/* Employee Details */}
                    <table style={{ marginBottom: '20px' }}>
                        <tbody>
                            <tr><td><strong>Name</strong></td><td>{employee.name}</td><td><strong>Department</strong></td><td>{employee.dept}</td></tr>
                            <tr><td><strong>Designation</strong></td><td>{employee.role}</td><td><strong>Location</strong></td><td>{employee.isMetro !== false ? 'Metro' : 'Non-Metro'}</td></tr>
                            <tr><td><strong>CTC p.a.</strong></td><td>{formatLPA(employee.ctcAnnual)}</td><td><strong>Bank A/C</strong></td><td>{employee.bankAccount || 'XXXXXXXX'}</td></tr>
                        </tbody>
                    </table>
                    {/* Earnings + Deductions */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                        <table>
                            <thead><tr><th colSpan="2" style={{ background: '#F0FDFA', color: '#0D9488' }}>Earnings</th></tr><tr><th>Component</th><th style={{ textAlign: 'right' }}>Amount</th></tr></thead>
                            <tbody>
                                <tr><td>Basic Salary</td><td style={{ textAlign: 'right' }}>{formatINR(s.basic)}</td></tr>
                                <tr><td>HRA</td><td style={{ textAlign: 'right' }}>{formatINR(s.hra)}</td></tr>
                                <tr><td>Special Allowance</td><td style={{ textAlign: 'right' }}>{formatINR(s.specialAllow)}</td></tr>
                                <tr style={{ fontWeight: '700', background: '#F8FAFC' }}><td>Gross Salary</td><td style={{ textAlign: 'right' }}>{formatINR(s.gross)}</td></tr>
                            </tbody>
                        </table>
                        <table>
                            <thead><tr><th colSpan="2" style={{ background: '#FEF2F2', color: '#DC2626' }}>Deductions</th></tr><tr><th>Component</th><th style={{ textAlign: 'right' }}>Amount</th></tr></thead>
                            <tbody>
                                <tr><td>Employee PF (12%)</td><td style={{ textAlign: 'right' }}>{formatINR(s.employeePF)}</td></tr>
                                <tr><td>Professional Tax</td><td style={{ textAlign: 'right' }}>{formatINR(s.profTax)}</td></tr>
                                <tr><td>TDS</td><td style={{ textAlign: 'right' }}>{formatINR(s.tds)}</td></tr>
                                <tr style={{ fontWeight: '700', background: '#F8FAFC' }}><td>Total Deductions</td><td style={{ textAlign: 'right' }}>{formatINR(s.totalDeductions)}</td></tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Net Pay */}
                    <div style={{ background: '#F0FDFA', border: '1.5px solid #14B8A6', borderRadius: '12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#134E4A' }}>Net In-Hand Salary</div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: '#14B8A6' }}>{formatINR(s.netInHand)}</div>
                    </div>
                    <div style={{ marginTop: '16px', fontSize: '11px', color: '#94A3B8', textAlign: 'center' }}>
                        This is a computer-generated payslip and does not require a signature. · Generated by Cyberseal HRMS
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                    <button onClick={onClose} style={{ ...styles.button.outline, flex: 1, justifyContent: 'center' }}>Close</button>
                    <button onClick={handlePrint} style={{ ...styles.button.primary, flex: 2, justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>print</span> Download / Print
                    </button>
                </div>
            </div>
        </div>
    );
};

/* ─── Admin Payroll Module ─── */
export const AdminPayroll = () => {
    const [employees, setEmployees] = useState([]);
    const [payrollRuns, setPayrollRuns] = useState([]);
    const now = new Date();
    const [selMonth, setSelMonth] = useState(now.getMonth() + 1);
    const [selYear, setSelYear] = useState(now.getFullYear());
    const [processing, setProcessing] = useState(false);
    const [viewPayslip, setViewPayslip] = useState(null);

    useEffect(() => {
        const u1 = onSnapshot(collection(db, 'employees'), s => setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        const u2 = onSnapshot(collection(db, 'payrollRuns'), s => setPayrollRuns(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        return () => { u1(); u2(); };
    }, []);

    const runId = `${selYear}-${String(selMonth).padStart(2, '0')}`;
    const existingRun = payrollRuns.find(r => r.runId === runId);

    const totalPayroll = employees.reduce((sum, e) => {
        if (!e.ctcAnnual) return sum;
        return sum + calcSalary({ ctcAnnual: e.ctcAnnual, isMetro: e.isMetro, tdsMonthly: e.tdsMonthly }).netInHand;
    }, 0);
    const totalPF = employees.reduce((sum, e) => {
        if (!e.ctcAnnual) return sum;
        const s = calcSalary({ ctcAnnual: e.ctcAnnual, isMetro: e.isMetro, tdsMonthly: e.tdsMonthly });
        return sum + s.employeePF + s.employerPF;
    }, 0);
    const totalTDS = employees.reduce((sum, e) => {
        if (!e.ctcAnnual) return sum;
        return sum + calcSalary({ ctcAnnual: e.ctcAnnual, isMetro: e.isMetro, tdsMonthly: e.tdsMonthly }).tds;
    }, 0);

    const processPayroll = async () => {
        setProcessing(true);
        await addDoc(collection(db, 'payrollRuns'), {
            runId, month: selMonth, year: selYear,
            totalEmployees: employees.filter(e => e.ctcAnnual).length,
            totalNetPayout: totalPayroll, totalPF, totalTDS,
            processedAt: new Date().toISOString(), status: 'processed',
        });
        // Write individual payslips
        for (const emp of employees.filter(e => e.ctcAnnual)) {
            const psId = `${emp.id}_${runId}`;
            await addDoc(collection(db, 'payslips'), {
                employeeId: emp.id, employeeEmail: emp.email, employeeName: emp.name,
                month: selMonth, year: selYear, runId,
                ctcAnnual: emp.ctcAnnual, isMetro: emp.isMetro, tdsMonthly: emp.tdsMonthly || 0,
                processedAt: new Date().toISOString(),
            });
        }
        setProcessing(false);
    };

    return (
        <div className="animate-fade">
            {viewPayslip && <PayslipPrint payslip={viewPayslip} employee={viewPayslip._employee} onClose={() => setViewPayslip(null)} />}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: tokens.colors.primary }}>Payroll Management</h2>
                    <p style={{ color: tokens.colors.secondary, fontSize: '14px' }}>Process monthly salaries and generate payslips.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <select style={{ ...styles.input, width: '140px' }} value={selMonth} onChange={e => setSelMonth(Number(e.target.value))}>
                        {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                    </select>
                    <select style={{ ...styles.input, width: '90px' }} value={selYear} onChange={e => setSelYear(Number(e.target.value))}>
                        {[2024, 2025, 2026].map(y => <option key={y}>{y}</option>)}
                    </select>
                </div>
            </div>

            {/* Summary cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
                {[
                    { label: 'Total Net Payout', value: formatINR(totalPayroll), icon: 'payments', color: '#059669', bg: '#ECFDF5' },
                    { label: 'Employees on Payroll', value: String(employees.filter(e => e.ctcAnnual).length), icon: 'group', color: tokens.colors.accent, bg: '#F0FDFA' },
                    { label: 'Total PF Contribution', value: formatINR(totalPF), icon: 'savings', color: '#8B5CF6', bg: '#F5F3FF' },
                    { label: 'Total TDS', value: formatINR(totalTDS), icon: 'account_balance', color: '#F97316', bg: '#FFF7ED' },
                ].map((c, i) => (
                    <div key={i} style={{ ...styles.card, padding: '20px', borderLeft: `3px solid ${c.color}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div style={{ fontSize: '11px', fontWeight: '700', color: tokens.colors.secondary, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                            <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '15px', color: c.color }}>{c.icon}</span>
                            </div>
                        </div>
                        <div style={{ fontSize: '22px', fontWeight: '800', color: tokens.colors.primary }}>{c.value}</div>
                    </div>
                ))}
            </div>

            {/* Employee payroll table */}
            <div style={styles.card}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary }}>
                        {MONTHS[selMonth - 1]} {selYear} — Payroll Register
                    </h3>
                    {existingRun ? (
                        <span style={{ fontSize: '12px', fontWeight: '700', background: '#ECFDF5', color: '#059669', padding: '6px 14px', borderRadius: '999px' }}>
                            ✅ Processed on {new Date(existingRun.processedAt).toLocaleDateString('en-IN')}
                        </span>
                    ) : (
                        <button onClick={processPayroll} disabled={processing || employees.filter(e => e.ctcAnnual).length === 0} style={{ ...styles.button.primary, padding: '10px 20px', fontSize: '13px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>sync</span>
                            {processing ? 'Processing…' : 'Run Payroll'}
                        </button>
                    )}
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead><tr>
                        <th style={styles.th}>Employee</th>
                        <th style={styles.th}>CTC p.a.</th>
                        <th style={styles.th}>Gross / mo</th>
                        <th style={styles.th}>PF (Emp)</th>
                        <th style={styles.th}>Prof Tax</th>
                        <th style={styles.th}>TDS</th>
                        <th style={{ ...styles.th, color: '#059669' }}>In-Hand</th>
                        <th style={{ ...styles.th, textAlign: 'right' }}>Slip</th>
                    </tr></thead>
                    <tbody>
                        {employees.filter(e => e.ctcAnnual).map(emp => {
                            const s = calcSalary({ ctcAnnual: emp.ctcAnnual, isMetro: emp.isMetro, tdsMonthly: emp.tdsMonthly });
                            return (
                                <tr key={emp.id}>
                                    <td style={styles.td}>
                                        <div style={{ fontWeight: '700' }}>{emp.name}</div>
                                        <div style={{ fontSize: '12px', color: tokens.colors.secondary }}>{emp.dept}</div>
                                    </td>
                                    <td style={{ ...styles.td, fontSize: '13px' }}>{formatLPA(emp.ctcAnnual)}</td>
                                    <td style={{ ...styles.td, fontWeight: '600' }}>{formatINR(s.gross)}</td>
                                    <td style={{ ...styles.td, fontSize: '13px', color: '#8B5CF6' }}>{formatINR(s.employeePF)}</td>
                                    <td style={{ ...styles.td, fontSize: '13px' }}>{formatINR(s.profTax)}</td>
                                    <td style={{ ...styles.td, fontSize: '13px', color: '#F97316' }}>{formatINR(s.tds)}</td>
                                    <td style={{ ...styles.td, fontWeight: '800', color: '#059669', fontSize: '15px' }}>{formatINR(s.netInHand)}</td>
                                    <td style={{ ...styles.td, textAlign: 'right' }}>
                                        <button onClick={() => setViewPayslip({ month: selMonth, year: selYear, _employee: emp })} style={{ ...styles.button.outline, padding: '6px 12px', fontSize: '12px' }}>
                                            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>receipt</span> View
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        {employees.filter(e => e.ctcAnnual).length === 0 && (
                            <tr><td colSpan="8" style={{ textAlign: 'center', padding: '40px', color: tokens.colors.secondary, fontSize: '14px' }}>
                                No employees have CTC configured. Add CTC in Workforce Directory → Edit.
                            </td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

/* ─── Employee Payslip View ─── */
const EmployeePayslips = ({ user }) => {
    const [payslips, setPayslips] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [viewPayslip, setViewPayslip] = useState(null);

    useEffect(() => {
        const u1 = onSnapshot(collection(db, 'payslips'), s => {
            setPayslips(s.docs.map(d => ({ id: d.id, ...d.data() })).filter(p => p.employeeEmail === user.email).sort((a, b) => b.year - a.year || b.month - a.month));
        });
        const u2 = onSnapshot(collection(db, 'employees'), s => setEmployees(s.docs.map(d => ({ id: d.id, ...d.data() }))));
        return () => { u1(); u2(); };
    }, [user.email]);

    const myEmployee = employees.find(e => e.email === user.email);

    return (
        <div className="animate-fade">
            {viewPayslip && myEmployee && <PayslipPrint payslip={viewPayslip} employee={myEmployee} onClose={() => setViewPayslip(null)} />}
            <div style={{ marginBottom: '28px' }}>
                <h2 style={styles.greeting}>My Payslips</h2>
                <p style={{ color: tokens.colors.secondary, fontSize: '14px', marginTop: '4px' }}>View and download your monthly salary slips.</p>
            </div>

            {/* Current salary snapshot */}
            {myEmployee?.ctcAnnual && (() => {
                const s = calcSalary({ ctcAnnual: myEmployee.ctcAnnual, isMetro: myEmployee.isMetro, tdsMonthly: myEmployee.tdsMonthly });
                return (
                    <div style={{ ...styles.card, marginBottom: '24px', borderLeft: '4px solid var(--color-accent)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                            <div>
                                <div style={{ fontSize: '12px', color: 'var(--color-secondary)', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '4px' }}>Current Monthly Package</div>
                                <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>{formatINR(s.netInHand)} <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--color-secondary)' }}>/ month in-hand</span></div>
                                <div style={{ fontSize: '13px', color: 'var(--color-secondary)', marginTop: '4px' }}>CTC: {formatLPA(myEmployee.ctcAnnual)} · Gross: {formatINR(s.gross)}/mo</div>
                            </div>
                            <div style={{ display: 'flex', gap: '24px' }}>
                                {[
                                    { l: 'Basic', v: formatINR(s.basic) },
                                    { l: 'HRA', v: formatINR(s.hra) },
                                    { l: 'PF Deduction', v: formatINR(s.employeePF) },
                                    { l: 'Prof Tax', v: formatINR(s.profTax) },
                                ].map(item => (
                                    <div key={item.l} style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '10px', color: 'var(--color-secondary)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>{item.l}</div>
                                        <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--color-accent)' }}>{item.v}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })()}

            {/* Payslip list */}
            <div style={styles.card}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: tokens.colors.primary, marginBottom: '20px' }}>Payslip History</h3>
                {payslips.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '48px', color: tokens.colors.secondary }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#CBD5E1', display: 'block', marginBottom: '12px' }}>receipt_long</span>
                        No payslips generated yet. Your HR will run payroll each month.
                    </div>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr>
                            <th style={styles.th}>Month</th>
                            <th style={styles.th}>Gross</th>
                            <th style={styles.th}>Deductions</th>
                            <th style={{ ...styles.th, color: '#059669' }}>Net In-Hand</th>
                            <th style={{ ...styles.th, textAlign: 'right' }}>Download</th>
                        </tr></thead>
                        <tbody>
                            {payslips.map(p => {
                                const s = calcSalary({ ctcAnnual: p.ctcAnnual, isMetro: p.isMetro, tdsMonthly: p.tdsMonthly });
                                return (
                                    <tr key={p.id}>
                                        <td style={{ ...styles.td, fontWeight: '700' }}>{MONTHS[p.month - 1]} {p.year}</td>
                                        <td style={styles.td}>{formatINR(s.gross)}</td>
                                        <td style={{ ...styles.td, color: '#DC2626' }}>{formatINR(s.totalDeductions)}</td>
                                        <td style={{ ...styles.td, fontWeight: '800', color: '#059669', fontSize: '15px' }}>{formatINR(s.netInHand)}</td>
                                        <td style={{ ...styles.td, textAlign: 'right' }}>
                                            <button onClick={() => setViewPayslip({ ...p, _employee: myEmployee })} style={{ ...styles.button.primary, padding: '6px 14px', fontSize: '12px' }}>
                                                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>receipt</span> View Slip
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default EmployeePayslips;
