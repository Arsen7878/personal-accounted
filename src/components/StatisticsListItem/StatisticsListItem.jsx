import c from './StatisticsListItem.module.scss';
const StatisticsListItem = ({ category, balance, type }) => {
  const getArrow = type => {
    switch (type) {
      case 'Расход':
        return '↓';
      case 'Доход':
        return '↑';

      default:
        break;
    }
  };

  return (
    <>
      <p>{category}</p>
      <div className={c.value}>
        <span className={type === 'Расход' ? c.arrowRed : c.arrowGreen}>
          {getArrow(type)}
        </span>
        <p>{balance}</p>
      </div>
    </>
  );
};

export default StatisticsListItem;
