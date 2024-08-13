import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drawers from './components/navigation/Drawer';
import Dashboard from './pages/dashboard/Dashboard';
import ManualTable from './pages/dashboard/manualTable';
import Visualize from './pages/dashboard/visualize';
import VisualizeTable from './pages/dashboard/visualizeTable';
import CreateTable from './pages/dashboard/createTable';
import UserTable from './pages/dashboard/UserTable';
import store from './redux/store';
import DataTable from './pages/dashboard/DataTable';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Drawers />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/data-table/:id" element={<DataTable />} />
            <Route path="/manual-table/:id" element={<ManualTable />} />
            <Route path="/table" element={<UserTable />} />
            <Route path="/visualize/:id" element={<Visualize />} />
            <Route path="/visualize-table/:id" element={<VisualizeTable />} />
            <Route path="/create-table" element={<CreateTable />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
