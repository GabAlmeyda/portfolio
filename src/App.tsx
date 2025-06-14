import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import Page from './components/layout/Page';

import HomePage from './pages/homepage/HomePage';
import ContactPage from './pages/contact/ContactPage';
import ProjectsPage from './pages/project/ProjectPage';
import NotFoundPage from './pages/notFound/NotFoundPage';

function App() {
  return (
    <Router>
      <Page>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Page>
    </Router>
  );
}

export default App
