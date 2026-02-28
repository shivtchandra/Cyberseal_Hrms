import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Write an audit log entry to Firestore.
 * @param {string} action       - Short action name, e.g. 'LEAVE_APPROVED'
 * @param {object} details      - Contextual details (employee email, amount, etc.)
 * @param {string} adminEmail   - Email of the admin performing the action
 */
export const logAction = async (action, details = {}, adminEmail = 'system') => {
    try {
        await addDoc(collection(db, 'auditLog'), {
            action,
            details,
            performedBy: adminEmail,
            timestamp: new Date().toISOString(),
        });
    } catch (err) {
        // Never let audit logging break the main flow
        console.warn('Audit log write failed:', err);
    }
};
