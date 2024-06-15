import './Metric.scss';

const Metric = () => {
  return (
    <div className="metrics">
      <div className="metrics__radio-group">
        <input
          className="metrics__radio-input"
          type="radio"
          id="celsius"
          name="size"
        />
        <label htmlFor="celsius" className="metrics__radio-label">
          <span className="metrics__radio-button"></span>
          &deg;C
        </label>
      </div>

      <div className="metrics__radio-group">
        <input
          className="metrics__radio-input"
          type="radio"
          id="fahrenheit"
          name="size"
        />
        <label htmlFor="fahrenheit" className="metrics__radio-label">
          <span className="metrics__radio-button"></span>
          &deg;F
        </label>
      </div>
    </div>
  );
};

export default Metric;
