// Shared global styles and component styles
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { margin: 0; background: #f0f4f8; }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(255,215,0,0.7); }
    70% { box-shadow: 0 0 0 10px rgba(255,215,0,0); }
    100% { box-shadow: 0 0 0 0 rgba(255,215,0,0); }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
  @keyframes glow {
    from { filter: drop-shadow(0 0 5px gold); }
    to { filter: drop-shadow(0 0 20px gold); }
  }
  .pulse { animation: pulse 2s infinite; }
  .float { animation: float 3s ease-in-out infinite; }
  .glow { animation: glow 2s ease-in-out infinite alternate; }
`;

export const styles = {
  app: {
    display: 'flex',
    minHeight: '100vh',
    background: 'linear-gradient(145deg, #f6f9fc 0%, #eef2f7 100%)',
    fontFamily: "'Inter', sans-serif",
  },
  sidebar: {
    width: '280px',
    background: 'rgba(26, 32, 44, 0.95)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '30px 20px',
    boxShadow: '10px 0 30px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid rgba(255,215,0,0.2)',
  },
  logo: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#ffd700',
    textShadow: '0 0 20px gold',
  },
  menuItem: (active) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '12px',
    marginBottom: '8px',
    cursor: 'pointer',
    background: active ? 'rgba(255,215,0,0.15)' : 'transparent',
    color: active ? '#ffd700' : 'rgba(255,255,255,0.7)',
    transition: 'all 0.3s',
    border: active ? '1px solid rgba(255,215,0,0.3)' : '1px solid transparent',
    boxShadow: active ? '0 0 20px rgba(255,215,0,0.3)' : 'none',
  }),
  main: {
    flex: 1,
    padding: '30px 40px',
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '15px',
  },
  greeting: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a2639',
    textShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  searchBar: {
    background: 'white',
    borderRadius: '50px',
    padding: '8px 20px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    width: '320px',
    border: '1px solid rgba(255,215,0,0.3)',
    transition: 'all 0.3s',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    padding: '10px 12px',
    width: '100%',
    fontSize: '15px',
    background: 'transparent',
  },
  // Dashboard stats
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
    marginBottom: '40px',
  },
  statCard: {
    background: 'white',
    borderRadius: '24px',
    padding: '25px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    border: '1px solid rgba(255,215,0,0.2)',
  },
  statValue: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#1e3a5f',
  },
  statLabel: {
    color: '#6b7280',
    fontSize: '15px',
    marginTop: '5px',
  },
  // Table common
  tableContainer: {
    background: 'white',
    borderRadius: '24px',
    padding: '25px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,215,0,0.2)',
  },
  tableHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
  },
  addButton: {
    background: 'linear-gradient(145deg, #ffd700, #ffaa00)',
    color: '#1a202c',
    padding: '12px 28px',
    borderRadius: '40px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(255,215,0,0.4)',
    transition: 'all 0.3s',
    border: '1px solid rgba(255,255,255,0.3)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '15px 16px',
    background: '#f8fafd',
    color: '#4a5568',
    fontWeight: '600',
    fontSize: '14px',
    borderBottom: '2px solid #e2e8f0',
  },
  td: {
    padding: '15px 16px',
    borderBottom: '1px solid #edf2f7',
    color: '#2d3748',
    fontSize: '14px',
  },
  actionButtons: {
    display: 'flex',
    gap: '8px',
  },
  editButton: {
    background: '#ffc107',
    border: 'none',
    color: '#1a202c',
    padding: '6px 16px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(255,193,7,0.3)',
  },
  deleteButton: {
    background: '#f56565',
    border: 'none',
    color: 'white',
    padding: '6px 16px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(245,101,101,0.3)',
  },
  // Modal
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
  },
  modal: {
    background: 'white',
    borderRadius: '30px',
    padding: '35px',
    width: '450px',
    maxWidth: '90%',
    boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
    border: '1px solid gold',
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '25px',
    color: '#1e3a5f',
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    marginBottom: '20px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '15px',
    transition: 'border 0.2s',
  },
  modalButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '15px',
    marginTop: '25px',
  },
  saveButton: {
    background: 'linear-gradient(145deg, #48bb78, #38a169)',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '40px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 10px 20px rgba(72,187,120,0.3)',
  },
  cancelButton: {
    background: '#a0aec0',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '40px',
    fontSize: '15px',
    cursor: 'pointer',
  },
  // Attendance specific
  clockCard: {
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderRadius: '30px',
    padding: '30px',
    color: 'white',
    marginBottom: '35px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 20px 40px rgba(102,126,234,0.4)',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  clockButton: {
    background: 'white',
    color: '#4a5568',
    border: 'none',
    padding: '14px 40px',
    borderRadius: '50px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transition: 'all 0.3s',
  },
  calendarContainer: {
    background: 'white',
    borderRadius: '30px',
    padding: '25px',
    marginBottom: '35px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255,215,0,0.2)',
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '5px',
    marginTop: '20px',
  },
  calDayHeader: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#4a5568',
    padding: '10px',
    background: '#f7fafc',
    borderRadius: '10px',
  },
  calDay: {
    background: '#f7fafc',
    borderRadius: '12px',
    padding: '12px',
    textAlign: 'center',
    fontSize: '14px',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  presentDay: {
    background: '#c6f6d5',
    color: '#22543d',
    fontWeight: '600',
    boxShadow: '0 0 15px #48bb78',
  },
  absentDay: {
    background: '#fed7d7',
    color: '#742a2a',
    fontWeight: '600',
    boxShadow: '0 0 15px #f56565',
  },
  statusBadge: (status) => ({
    padding: '6px 16px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: '500',
    background: status === 'present' ? '#c6f6d5' : '#fed7d7',
    color: status === 'present' ? '#22543d' : '#742a2a',
    display: 'inline-block',
  }),
  // Leaves specific
  leaveBalanceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  leaveBalanceCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
  },
  leaveBalanceLabel: {
    fontSize: '16px',
    color: '#4a5568',
    marginBottom: '10px',
  },
  leaveBalanceValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1e3a5f',
  },
  leaveBalanceSub: {
    fontSize: '14px',
    color: '#718096',
  },
  requestCard: {
    background: '#f7fafc',
    borderRadius: '16px',
    padding: '15px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Date modal
  dateModal: {
    textAlign: 'center',
  },
  dateModalDate: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1e3a5f',
    marginBottom: '20px',
  },
  dateModalButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
};
