import React, { useState } from 'react';
import './styles/PlayerCard.css';

const PlayerCard = ({ player, className }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleCard = () => {
    setExpanded(!expanded);
  };

  const resetCard = () => {
    setExpanded(false);
  };



  return (
    <div className={`player-card ${expanded ? 'expanded' : ''} ${className}`} onClick={toggleCard}>
      <div className="player-header">
        <div className="player-name">{player.name}</div>
        {expanded ? (
          <div className="expand-arrow" onClick={(e) => e.stopPropagation()}>
            <span onClick={resetCard}>↻</span>
          </div>
        ) : (
          <div className="expand-arrow">▼</div>
        )}
      </div>
      {expanded && (
        <div className={"player-info"} >
          <p>{player.bio}</p>
        </div>
      )}
      <img src={player.image} alt={player.name} />
    </div>
  );
};

export default PlayerCard;
