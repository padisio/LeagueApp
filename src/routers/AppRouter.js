import {  Route, Routes, BrowserRouter } from "react-router-dom";
import { ChampionScreen } from "../components/Champion/ChampionScreen";
import { ChampionListScreen } from "../components/ChampionList/ChampionListScreen";


export const AppRouter = () => {
  return (
    <>
    
        <BrowserRouter>
        
        <Routes>
            <Route path="/campeon/:champId" element={<ChampionScreen />}/>
            <Route path="/" element={<ChampionListScreen />}/>



        </Routes>
        
        
        </BrowserRouter>
    
    
    
    </>
  )
}
