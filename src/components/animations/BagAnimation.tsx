import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BagAnimationProps {
  className?: string;
}

export const BagAnimation = ({ className = '' }: BagAnimationProps) => {
  const bagRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bagRef.current || !containerRef.current) return;

    const bag = bagRef.current;
    const container = containerRef.current;

    // Create coin particles
    const createCoinParticle = (x: number, y: number, delay: number = 0) => {
      const coin = document.createElement('div');
      coin.innerHTML = '💰';
      coin.style.position = 'absolute';
      coin.style.fontSize = '20px';
      coin.style.pointerEvents = 'none';
      coin.style.zIndex = '10';
      coin.style.left = `${x}px`;
      coin.style.top = `${y}px`;
      coin.style.transform = 'translate(-50%, -50%)';
      
      container.appendChild(coin);

      // Animate coin
      gsap.set(coin, { 
        scale: 0,
        rotation: 0,
        opacity: 1
      });

      const tl = gsap.timeline({ delay });
      
      tl.to(coin, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)'
      })
      .to(coin, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-80, -120),
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(1.5, 2.5),
        ease: 'power2.out'
      }, 0.2)
      .to(coin, {
        scale: 0.3,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      }, '-=0.5')
      .call(() => {
        coin.remove();
      });
    };

    // Main bag animation
    const animateBag = () => {
      const tl = gsap.timeline();
      
      // Initial drop from above
      gsap.set(bag, {
        y: -200,
        scale: 0.8,
        rotation: gsap.utils.random(-15, 15)
      });

      // First bounce
      tl.to(bag, {
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: 'bounce.out'
      })
      .call(() => {
        // Spawn coins on first bounce
        for (let i = 0; i < 8; i++) {
          createCoinParticle(
            gsap.utils.random(20, 80),
            gsap.utils.random(20, 60),
            i * 0.1
          );
        }
      })
      .to(bag, {
        scale: 1.1,
        duration: 0.1,
        ease: 'power2.out'
      })
      .to(bag, {
        scale: 1,
        duration: 0.2,
        ease: 'elastic.out(1, 0.3)'
      })
      .to(bag, {
        y: -20,
        duration: 0.3,
        ease: 'power2.out'
      })
      .to(bag, {
        y: 0,
        duration: 0.4,
        ease: 'bounce.out'
      })
      .call(() => {
        // Spawn more coins on second bounce
        for (let i = 0; i < 5; i++) {
          createCoinParticle(
            gsap.utils.random(30, 70),
            gsap.utils.random(30, 50),
            i * 0.05
          );
        }
      })
      .to(bag, {
        scale: 1.05,
        duration: 0.1,
        ease: 'power2.out'
      })
      .to(bag, {
        scale: 1,
        duration: 0.15,
        ease: 'elastic.out(1, 0.5)'
      });

      // Continuous gentle bounce
      tl.to(bag, {
        y: -5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });
    };

    // Start animation after a short delay
    const timer = setTimeout(animateBag, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{ width: '100px', height: '100px' }}
    >
      <div
        ref={bagRef}
        className="text-6xl select-none"
        style={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
        }}
      >
        💰
      </div>
    </div>
  );
};

