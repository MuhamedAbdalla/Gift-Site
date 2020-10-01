import React from 'react'
import Particles from 'react-particles-js';
import './Particles.css'

const particlesOptions = {
  particles:{
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    },

    number:{
      value: 30,
      density:{
         enable: true,
        value_area: 300
      }
    }
  }
}

class ParticlesEffect extends React.Component
{
    render()
    {
        return(
            <Particles className="particles" params={particlesOptions} />
        );
    }
}

export default ParticlesEffect;
