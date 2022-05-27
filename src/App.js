
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

import Timeline from './components/sidebar/timeline/Timeline';
import Widgets from './components/sidebar/widget/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Timeline />
      <Widgets />
    </div>
  );
}

export default App;
