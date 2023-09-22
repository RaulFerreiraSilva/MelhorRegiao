import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Vote, Ranking} from "pages";

export function AppRoutes(){
    <BrowserRouter>
        <Routes>
            <Route path="/Vote" element={<Vote/>} />
            <Route path="/Ranking" element={<Ranking/>} />
        </Routes>
    </BrowserRouter>
}