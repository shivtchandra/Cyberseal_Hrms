import React from 'react';

const AdminPanel = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Admin Panel</h1>
      <p>This page is accessible via the <code>/admin</code> route. It is not linked
        from the sidebar intentionally; just type the URL or use a redirect.
      </p>
      {/* add admin-specific controls here */}
    </div>
  );
};

export default AdminPanel;
