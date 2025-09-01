import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
}

const TargetCursor = ({ 
  targetSelector = ".cursor-target", 
  spinDuration = 2, 
  hideDefaultCursor = true 
}: TargetCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    const target = targetRef.current;
    
    if (!cursor || !target) return;

    // Initial setup
    gsap.set([cursor, target], { xPercent: -50, yPercent: -50 });
    
    // Spinning animation
    const spinTween = gsap.to(target, {
      rotation: 360,
      duration: spinDuration,
      ease: "none",
      repeat: -1
    });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to([cursor, target], {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Target elements interaction
    const targetElements = document.querySelectorAll(targetSelector);
    
    const handleMouseEnter = () => {
      gsap.to(target, {
        scale: 1.5,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      spinTween.pause();
    };

    const handleMouseLeave = () => {
      gsap.to(target, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => spinTween.resume()
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    targetElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      if (hideDefaultCursor) {
        document.body.style.cursor = 'auto';
      }
      window.removeEventListener('mousemove', handleMouseMove);
      targetElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      spinTween.kill();
    };
  }, [targetSelector, spinDuration, hideDefaultCursor]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        ref={cursorRef}
        className="absolute w-6 h-6 bg-primary rounded-full opacity-80"
      />
      <div
        ref={targetRef}
        className="absolute w-8 h-8 border-2 border-primary rounded-full"
      />
    </div>
  );
};

export default TargetCursor;