import React from 'react';

export function ImageGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-20">
      <img 
        src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80"
        alt="Fashion" 
        className="w-full h-[400px] object-cover rounded-lg"
      />
      <img 
        src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80"
        alt="Fashion" 
        className="w-full h-[400px] object-cover rounded-lg"
      />
    </div>
  );
}