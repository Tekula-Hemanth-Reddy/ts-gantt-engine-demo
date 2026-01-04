import React from "react";
import './fallback.css'

const Fallback = React.memo(()=>{
    return <div className="suspense-container">
      <div className="loader" />
      <span className="loader-text">
        Loading <strong className="loader-title">ts-gantt-engine</strong> docs…
      </span>
    </div>
});

Fallback.displayName = 'Fallback';
export default Fallback;
