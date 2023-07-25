import React from 'react';
import { useState, useEffect } from 'react';
import { db } from "../firebase-config";
import { collection,getDocs,addDoc,updateDoc,getDoc,doc, query, where, onSnapshot } from "firebase/firestore";

function App() {

  const usersCollectionRef = collection(db, YOUR_DB_HERE);
  const[players, setPlayers] = useState([]);
  const [gameString, setGameString] = useState("");
  const [passwordString, setPasswordString] = useState("");
  const [passwordField, setPasswordField] = useState(false);
  const [gameField, setGameField] = useState(false);
  const [showAddGameButton, setShowAddGameButton] = useState(true)


  const createUser = (name, result) => {
      addDoc(usersCollectionRef, {name: name, earnings: result.toString(), games_played: 1});
  };

  const updatePlayer = async (name, result) => {

    const collectionRef = collection(db, YOUR_DB_HERE);
    const q = query(collectionRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);
      
    querySnapshot.forEach(async (queryDocSnapshot) => {
    const userDoc = doc(db, YOUR_DB_HERE, queryDocSnapshot.id);
    const docSnapshot = await getDoc(userDoc);
    const currEarnings = docSnapshot.data().earnings;
    const currGames = docSnapshot.data().games_played;
    const newEarnings = { earnings: (parseFloat(currEarnings) + parseFloat(result)).toString(), games_played: currGames + 1 };
    await updateDoc(userDoc, newEarnings);
    });
  };

  const logGame = async () => {
    const gameData = gameString.split(",");
    console.log(gameData);
              
    for(var i = 0; i < gameData.length; i += 2){
      if(checkNameExists(gameData[i])){
          updatePlayer(gameData[i], gameData[i+1]);
        }
      else{
          createUser(gameData[i], gameData[i+1]);
        }
      }
      setGameString("");
      setPasswordString("");
      setGameField(false);
      setPasswordField(false);
      setShowAddGameButton(true);
  }

  const checkNameExists = (name) => {
    return players.some((item) => item.name === name);
  };

  const requestPassword = () =>{
    setPasswordField(true);
    if(passwordString === LOG_GAME_PASSWORD){
      console.log("Password Accepted")
      setGameField(true);
      setShowAddGameButton(false)
    }
    else{
      console.log("Wrong Password")
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
    const updatedPlayers = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    const sortedPlayers = updatedPlayers.sort((a,b) => parseInt(b.earnings) - parseInt(a.earnings));
    setPlayers(sortedPlayers);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <div className="App">

      <div className="banner">
        <h1>Saint Louis Poker Leaderboard</h1>
        <br></br>
      </div>

      <div className="playerTable">
          <table id="playerTable">
          <thead>
              <tr>
              <th>Place</th>
              <th>Name</th>
              <th>Live Earnings</th>
              </tr>
          </thead>
          <tbody>
              {players.map((player, index) => (
              <tr key={player.id}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>${player.earnings}</td>
              </tr>
            ))}
          </tbody>
          </table>
      </div>
        
      <div className='addGameButton'>
        {showAddGameButton && (
          <button onClick={requestPassword}>Add Game</button>
        )}
        {passwordField && (
          <div>
            <input
              type="password"
              placeholder="Enter Password..."
              value={passwordString}
              onChange={(event) => {
                setPasswordString(event.target.value);
              }}
            />
            <button onClick={requestPassword}>Enter Password</button>
          </div>
        )}
        {gameField && (
          <div>
            <input
              type="String"
              placeholder="Enter game..."
              value={gameString}
              onChange={(event) => {
                setGameString(event.target.value);
            }}
            />
            <button onClick={logGame}>Log Game</button>
          </div>
        )}
        </div>
    </div>
  );
}

export default App;


