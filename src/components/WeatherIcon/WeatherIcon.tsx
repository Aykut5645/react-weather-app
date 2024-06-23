import { AVAILABLE_ICONS } from '../../utils/constants.tsx';

type WeatherIconProps = {
  icon: string;
  className: string;
};

const WeatherIcon = ({ icon, className }: WeatherIconProps) => {
  icon = AVAILABLE_ICONS.includes(icon) ? icon : 'unknown';

  return (
    <div className={className}>
      <img alt="weather icon" src={`/assets/icons/${icon}.png`} />
    </div>
  );
};

export default WeatherIcon;
