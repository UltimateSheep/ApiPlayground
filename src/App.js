import ApiObject from './Components/ApiObject'
import ApiList from './ApiList'
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Api playground!</h1>
        <div className="api-list">
          <Stack className='Api-Routes'>
            <ApiList list={ApiObject} />
          </Stack>
        </div>
      </header>
    </div>
  );
}

export default App;
