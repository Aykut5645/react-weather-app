import './App.scss';
import useLocation from './hooks/useLocation.tsx';

const App = () => {
  // const [data, setData] = useState({});
  const location = useLocation();
  if (location) {
    console.log('Lat and Lng => ', location);
  }
  return (
    <div className="container">
      <h1
        style={{
          color: 'white',
          background: 'black',
          padding: '1rem 0',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        Real Time Weather
      </h1>
      <div style={{ maxWidth: '75rem', margin: 'auto' }} className="content">
        <div
          style={{
            color: 'white',
            background: 'red',
            marginBottom: '.8rem',
            padding: '16rem',
          }}
        >
          <div
            className="radio-btns"
            style={{ background: 'yellowgreen', display: 'inline' }}
          >
            <div>Metrics:</div>
            <div>
              <input type="radio" id="option1" value="option1" />
              <label htmlFor="option1">C</label>
            </div>
            <div>
              <input type="radio" id="option1" value="option1" />
              <label htmlFor="option1">F</label>
            </div>
          </div>

          <div>Today: </div>

          <div>Icon:</div>
          <div>Location:</div>
          <div>Weather Condition:</div>
          <div>Feels like:</div>
          <div>Humidity:</div>
          <div>Wind speed:</div>
        </div>
        <div
          style={{
            display: 'grid',
            gridGap: '.6rem',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div style={{ color: 'white', background: 'green', padding: '6rem' }}>
            Next Day Weather
          </div>
          <div
            style={{ color: 'white', background: 'orange', padding: '6rem' }}
          >
            Next Day Weather
          </div>
          <div
            style={{ color: 'white', background: 'violet', padding: '6rem' }}
          >
            Next Day Weather
          </div>
          <div style={{ color: 'white', background: 'brown', padding: '6rem' }}>
            Next Day Weather
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
