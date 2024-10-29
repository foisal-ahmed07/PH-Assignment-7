/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./App.css";
import Bannner from "./Components/Bannner";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import PlayerContainer from "./Components/PlayerContainer";
import Selected from "./Components/Selected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // coin adding
  const [coin, setCoin] = useState(0);

  const handleAddCoin = () => {
    toast("Credit Added To Your Account");
    setCoin(coin + 50000000);
  };

  // button toggling
  const [isActive, setIsActive] = useState({
    available: true,
    active: "available",
  });

  const handleActiveSection = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        active: "available",
      });
    } else {
      setIsActive({
        available: false,
        active: "selected",
      });
    }
  };

  // adding player
  const [addedPlayer, setAddedPlayer] = useState([]);
  const handleAddedPlayer = (player) => {
    if (coin < player.biddingPrice) {
      toast("Not enough money to bye this player. Claim some Credit");
      return;
    } else {
      setCoin(coin - player.biddingPrice);
    }

    const isExist = addedPlayer.find(
      (item) => item.playerId === player.playerId
    );
    if (!isExist) {
      toast(`Congrats !! ${player.name} is now in your squad `);
      setAddedPlayer([...addedPlayer, player]);
    } else {
      toast("Already Exist");
    }
  };

  // removing player
  const handleRemovePlayer = (id) => {
    const remainingPlayer = addedPlayer.filter(
      (player) => player.playerId !== id
    );
    setAddedPlayer(remainingPlayer);
    toast("Player removed");
  };

  return (
    <>
      {/* nav bar */}
      <Nav coin={coin}></Nav>

      {/* banner section */}
      <Bannner handleAddCoin={handleAddCoin}></Bannner>

      {/* player container */}

      {isActive.available ? (
        <PlayerContainer
          players={players}
          handleActiveSection={handleActiveSection}
          isActive={isActive}
          handleAddedPlayer={handleAddedPlayer}
          addedPlayer={addedPlayer}
        ></PlayerContainer>
      ) : (
        <Selected
          handleActiveSection={handleActiveSection}
          isActive={isActive}
          addedPlayer={addedPlayer}
          handleRemovePlayer={handleRemovePlayer}
        ></Selected>
      )}

      {/* footer section */}
      <Footer></Footer>

      <ToastContainer />
    </>
  );
}

export default App;
