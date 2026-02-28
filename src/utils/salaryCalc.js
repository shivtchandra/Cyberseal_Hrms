/**
 * Indian Payroll Calculation Utility
 * Based on standard Indian salary structure (CTC breakdown).
 */

/** Format a number as Indian Rupees (₹) with lakh/crore aware commas */
export const formatINR = (amount) => {
    const n = Math.round(Number(amount) || 0);
    return '₹' + n.toLocaleString('en-IN');
};

/** Format annual CTC in shorthand (L = Lakhs) */
export const formatLPA = (annual) => {
    const l = (Number(annual) || 0) / 100000;
    return l % 1 === 0 ? `${l}L` : `${l.toFixed(2)}L`;
};

/**
 * Calculate full monthly salary breakdown from CTC.
 * @param {object} params
 * @param {number} params.ctcAnnual   - Total CTC per annum (INR)
 * @param {boolean} params.isMetro   - Metro city? (affects HRA %)
 * @param {number} params.tdsMonthly - TDS per month (admin-set override)
 * @returns {object} Full salary breakdown
 */
export const calcSalary = ({ ctcAnnual = 0, isMetro = true, tdsMonthly = 0 }) => {
    const ctc = Number(ctcAnnual) || 0;
    const monthly = ctc / 12;

    // Employer PF = 12% of Basic; Basic = 40% of CTC/12
    const basic = Math.round(monthly * 0.40);
    const employerPF = Math.round(basic * 0.12);
    const gross = Math.round(monthly - employerPF);   // Gross = CTC/12 - Employer PF
    const hra = Math.round(basic * (isMetro ? 0.50 : 0.40));
    const specialAllow = Math.max(0, gross - basic - hra);

    // Deductions
    const employeePF = Math.round(basic * 0.12);           // Employee PF (12% of Basic)
    const profTax = 200;                                  // Professional Tax: ₹200/month (most states)
    const tds = Math.round(Number(tdsMonthly) || 0);
    const totalDeductions = employeePF + profTax + tds;
    const netInHand = gross - totalDeductions;

    return {
        // Earnings
        ctcAnnual: ctc,
        ctcMonthly: Math.round(monthly),
        basic,
        hra,
        specialAllow,
        gross,
        // Employer-side (part of CTC, not in-hand)
        employerPF,
        // Deductions from gross
        employeePF,
        profTax,
        tds,
        totalDeductions,
        // Take-home
        netInHand,
    };
};
