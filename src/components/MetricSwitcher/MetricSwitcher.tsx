import './MetricSwitcher.scss';

const MetricSwitcher = () => {
  return (
    <div className="metric">
      <div className="metric__radio-group">
        <input
          className="metric__radio-input"
          type="radio"
          id="celsius"
          name="size"
        />
        <label htmlFor="celsius" className="metric__radio-label">
          <span className="metric__radio-button"></span>
          &deg;C
        </label>
      </div>

      <div className="metric__radio-group">
        <input
          className="metric__radio-input"
          type="radio"
          id="fahrenheit"
          name="size"
        />
        <label htmlFor="fahrenheit" className="metric__radio-label">
          <span className="metric__radio-button"></span>
          &deg;F
        </label>
      </div>
    </div>
  );
};

export default MetricSwitcher;
