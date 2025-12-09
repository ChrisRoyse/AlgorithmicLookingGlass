import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideViewer } from './components/SlideViewer';
import { HandoutView } from './components/HandoutView';
import { ChevronLeft, ChevronRight, Printer, Monitor, Info, Maximize2 } from 'lucide-react';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'presentation' | 'handout'>('presentation');
  const [showControls, setShowControls] = useState(true);

  // Auto-hide controls timer
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (viewMode === 'presentation') {
      const resetTimer = () => {
        setShowControls(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setShowControls(false), 3000);
      };

      window.addEventListener('mousemove', resetTimer);
      resetTimer(); // Init

      return () => {
        window.removeEventListener('mousemove', resetTimer);
        clearTimeout(timeout);
      };
    } else {
      setShowControls(true);
    }
  }, [viewMode]);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'handout') return;
      
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, viewMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${viewMode === 'presentation' ? 'bg-neutral-950' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Top Toolbar - Floating and Minimal in Presentation Mode */}
      <div 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print
          ${viewMode === 'presentation' 
            ? `bg-gradient-to-b from-black/80 to-transparent pt-4 pb-12 px-6 ${showControls ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}` 
            : 'bg-white border-b border-gray-200 p-4 shadow-sm'
          }`}
      >
        <div className="flex justify-between items-center max-w-[1920px] mx-auto">
          <div className="flex items-center gap-3">
             <div className={`w-8 h-8 rounded flex items-center justify-center font-serif font-bold ${viewMode === 'presentation' ? 'bg-white text-neutral-900' : 'bg-kstate-purple text-white'}`}>K</div>
             <span className={`font-semibold hidden sm:block ${viewMode === 'presentation' ? 'text-white/90' : 'text-gray-700'}`}>Thesis Defense</span>
          </div>

          <div className={`flex items-center gap-2 rounded-full p-1 ${viewMode === 'presentation' ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-gray-100'}`}>
            <button
              onClick={() => setViewMode('presentation')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all text-sm font-medium ${
                viewMode === 'presentation' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Monitor size={16} />
              <span className="hidden sm:inline">Slides</span>
            </button>
            <button
              onClick={() => setViewMode('handout')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all text-sm font-medium ${
                viewMode === 'handout' ? 'bg-white text-kstate-purple shadow-sm' : 'text-white/70 hover:text-white'
              }`}
            >
              <Printer size={16} />
              <span className="hidden sm:inline">Handouts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`w-full h-full ${viewMode === 'presentation' ? 'fixed inset-0 flex items-center justify-center p-4' : 'pt-24 pb-12'}`}>
        
        {viewMode === 'presentation' ? (
          <div className="relative w-full max-w-[1700px] aspect-video shadow-2xl bg-black">
             {/* The Slide Content - Clipped */}
             <div className="absolute inset-0 overflow-hidden bg-white">
                <SlideViewer slide={SLIDES[currentSlideIndex]} />
             </div>

             {/* Floating Navigation Controls - NOT Clipped (Outside overflow-hidden container) */}
             <div 
               className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-6 px-8 py-3 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500 z-50 ${showControls ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             >
                <button 
                  onClick={prevSlide}
                  disabled={currentSlideIndex === 0}
                  className="text-white/70 hover:text-white disabled:opacity-30 transition-transform hover:scale-110"
                >
                  <ChevronLeft size={32} />
                </button>

                <div className="text-white/50 text-sm font-medium tracking-widest w-16 text-center">
                  {currentSlideIndex + 1} / {SLIDES.length}
                </div>

                <button 
                  onClick={nextSlide}
                  disabled={currentSlideIndex === SLIDES.length - 1}
                  className="text-white/70 hover:text-white disabled:opacity-30 transition-transform hover:scale-110"
                >
                  <ChevronRight size={32} />
                </button>
             </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="no-print bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg mb-8 flex items-start gap-3 shadow-sm">
              <Info size={20} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold">Printing Instructions</p>
                <p className="text-sm">Press <kbd className="font-mono bg-white px-1 rounded border border-blue-200">Ctrl + P</kbd> (or Cmd + P) to print these handouts. They are formatted to fit 3 slides per page with note lines.</p>
              </div>
            </div>
            <HandoutView slides={SLIDES} />
          </div>
        )}
      </div>
    </div>
  );
}