import StatisticsList from 'components/StatisticsList';
import c from './Statistics.module.scss';
import { statisticsList } from 'some-serv';
import getDate from 'utils/getDate';

const Statistics = () => {
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
