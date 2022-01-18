import React from 'react'
import classNames from 'classnames/bind'
import moment from 'moment'
import styles from './index.module.less'
import { Data2022 } from './daliyData-2021'
import Square from './Square'
import useTimeDistributionChart from './TimeDistribution'

const cx = classNames.bind(styles)

const Time2022 = () => {
  const [TimeDistributionChart, highlightIndex, processedData] = useTimeDistributionChart({
    data: Data2022,
  })

  return (
    <div className={cx('card')}>
      <div className={cx('days')}>
        {moment(Data2022[Data2022.length - 1]['日期']).diff(moment(Data2022[0]['日期']), 'days')}
      </div>
      <div className={cx('small-card-line')}>
        <Square
          data={{
            label: '遗忘时间',
            value: processedData[highlightIndex]?.['遗忘时间'],
            percentage: `${(
              (processedData[highlightIndex]?.['遗忘时间'] /
                processedData[highlightIndex]?.['时长']) *
              100
            ).toFixed(1)}%`,
            icon: 'icon-fuchouzhelianmeng-haoke',
          }}
          standard={[num => num < 10, num => num >= 20]}
        />
        <Square
          data={{
            label: '常规时间',
            value: processedData[highlightIndex]?.['常规时间'],
            percentage: `${(
              (processedData[highlightIndex]?.['常规时间'] /
                processedData[highlightIndex]?.['真实时间']) *
              100
            ).toFixed(1)}%`,
            icon: 'icon-fuchouzhelianmeng-meiguoduichang',
          }}
          standard={[num => num >= 75, num => num < 60]}
        />
      </div>
      <div className={cx('card-item')}>{TimeDistributionChart}</div>
    </div>
  )
}

export default Time2022
