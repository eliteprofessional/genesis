import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './components/Home';
import Freelance from './components/Freelance';
import Client from './components/Client';
import TalentManager from './components/TalentManager';
import Operation from './components/Operations-page/Operation';
import PostJobOpening from './components/Operations-page/PostJobOpening';
import ClientWithCompany from './components/ClientWithCompany';
import ProfilefillupFreelancer from './components/Operations-page/ProfilefillupFreelancer';
import ProfilefillClientIndivdual from './components/Operations-page/Client/ProfilefillClientIndivdual';
import ProfilefillClientCompany from './components/Operations-page/Client/ProfilefillClientCompany';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="freelance" element={<Freelance />} />
            <Route path="client_with_individual" element={<Client />} />
            <Route path="client_with_company" element={<ClientWithCompany />} />
            <Route path="talentmanager" element={<TalentManager />} />
            {/* <Route index element={<Operation />} /> */}
            <Route path="operations" element={<Operation />} />
            <Route
              path="operations/post-job-opening"
              element={<PostJobOpening />}
            />
            <Route
              path="operations/profile-fillup-freelancer"
              element={<ProfilefillupFreelancer />}
            />
            <Route
              path="/operations/profile-fillup-client-individual"
              element={<ProfilefillClientIndivdual />}
            />
            <Route
              path="/operations/profile-fillup-client-company"
              element={<ProfilefillClientCompany />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
