import StatisticsListItem from 'components/StatisticsListItem';
import c from './StatisticsList.module.scss';

const StatisticsList = ({ statisticsList }) => {
  return (
    <div className={c.scroll}>
      <ul className={c.list}>
        {statisticsList[0].statistics.map(({ id, category, balance, type }) => (
          <li className={c.item} key={id}>
            <StatisticsListItem
              category={category}
              balance={balance}
              type={type}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticsList;
