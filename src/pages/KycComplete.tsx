import React from 'react';

const KycComplete = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
          <circle cx="12" cy="12" r="12" fill="#12C8C0"/>
          <path d="M8 12.5l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h1 className="text-3xl font-bold text-foreground mb-2 text-center">ID validation completed</h1>
        <p className="text-muted-foreground text-center">Your identity has been successfully verified.</p>
      </div>
    </div>
  );
};

export default KycComplete;
