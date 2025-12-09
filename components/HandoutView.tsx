import React from 'react';
import { SlideContent, SlideType } from '../types';

interface HandoutViewProps {
  slides: SlideContent[];
}

export const HandoutView: React.FC<HandoutViewProps> = ({ slides }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8">
      <div className="text-center mb-8 pb-8 border-b border-gray-300">
        <h1 className="text-2xl font-serif font-bold mb-2">Presentation Handouts</h1>
        <p className="text-gray-600">The Algorithmic Looking Glass | Chris Royse</p>
      </div>

      <div className="space-y-8">
        {slides.map((slide) => (
          <div key={slide.id} className="print-break-inside-avoid flex flex-row gap-6 border-b border-gray-200 pb-8 mb-8">
            {/* Slide Miniature */}
            <div className="w-1/2 border border-black h-64 p-4 flex flex-col relative bg-gray-50 overflow-hidden">
               <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-2">{slide.title}</h3>
                  {slide.subtitle && <p className="text-sm italic mb-2">{slide.subtitle}</p>}
                  
                  {slide.type !== SlideType.TITLE && (
                     <ul className="list-disc list-inside text-xs space-y-1 text-gray-700">
                     {slide.bullets?.slice(0, 4).map((b, i) => (
                       <li key={i}>{b.length > 80 ? b.substring(0, 80) + '...' : b}</li>
                     ))}
                   </ul>
                  )}
               </div>
               <div className="text-right text-xs mt-2 text-gray-500">{slide.id}</div>
            </div>

            {/* Note Taking Area */}
            <div className="w-1/2 flex flex-col justify-between py-2">
               <div className="text-sm font-bold text-gray-400 mb-2">NOTES:</div>
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="border-b border-gray-300 w-full h-8"></div>
               ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 text-gray-400 text-sm">
        Generated for Thesis Defense - Kansas State University
      </div>
    </div>
  );
};
