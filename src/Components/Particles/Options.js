export const defaultOptions = {
    fpsLimit: 10,
    background: {
      color: "#000"
    },

    // INTERACTIONS
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        resize: true,
      },
    },

    // PARTICLES
    particles: {
      color: {
        value: [
          "#4b98df",
          "#738da6",
          "#4890ff",
        ]
      },
      collisions: {
        enable: true,
        mode: "bounce"
      },
      links: {
        enable: true,
        distance: 150,
        consent: true
      },
      move: {
        //direction: "bottom-right",
        enable: true,
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        value: 40,
      },
      rotate: {
       random: {
         enable: false,
       } 
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: false,
        minimumvalue: 5,
        value: 100,
        animation: {
          enable: true,
          destroy: "none",
          minimumValue: 5,
          speed: 5,
          startValue: "min",
          sync: true
        }
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.009,
          opacity: 1
        }
      }
    },
    detectRetina: true,
}