import './App.css';
import Navbar from './COMPONENTS/Navbar';
import TextForm from './COMPONENTS/TextForm'; 


function App() {
  return (
    <>
      {/* <Navbar title="textutils" abouttext="abouttext" /> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>

    </>
  );
}

export default App;
