import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseSize: number;
}

interface InteractiveParticlesProps {
  count?: number;
  color?: string;
  speed?: number;
  baseSize?: number;
  spread?: number;
  mouseInteraction?: boolean;
  particleTransparency?: boolean;
  disableRotation?: boolean;
}

const InteractiveParticles = ({
  count = 200,
  color = '#8B5CF6',
  speed = 0.1,
  baseSize = 100,
  spread = 10,
  mouseInteraction = true,
  particleTransparency = true,
  disableRotation = false
}: InteractiveParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      
      for (let i = 0; i < count; i++) {
        const size = Math.random() * spread + 1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size,
          baseSize: size,
          opacity: particleTransparency ? Math.random() * 0.8 + 0.2 : 1,
        });
      }

      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Mouse interaction
        if (mouseInteraction) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = baseSize;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            particle.size = particle.baseSize * (1 + force * 2);
            particle.opacity = Math.min(1, particle.opacity + force * 0.5);
            
            // Repel particles from mouse
            particle.vx += (dx / distance) * force * 0.01;
            particle.vy += (dy / distance) * force * 0.01;
          } else {
            particle.size = particle.baseSize;
            if (particleTransparency) {
              particle.opacity = Math.max(0.2, particle.opacity - 0.01);
            }
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rotation effect
        if (!disableRotation) {
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const angle = Math.atan2(particle.y - centerY, particle.x - centerX);
          particle.vx += Math.cos(angle + Math.PI / 2) * 0.001;
          particle.vy += Math.sin(angle + Math.PI / 2) * 0.001;
        }

        // Wrap around edges
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Convert hex color to rgba for opacity
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    resizeCanvas();
    createParticles();
    
    if (isVisible) {
      animate();
    }

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    
    if (mouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [count, color, speed, baseSize, spread, mouseInteraction, particleTransparency, disableRotation, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveParticles;