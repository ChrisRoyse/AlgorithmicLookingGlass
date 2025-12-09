
import React from 'react';
import { SlideContent, SlideType } from '../types';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { ArrowDown } from 'lucide-react';

interface SlideViewerProps {
  slide: SlideContent;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({ slide }) => {
  
  const renderVisual = () => {
    if (slide.type === SlideType.THEORY_VISUAL && slide.visualData) {
      
      // Handle SCATTER variant (Marcia's Statuses)
      if (slide.visualVariant === 'SCATTER' || !slide.visualVariant) {
        return (
          <div className="h-full w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col">
             <div className="text-center text-xl font-bold mb-4 text-kstate-purple tracking-wide uppercase">Marcia's Identity Statuses</div>
             <div className="flex-grow">
               <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 40, right: 60, bottom: 40, left: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
                  <XAxis type="number" dataKey="x" name="Exploration" unit="%" tick={false} domain={[0, 100]} label={{ value: 'Exploration →', position: 'bottom', offset: 0, fontSize: 18, fill: '#666' }} />
                  <YAxis type="number" dataKey="y" name="Commitment" unit="%" tick={false} domain={[0, 100]} label={{ value: 'Commitment →', angle: -90, position: 'left', fontSize: 18, fill: '#666' }} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  <Scatter name="Statuses" data={slide.visualData} fill="#8884d8">
                     {slide.visualData.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#512888' : '#9F7AEA'} />
                      ))}
                      <LabelList dataKey="name" position="top" offset={15} style={{ fill: '#1F2937', fontWeight: 'bold', fontSize: '16px' }} />
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
             </div>
          </div>
        );
      }

      // Handle CYCLE variant (Doom Loop)
      if (slide.visualVariant === 'CYCLE') {
        const count = slide.visualData.length;
        const radius = 180; // Distance from center
        
        return (
          <div className="h-full w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-kstate-purple opacity-5 z-0 rounded-full scale-90"></div>
             
             {/* Center Label */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
               <h3 className="text-3xl font-serif font-bold text-kstate-purple">The Doom<br/>Loop</h3>
             </div>

             {/* Circular Nodes */}
             <div className="relative w-[500px] h-[500px] z-10">
                {slide.visualData.map((item: any, index: number) => {
                  // Calculate position in circle starting from top (-90 degrees)
                  const angle = (index / count) * 2 * Math.PI - Math.PI / 2;
                  // Radius percentage relative to container size (50% is edge)
                  // Using fixed pixel offsets for cleaner layout in fixed container
                  const x = 250 + radius * Math.cos(angle);
                  const y = 250 + radius * Math.sin(angle);

                  return (
                    <React.Fragment key={index}>
                      <div 
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-40"
                        style={{ left: x, top: y }}
                      >
                         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kstate-purple to-purple-500 text-white flex items-center justify-center text-xl font-bold shadow-lg mb-2 z-20 border-4 border-white">
                           {index + 1}
                         </div>
                         <div className="text-center">
                           <div className="font-bold text-slate-800 leading-tight">{item.label}</div>
                           <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{item.desc}</div>
                         </div>
                      </div>
                      
                      {/* Arrows between nodes */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                         <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" fill="#E5E7EB" />
                            </marker>
                         </defs>
                         {/* Draw arc to next node */}
                         {/* Complex to calculate perfect arcs dynamically, defaulting to simple connection logic or visual arrows in nodes */}
                      </svg>
                    </React.Fragment>
                  );
                })}

                {/* Decorative circular track */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
                   <circle cx="250" cy="250" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="8 8" />
                </svg>
             </div>
          </div>
        );
      }
    }
    return null;
  };

  const renderContent = () => {
    switch (slide.type) {
      case SlideType.TITLE:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center relative z-10 p-16">
            <div className="w-24 h-1 bg-kstate-purple mb-12"></div>
            <h1 className="text-7xl font-serif font-bold text-kstate-purple leading-tight mb-8 tracking-tight">
              {slide.title}
            </h1>
            <h2 className="text-3xl text-gray-600 font-light max-w-5xl leading-relaxed mb-12">
              {slide.subtitle}
            </h2>
             {slide.bullets && (
              <div className="flex flex-col gap-2 text-gray-500 font-medium">
                {slide.bullets.map((b, i) => (
                  <p key={i} className="text-xl tracking-wide uppercase">{b}</p>
                ))}
              </div>
            )}
          </div>
        );

      case SlideType.SPLIT_IMAGE:
        return (
          <div className="grid grid-cols-2 gap-16 h-full items-center p-16">
            <div className="space-y-10">
              <h2 className="text-6xl font-serif font-bold text-kstate-purple leading-tight">
                {slide.title}
              </h2>
              <div className="w-20 h-1.5 bg-gray-200 rounded-full"></div>
              <ul className="space-y-6">
                {slide.bullets?.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-2xl text-gray-700 leading-snug">
                    <span className="mr-4 text-kstate-purple text-3xl mt-[-2px]">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full py-8">
              {slide.image && (
                <div className="h-full w-full relative group">
                  <div className="absolute inset-0 bg-kstate-purple transform translate-x-4 translate-y-4 rounded-xl opacity-10"></div>
                  <img 
                    src={slide.image} 
                    alt="Slide Visual" 
                    className="relative rounded-xl shadow-lg object-cover h-full w-full z-10 border border-gray-100"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case SlideType.THEORY_VISUAL:
        return (
          <div className="grid grid-cols-2 gap-12 h-full items-center p-16">
             <div className="space-y-8 order-1">
              <h2 className="text-5xl font-serif font-bold text-kstate-purple border-l-8 border-kstate-purple pl-6">
                {slide.title}
              </h2>
              {slide.subtitle && <h3 className="text-3xl text-gray-500 pl-8 font-light italic">{slide.subtitle}</h3>}
              <ul className="space-y-5 pl-8 mt-8">
                {slide.bullets?.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-2xl text-gray-700">
                    <span className="mr-3 text-kstate-purple font-bold">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-2 h-[80%]">
              {renderVisual()}
            </div>
          </div>
        );

      case SlideType.SECTION_HEADER:
         return (
          <div className="flex flex-col items-center justify-center h-full text-center p-16">
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-20 shadow-sm max-w-5xl w-full">
              <h2 className="text-6xl font-serif font-bold text-kstate-purple mb-16">
                {slide.title}
              </h2>
               <div className="space-y-6 text-left">
                  {slide.bullets?.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-6 p-4 rounded-lg hover:bg-white transition-colors">
                      <div className="w-12 h-12 rounded-full bg-kstate-light flex items-center justify-center text-kstate-purple font-bold text-xl flex-shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-2xl text-gray-800 font-medium">{bullet}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        );

      default: // BULLET
        return (
          <div className="flex flex-col h-full p-16 pt-20">
            <div className="flex items-end gap-6 mb-12 pb-6 border-b border-gray-200">
               <div className="w-3 h-16 bg-kstate-purple rounded-t-sm"></div>
               <h2 className="text-6xl font-serif font-bold text-slate-900 mb-1">
                 {slide.title}
               </h2>
            </div>
            <div className="flex-grow pl-10">
              <ul className="space-y-8 max-w-5xl">
                {slide.bullets?.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-3xl text-gray-700 leading-normal">
                    <span className="mr-6 text-kstate-purple opacity-50 text-2xl mt-1">◆</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 text-slate-900 overflow-hidden flex flex-col relative">
      {/* Top Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-kstate-purple to-kstate-light z-20"></div>

      {/* Decorative Background Element for Title Slide */}
      {slide.type === SlideType.TITLE && (
        <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-kstate-purple opacity-5 rounded-bl-full pointer-events-none z-0"></div>
      )}
      
      <div className="flex-grow relative z-10">
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="h-16 px-16 flex justify-between items-center text-gray-400 text-sm font-sans border-t border-gray-100 bg-white/50 backdrop-blur-sm z-20">
        <span className="uppercase tracking-widest text-xs font-bold text-gray-300">{slide.footer || "The Algorithmic Looking Glass"}</span>
        <span className="font-mono">{slide.id}</span>
      </div>
    </div>
  );
};
