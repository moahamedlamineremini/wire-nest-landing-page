import React from 'react';

export function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-gray-600">
      <nav className="py-6 px-4">
      <img 
          src="/img/logo-wire-nest.jpg" 
          alt="Wire Nest" 
          className="h-32 mx-auto transform transition-transform duration-500" 
          style={{ animation: 'slideIn 1s forwards' }}
        />
      </nav>
    </footer>
  );
}