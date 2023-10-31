import React, {useState} from 'react';
import PlayerCard from './PlayerCard';
import CommentForm from './review';
import styles from './style.css'



const players = [
  {
    name: 'Marcus Rashford',
    image: 'https://metro.co.uk/wp-content/uploads/2022/11/GettyImages-1441247238.jpg',
    bio: 'Marcus Rashford MBE, the English footballer, was born in Wythenshawe, Manchester. He is known for his prolific career as a forward, playing for Manchester United and the England national team known for his pace and thunderous strikes. Beyond his football success, Rashford is renowned for his impactful charity work and advocacy, particularly in combating child poverty and hunger in the United Kingdom. His campaigns and successful lobbying efforts have gave him a prestigious title of MBE and made him a prominent figure in the realm of social welfare and justice.',
  },
  {
    name: 'Bruno Fernandes',
    image:'https://metro.co.uk/wp-content/uploads/2023/07/SEI_154066666-0c73.jpg?quality=90&strip=all&zoom=1&resize=480%2C315',
    bio:"Portuguese midfielder Bruno Miguel Borges Fernandes, known as Bruno Fernandes, born on September 8, 1994, in Maia, is widely recognized for his role as a midfielder in football. Known for his play making abilities, precision in passing, and goal-scoring prowess, Fernandes has played for Sporting CP in Portugal and Manchester United in the English Premier League. Notably, Fernandes has captained both Sporting CP and Manchester United, displaying his leadership qualities on the field. His skills and contributions are instrumental to his team's success, making him a crucial player in midfield for both club and country.",
  },
  {
    name: 'Lisandro Martinez',
    image: 'https://talksport.com/wp-content/uploads/sites/5/2023/02/GettyImages-1247419017.jpg',
    bio: 'Lisandro Martínez is an Argentine professional football player who was born on January 18, 1998, in Gualeguay, Argentina. He is primarily known for his career as a center-back in football. Lisandro Martínez played for clubs like Ajax before arrive at Manchester United and the Argentina National Team. He is highly regarded for his defensive skills, including tackling, aggression, interceptions, and his ability to build play from the back. Martinez and his playing style made him a fan favorite soon enough at the Theater of Dreams. Martínez also made a noticeable impression for his country, in their latest tournament as he and his companions went on to become the World Cup Champion of 2022.',
  },
  {
    name:'Cristiano Ronaldo',
    image: 'https://www.thesun.co.uk/wp-content/uploads/2023/04/cristiano-ronaldo-runs-ball-fa-712706796.jpg',
    bio:"The Legend, Cristiano Ronaldo, born on February 5, 1985, in Funchal, Madeira, Portugal, is an icon of football greatness. His meteoric rise began during his young career at Manchester United, where he etched his name in the history of football. It's here when he won his first Ballon d'Or and Ronaldo's sheer talent and dedication were instrumental in propelling Manchester United to unparalleled heights, securing three English Premier League titles, one FA Cup, two English League Cups, and the UEFA Champions League trophy in 2008. Later, at Real Madrid, Ronaldo achieved the eternal legendary status, securing numerous accolades, including multiple Ballon d'Or awards, and becoming the top scorer (450 goals) for the club.",
  },
  {
  name: 'Raphael Varane',
  image: 'https://www.telegraph.co.uk/content/dam/football/2023/02/24/TELEMMGLPICT000326653448_trans_NvBQzQNjv4Bqy66hu0TpIy4d7oO0NBM5NTQnC5DCw90YHLKHXFlQeAE.jpeg',
  bio: "Raphael Varane, born on April 25, 1993, in Lille, France. His arrival at Manchester United from Real Madrid marked a defining moment in his career, showcasing his prowess as a world-class defender. At Manchester United, Varane's exceptional defensive skills, composed style of play, and ability to read the game has brought a renewed sense of solidity to Old Trafford. While he achieved notable success at Real Madrid, his transition to the Premier League demonstrated his adaptability. His journey to Old Trafford has revitalized Manchester United's aspirations for glory as he led to Man Utd to be the Carabao Cup winners in 2022. Raphael Varane's legacy at Manchester United is a testament to his enduring commitment to the game and his invaluable contribution to the club's storied history.",
  },
  {
    name:'Diogo Dalot',
    image:'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blte3c475fed327c227/6322101dbbe66a49b2d4b54d/Untitled_design_(6).jpg?auto=webp&format=pjpg&width=3840&quality=60',
    bio:"José Diogo Dalot Teixeira, known as Dalot was born on March 18, 1999, in Braga, Portugal. His journey to prominence has been defined by versatility and youthful exuberance. Diogo Dalot's early career flourished at FC Porto, where he showcased his potential as a dynamic full-back, equally adept at both defending and attacking. Dalot's move to Manchester United presented an exciting chapter in his career. At Old Trafford, he embraced the challenge of playing in one of the world's most prestigious clubs, displaying a tireless work ethic and a willingness to adapt to various roles within the squad. As he continues to develop and mature, Diogo Dalot's bright future in football holds the promise of further growth and success, both for his club and on the international stage with the Portuguese national team. His journey exemplifies the ambition and determination of a new generation of football talent.",
  },
  {
    name:'Alejandro Garnacho',
    image: 'https://www.telegraph.co.uk/content/dam/football/2023/04/21/TELEMMGLPICT000321299072_trans_NvBQzQNjv4BqluQGuD05VRMhKnY5ux8-YcgFcqZYSnWN7M2xhfbVSzk.jpeg',
    bio:"Alejandro Garnacho Ferreyra, born on July, 2004, in Madrid, Spain, is a young football sensation poised for greatness. His journey in the football world has been marked by his incredible talent and determination. Garnacho's rise to prominence took him to the famed youth academy of Manchester United, where his skills caught the attention of fans and experts alike. His versatility on the pitch, combined with an innate ability to score crucial goals, quickly established him as one of the club's most promising prospects. Although born in Spain, Alejandro Garnacho represents Argentina in international stage. He is an embodiment of passion and dedication that define the sport. With each match and every goal, he paves the way for a bright and exciting future in the footballing world."
  },
  {
    name:'Luke Shaw',
    image:'https://i2-prod.manchestereveningnews.co.uk/incoming/article25995787.ece/ALTERNATES/s615/0_GettyImages-1246225488.jpg',
    bio:"Luke Paul Hoare Shaw, known asLuke Shaw was born on July 12, 1995, in Kingston, England. His journey in the sport has been defined by unwavering determination and a remarkable resurgence in his career. Shaw's early promise at Southampton earned him a move to Manchester United, where he became a cornerstone of the team's defense. After suffering a horrible leg breaking injury, him coming back to battle in the turf shows his resilience and determination. His tenacity and commitment on the field played a pivotal role in helping Manchester United secure multiple trophies, including the UEFA Europa League and the English League Cup. A testament to his dedication, Shaw's performances have not only garnered domestic honors but also earned him recognition on the international stage. His standout displays for the England national team showcased his ability to excel on the grandest of footballing platforms. His contributions continue to shape the future of both club and country in the beautiful game."
  },
  {
    name:'Casemiro',
    image:'https://cdn.theathletic.com/app/uploads/2023/01/31102551/Manchester-United-Casemiro-scaled-e1675179022825-1024x681.jpg',
    bio:"Carlos Henrique Casimiro, known as Casemiro, was born on February 23, 1992, in São José dos Campos, Brazil. He is regarded as a midfield powerhouse with a storied career that spans two of the world's footballing giants. His powerful presence in midfield, marked by impressive tackling and ball-winning abilities, made an impact at Manchester United. His subsequent move to Real Madrid helped the team secure numerous La Liga titles and UEFA Champions League trophies. He also has represented and made significant contribution by playing for his national team. His journey from to  Real Madrid to Man United highlights his willingness to take a challenge. His mindset reflects the resilience and adaptability of a footballer who left an indelible mark on the sport's history. His legacy as a midfield maestro continues to shine brightly in the football world."
  }

];

// App.js
function App() {
  return (
    <div className={styles.App}>
    
      <div className="player-container">
        <PlayerCard player={players[0]} className="player-card" />
      </div>
      <div className="player-container">
        <PlayerCard player={players[1]} className="player-card2" />
      </div>
      <div className = "player-container">
        <PlayerCard player={players[2]} className="player-card3"/>
      </div>
      <div className = "player-container">
        <PlayerCard player={players[3]} className="player-card100"/>
      </div>
      <div className = "player-container">
        <PlayerCard player={players[4]} className="player-card4"/>
      </div>
      <div className = "player-container">
        <PlayerCard player={players[5]} className="player-card5"/>
      </div>
      <div className = "player-container6">
        <PlayerCard player={players[6]} className="player-card6"/>
      </div>
      <div className = "player-container7">
        <PlayerCard player={players[7]} className="player-card7"/>
      </div>
      <div className = "player-container8">
        <PlayerCard player={players[8]} className="player-card8"/>
      </div>

    <CommentForm/>

    </div>
  );
}

export default App;