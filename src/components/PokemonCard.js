import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({mon}) {

  const [isClicked, setIsClicked]=useState(false)

  return (
    <Card onClick={()=>setIsClicked(!isClicked)}>
      <div>
        <div className="image">
          <img src={isClicked ? mon.sprites.back : mon.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{mon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {mon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
