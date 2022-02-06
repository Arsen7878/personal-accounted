import StatisticsList from 'components/StatisticsList';
import c from './Statistics.module.scss';
import { statisticsList } from 'some-serv';

const Statistics = () => {
  const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}.${month}.${year}`;
  };

  return (
    <div className={c.boxStatistics}>
      <div className={c.boxHeader}>
        <h3 className={c.title}>История транзакций</h3>
        <div className={c.boxDate}>
          <p className={c.date}>{getDate()}</p>
        </div>
      </div>

      <StatisticsList statisticsList={statisticsList} />
    </div>
  );
};

export default Statistics;
