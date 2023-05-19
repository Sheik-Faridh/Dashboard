import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/layout';
import LoginPage from '@/pages/login';
import SignupPage from './pages/signup';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
