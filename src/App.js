import React from 'react';
import './App.css';
import ClubInfo from './components/ClubInfo/ClubInfo';
import Madrid from './madrid.png';
import ClubAchievements from './components/ClubAchievements/ClubAchievements';
import ClubMembers from './components/ClubMembers/ClubMembers';


const realMadridPlayers = [
  "Криштиану Роналду",
  "Серхио Рамос",
  "Тони Кроос",
  "Лука Модрич",
  "Карим Бензема",
  "Эден Азар",
  "Винисиус Жуниор",
  "Касемиро",
  "Марсело",
  "Даниэль Карвахаль"
];

function App() {
  return (
    <div className="App">
      <ClubInfo name="Real Madrid" city="Madrid" foundationDate={1706} image={Madrid} />
      <ClubAchievements achievements = "Мадридський «Реал» є найкращим футбольним клубом 20 століття за версією ФІФА[2]."/>
      <ClubMembers players = {realMadridPlayers}/>
    </div>
  );
}

export default App;
