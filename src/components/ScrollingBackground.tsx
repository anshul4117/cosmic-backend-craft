import { useEffect, useRef } from 'react';

interface ScrollingBackgroundProps {
  variant?: 'dots' | 'waves' | 'grid' | 'gradient';
  speed?: number;
  opacity?: number;
}

const ScrollingBackground = ({ 
  variant = 'dots', 
  speed = 1,
  opacity = 0.1 
}: ScrollingBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let offset = 0;

    const animate = () => {
      offset += speed;
      if (variant === 'dots') {
        container.style.backgroundPosition = `${offset}px ${offset}px`;
      } else if (variant === 'waves') {
        container.style.backgroundPosition = `${offset * 2}px 0`;
      } else if (variant === 'grid') {
        container.style.backgroundPosition = `${offset}px ${offset}px`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [variant, speed]);

  const getBackgroundPattern = () => {
    const primary = 'hsl(266, 83%, 58%)';
    
    switch (variant) {
      case 'dots':
        return `radial-gradient(circle at 1px 1px, ${primary} 1px, transparent 0)`;
      case 'waves':
        return `linear-gradient(90deg, transparent 0%, ${primary} 50%, transparent 100%)`;
      case 'grid':
        return `
          linear-gradient(${primary} 1px, transparent 1px),
          linear-gradient(90deg, ${primary} 1px, transparent 1px)
        `;
      case 'gradient':
        return `linear-gradient(45deg, ${primary}, transparent, ${primary})`;
      default:
        return '';
    }
  };

  const getBackgroundSize = () => {
    switch (variant) {
      case 'dots':
        return '20px 20px';
      case 'waves':
        return '60px 20px';
      case 'grid':
        return '40px 40px';
      case 'gradient':
        return '200px 200px';
      default:
        return '20px 20px';
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: getBackgroundPattern(),
        backgroundSize: getBackgroundSize(),
        opacity,
        zIndex: 1,
      }}
    />
  );
};

export default ScrollingBackground;