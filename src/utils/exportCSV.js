/**
 * Export data to a CSV file — no libraries needed.
 * @param {object[]} rows   - Array of plain objects
 * @param {string}   filename  - e.g. 'attendance-report.csv'
 * @param {string[]} [columns] - Optional ordered column keys; defaults to first row's keys
 */
export const exportToCSV = (rows, filename, columns) => {
    if (!rows || rows.length === 0) {
        alert('No data to export.');
        return;
    }
    const cols = columns || Object.keys(rows[0]);
    const header = cols.join(',');
    const body = rows.map(row =>
        cols.map(col => {
            const val = row[col] ?? '';
            // Wrap in quotes if contains comma, newline, or quotes
            const str = String(val).replace(/"/g, '""');
            return /[,\n"]/.test(str) ? `"${str}"` : str;
        }).join(',')
    ).join('\n');

    const csv = `${header}\n${body}`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};
