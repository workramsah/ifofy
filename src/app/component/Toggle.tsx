'use client';

import { useState } from 'react';

export default function Toggle() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center">
                <label className="inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="sr-only peer" 
                    />
                    <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[rgba(72,128,255,1)]"></div>
                    
                </label>
            </div>
        </>
    )
}