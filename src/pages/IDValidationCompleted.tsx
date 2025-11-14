import React from 'react';

const IDValidationCompleted = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center border border-border/30">
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-primary/10 p-4 mb-2">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#12C8C0"/>
              <path d="M8 12.5l3 3 5-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground">ID validation completed</h1>
          <p className="text-muted-foreground text-lg">Your identity has been successfully verified.</p>
        </div>
      </div>
    </section>
  );
};

export default IDValidationCompleted;
