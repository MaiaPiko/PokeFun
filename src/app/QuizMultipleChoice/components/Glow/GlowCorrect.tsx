import React from 'react';



export default function GlowCorrect() {


  return (
    <div>
 
        <div
          className={`rounded-full bg-transparent hover:transition-shadow hover:ease-in hover:duration-600 hover:block }`}
          id="glow"
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1.2)",
            transition: "transform 0.6s",
            boxShadow:
              "0 0 120px 60px rgba(255,255,0, 0.3), " +
              "0 0 200px 120px rgba(80,200, 120,  0.5), " +
              "0 0 280px 180px rgba(245, 245, 220, 0.3)",
          }}
        ></div>
     
    
    </div>
  );
}
