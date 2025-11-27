import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars (INCREASED)
    const stars = [];
    const numStars = 600;
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Shooting stars (MORE FREQUENT)
    const shootingStars = [];
    
    const createShootingStar = () => {
      if (Math.random() > 0.95) { // More frequent
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 120 + 60,
          speed: Math.random() * 15 + 8,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        });
      }
    };

    // Planets
    const planets = [
      { x: canvas.width * 0.15, y: canvas.height * 0.3, radius: 40, color1: '#4338ca', color2: '#6366f1', speed: 0.0002, angle: 0 },
      { x: canvas.width * 0.85, y: canvas.height * 0.6, radius: 50, color1: '#0891b2', color2: '#06b6d4', speed: 0.0003, angle: Math.PI },
      { x: canvas.width * 0.75, y: canvas.height * 0.2, radius: 30, color1: '#7c3aed', color2: '#a78bfa', speed: 0.00025, angle: Math.PI / 2 },
    ];

    // Moons
    const moons = [
      { planet: 0, distance: 70, size: 8, speed: 0.002, angle: 0, color: '#94a3b8' },
      { planet: 1, distance: 80, size: 10, speed: 0.0015, angle: Math.PI, color: '#cbd5e1' },
      { planet: 1, distance: 100, size: 6, speed: 0.001, angle: 0, color: '#e2e8f0' },
    ];

    // Asteroids / Space Dust
    const asteroids = [];
    for (let i = 0; i < 50; i++) {
      asteroids.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.2,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw planets
      planets.forEach((planet) => {
        // Planet glow
        const gradient = ctx.createRadialGradient(planet.x, planet.y, 0, planet.x, planet.y, planet.radius * 1.5);
        gradient.addColorStop(0, planet.color2 + '40');
        gradient.addColorStop(0.5, planet.color1 + '20');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet body
        const planetGrad = ctx.createRadialGradient(
          planet.x - planet.radius * 0.3,
          planet.y - planet.radius * 0.3,
          0,
          planet.x,
          planet.y,
          planet.radius
        );
        planetGrad.addColorStop(0, planet.color2);
        planetGrad.addColorStop(1, planet.color1);
        ctx.fillStyle = planetGrad;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Atmosphere/ring effect
        ctx.strokeStyle = planet.color2 + '30';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(planet.x, planet.y + planet.radius * 0.2, planet.radius * 1.3, planet.radius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        // Slow rotation
        planet.angle += planet.speed;
      });
      
      // Draw moons
      moons.forEach((moon) => {
        const planet = planets[moon.planet];
        const moonX = planet.x + Math.cos(moon.angle) * moon.distance;
        const moonY = planet.y + Math.sin(moon.angle) * moon.distance;
        
        // Moon glow
        ctx.beginPath();
        ctx.arc(moonX, moonY, moon.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = moon.color + '40';
        ctx.fill();
        
        // Moon body
        ctx.beginPath();
        ctx.arc(moonX, moonY, moon.size, 0, Math.PI * 2);
        ctx.fillStyle = moon.color;
        ctx.fill();
        
        moon.angle += moon.speed;
      });
      
      // Draw asteroids/space dust
      asteroids.forEach((asteroid) => {
        ctx.beginPath();
        ctx.arc(asteroid.x, asteroid.y, asteroid.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${asteroid.opacity})`;
        ctx.fill();
        
        asteroid.x += asteroid.vx;
        asteroid.y += asteroid.vy;
        
        if (asteroid.x < 0) asteroid.x = canvas.width;
        if (asteroid.x > canvas.width) asteroid.x = 0;
        if (asteroid.y < 0) asteroid.y = canvas.height;
        if (asteroid.y > canvas.height) asteroid.y = 0;
      });
      
      // Draw and update stars
      stars.forEach((star) => {
        // Twinkling effect
        star.opacity += star.twinkleSpeed;
        if (star.opacity > 1 || star.opacity < 0.3) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move star slightly
        star.x += star.vx;
        star.y += star.vy;
        
        // Wrap around screen
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });
      
      // Create new shooting stars occasionally
      createShootingStar();
      
      // Draw and update shooting stars
      shootingStars.forEach((star, index) => {
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        const endX = star.x + Math.cos(star.angle) * star.length;
        const endY = star.y + Math.sin(star.angle) * star.length;
        ctx.lineTo(endX, endY);
        
        const gradient = ctx.createLinearGradient(star.x, star.y, endX, endY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Move shooting star
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.015;
        
        // Remove if off screen or faded
        if (star.opacity <= 0 || star.x > canvas.width || star.y > canvas.height) {
          shootingStars.splice(index, 1);
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default Starfield;
