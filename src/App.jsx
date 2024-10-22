import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary"/>
        <Button type=""/>
        {/* Render ตัว Button 2 แบบ */}
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert/>
        {/* Render ตัว Alert 4 แบบ */}

      </div>
    </div>
  );
}

export default App;
