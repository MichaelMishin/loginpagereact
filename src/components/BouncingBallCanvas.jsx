import React, { useEffect } from 'react';
import utils from '../js/utils';
import utilElasticCollision from '../js/utilElasticCollision';

const BouncingBallCanvas = ({width, height}) => {
  //https://en.wikipedia.org/wiki/Elastic_collision

  const particleCount = 75;
  const particleSpeed = .8;
  const particleRadius = 50;
  const maxRadius = 55;
  const minRadius = 15;
  const maxOpacity = 0.5;

  const innerWidth = width;
  const innerHeight = height;

  useEffect(() => {
    const canvas = document.getElementById('bouncingBallCanvas');
    const c = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const mouse = {
      x: innerWidth / 2,
      y: innerHeight / 2
    };

    const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

    // Event Listeners
    document.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    document.addEventListener('resize', () => {
      canvas.width = width;
      canvas.height = height;

      init();
    });

    // Objects
    class Particle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.velocity = {
          x: (Math.random() - 0.5) * particleSpeed,
          y: (Math.random() - 0.5) * particleSpeed
        };

        this.radius = Math.random() * radius;
        if (this.radius < minRadius) {
          this.radius = minRadius;
        }
        this.originalRadius = this.radius;

        this.color = color;

        this.mass = this.radius;
        this.originalMass = this.mass;

        this.opacity = 0;
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.save();
        c.globalAlpha = this.opacity;
        c.fillStyle = this.color;
        c.fill();
        c.restore();
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();
      }

      update = particles => {
        this.draw();

        for (let i = 0; i < particles.length; i++) {
          if (this === particles[i]) continue;
          if (utils.distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
            utilElasticCollision.resolveCollision(this, particles[i]);
          }
        }

        if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
          this.velocity.x = -this.velocity.x;
        }

        if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
          this.velocity.y = -this.velocity.y;
        }

        // mouse collision detection (increase particle radius)
        if (utils.distance(mouse.x, mouse.y, this.x, this.y) < 120 && this.radius < maxRadius) {
          this.radius += .05;
          this.mass += .05;

        } else if (this.radius > this.originalRadius) {
          this.radius -= 0.5;
          this.mass -= 0.5;

          this.radius = Math.max(this.originalRadius, this.radius);
          this.mass = Math.max(this.originalMass, this.mass);
        }

        // mouse collision detection (increase particle opacity)
        if (utils.distance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity < maxOpacity) {
          this.opacity += 0.02;

        } else if (this.opacity > 0) {
          this.opacity -= 0.02;

          this.opacity = Math.max(0, this.opacity);
        }


        this.x += this.velocity.x;
        this.y += this.velocity.y;
      }
    }

    // Implementation
    let particles;

    function init() {
      particles = [];

      var retryCounter = 0;
      for (let i = 0; i < particleCount; i++) {
        const radius = particleRadius;
        let x = utils.randomIntFromRange(radius, canvas.width - radius);
        let y = utils.randomIntFromRange(radius, canvas.height - radius);

        const color = utils.randomColor(colors);

        // make sure particles don't overlap

        if (i !== 0) {
          for (let j = 0; j < particles.length; j++) {
            if (utils.distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
              x = utils.randomIntFromRange(radius, canvas.width - radius);
              y = utils.randomIntFromRange(radius, canvas.height - radius);

              retryCounter++;
              j = -1;
            }
            // make sure we don't get stuck in an infinite loop
            if (retryCounter > 500) {
              break;
            }
          }
          // make sure we don't get stuck in an infinite loop
          if (retryCounter > 500) {
            break;
          }
        }

        particles.push(new Particle(x, y, radius, color));
      }
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update(particles);
      });
    }

    init();
    animate();
  }, [height, width, innerHeight, innerWidth]);

  return (
    <canvas id='bouncingBallCanvas' />
  )
}

export default BouncingBallCanvas