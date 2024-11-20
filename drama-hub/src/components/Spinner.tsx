import React from 'react'

const Spinner: React.FC = () => {
    return (
        <div className="loading-spinner" id="loadingSpinner">
        <div className="spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
};

export default Spinner;