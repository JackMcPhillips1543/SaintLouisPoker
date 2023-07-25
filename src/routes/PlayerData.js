import React, { useState, useEffect } from 'react';
import { db } from "../firebase-config";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

function PlayerData() {
  const usersCollectionRef = collection(db, YOUR_DB_HERE);

  const initialState = {
    Player1: { text: false, stats: ["Loading...", "Loading...", "Loading..."] },
    Player2: { text: false, stats: ["Loading...", "Loading...", "Loading..."] },
    Player3: { text: false, stats: ["Loading...", "Loading...", "Loading..."] },
    Player4: { text: false, stats: ["Loading...", "Loading...", "Loading..."] },
  };

  const [playerData, setPlayerData] = useState(initialState);

  useEffect(() => {
    fetchPlayerStats("Player1");
    fetchPlayerStats("Player2");
    fetchPlayerStats("Player3");
    fetchPlayerStats("Player4");
  }, []);

  const showText = async (name) => {
    const updatedPlayerData = { ...playerData };
    updatedPlayerData[name].text = !updatedPlayerData[name].text;

    if (!updatedPlayerData[name].stats.includes("Loading...")) {
      setPlayerData(updatedPlayerData);
    } else {
      const stats = await pullStats(name);
      updatedPlayerData[name].stats = stats;
      setPlayerData(updatedPlayerData);
    }
  };

  const fetchPlayerStats = async (name) => {
    const stats = await pullStats(name);
    setPlayerData((prevState) => ({
      ...prevState,
      [name]: { text: false, stats: stats },
    }));
  };

  const pullStats = async (name) => {
    const q = query(usersCollectionRef, where("name", "==", name));
    const querySnapshot = await getDocs(q);

    const stats = ["Loading...", "Loading...", "Loading..."];

    querySnapshot.forEach(async (queryDocSnapshot) => {
      const userDoc = doc(db, "players", queryDocSnapshot.id);
      const docSnapshot = await getDoc(userDoc);

      stats[0] = docSnapshot.data().games_played;
      stats[1] = docSnapshot.data().earnings / stats[0];
      stats[2] = "100%";
    });

    return stats;
  };

  return (
    <div className="directory-info-row">
        <h1>Meet the Players!</h1>
        <br></br>
        <br></br>
      <section class="boxes container">
        <article class="box box1"><div className="grid-item">
          <div className="panel">
            <div className="panel-body">
              <div className="media">
                  <img
                    className="thumb media-object"
                    src={require('../images/logoChip.jpg')}
                    alt=""
                  />
                  <br></br>
                  <br></br>
                <div className="media-body">
                  <h4>
                  Player1<span className="text-muted small">- Location, State</span>
                  </h4>
                  <address>
                    <strong>Favorite Hand: XXXXX</strong>
                    <br />
                    <strong>Fun Fact:</strong> XXXXXXXX
                    <br />
                    <button className='dropdown' onClick={() => showText('Player1')}>Season Stats</button>
                      {playerData['Player1'].text && (
                        <div>
                        <p>Games Played: {playerData['Player1'].stats[0]}</p>
                        <p>Game Average: {playerData['Player1'].stats[1]}</p>
                        <p>Games Profited: {playerData['Player1'].stats[2]}</p>
                      </div>
                      )}
                    <br />
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div></article>
        <article class="box box2"><div className="grid-item">
          <div className="panel">
            <div className="panel-body">
              <div className="media">
                  <img
                    className="thumb media-object"
                    src={require('../images/logoChip.jpg')}
                    alt=""
                  />
                <div className="media-body">
                  <h4>
                  Player2<span className="text-muted small">- Location, State</span>
                  </h4>
                  <address>
                    <strong>Favorite Hand: XX</strong>
                    <br />
                    <strong>Fun Fact:</strong> XXXXXXXX
                    <br />
                    <button className='dropdown' onClick={() => showText('Player2')}>Season Stats</button>
                      {playerData['Player2'].text && (
                        <div>
                        <p>Games Played: {playerData['Player2'].stats[0]}</p>
                        <p>Game Average: {playerData['Player2'].stats[1]}</p>
                        <p>Games Profited: {playerData['Player2'].stats[2]}</p>
                      </div>
                      )}
                    <br />
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div></article>
        <article class="box box3"><div className="grid-item">
          <div className="panel">
            <div className="panel-body">
              <div className="media">
                  <img
                    className="thumb media-object"
                    src={require('../images/logoChip.jpg')}
                    alt=""
                  />
                <div className="media-body">
                  <h4>
                  Player3<span className="text-muted small">- Location, State</span>
                  </h4>
                  <address>
                    <strong>Favorite Hand: XX</strong>
                    <br />
                    <strong>Fun Fact:</strong> is on the NCAA drug watchlist
                    <br />
                    <button className='dropdown' onClick={() => showText('Player3')}>Season Stats</button>
                      {playerData['Player3'].text && (
                        <div>
                        <p>Games Played: {playerData['Player3'].stats[0]}</p>
                        <p>Game Average: {playerData['Player3'].stats[1]}</p>
                        <p>Games Profited: {playerData['Player3'].stats[2]}</p>
                      </div>
                      )}
                    <br />
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div></article>
        <article class="box box4"><div className="grid-item">
          <div className="panel">
            <div className="panel-body">
              <div className="media">
                  <img
                    className="thumb media-object"
                    src={require('../images/logoChip.jpg')}
                    alt=""
                  />
                <div className="media-body">
                  <h4>
                  Player4<span className="text-muted small">- location, state</span>
                  </h4>
                  <address>
                    <strong>Favorite Hand: XX</strong>
                    <br />
                    <strong>Fun Fact:</strong> XXXXXXXX
                    <br />
                    <button className='dropdown' onClick={() => showText('Player4')}>Season Stats</button>
                      {playerData['Player4'].text && (
                        <div>
                        <p>Games Played: {playerData['Player4'].stats[0]}</p>
                        <p>Game Average: {playerData['Player4'].stats[1]}</p>
                        <p>Games Profited: {playerData['Player4'].stats[2]}</p>
                      </div>
                      )}
                    <br />
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div></article>
        </section>
    </div>
  );
}

export default PlayerData;
