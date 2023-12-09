import Home from "./pages/home.jsx";
import Layout from "./components/layout/layout.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Trends from "./components/trends/trends.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Sidebar />
      <Home />
      <Trends />
    </Layout>
  );
}
