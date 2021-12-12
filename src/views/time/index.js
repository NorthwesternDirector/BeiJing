import React, { useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames/bind'
import {Collapse} from 'antd'
import miniImg from '@/assets/mini.png'
import {Data2021} from './daliyData-2021' 
import moment from 'moment'
import IconFont from '@/components/IconFont'
import Square from './Square'
import useTimeDistributionChart from './TimeDistribution'
import useTimeNodeChart from './TimeNode'
import Percentage from './TimeNode/Percentage'
import SportTime from './SportTime'

const cx = classNames.bind(styles)

const Time = () => {
  const [keys, setKeys] = useState([])
  const [TimeDistributionChart, highlightIndex, processedData]= useTimeDistributionChart()
  const [TimeNodeChart] = useTimeNodeChart()
  

  return (
    <div>
      {/* <div className={cx('inner-header')}>&nbsp;&nbsp;时间&nbsp;<img src={miniImg} alt='' style={{height:40}}/>&nbsp;管理大师。</div> */}
      <div className={cx('inner-body')}>
      <Collapse defaultActiveKey={[]} ghost expandIcon={()=>false} onChange={e => { setKeys(e) }}>
        <Collapse.Panel header={<><IconFont type='icon-zhankai' className={cx('expend-icon', {'expend-icon--expended': keys.includes('2021-2022')})}/>2021-2022</>} key="2021-2022">
          <div className={cx('card')}>
          <div className={cx('days')}>{moment(Data2021[Data2021.length - 1]['日期']).diff(moment(Data2021[0]['日期']), 'days')}</div>
          <div className={cx('small-card-line')}>
            <Square 
              data={{
                label:'遗忘时间',
                value:processedData[highlightIndex]?.['遗忘时间'],
                percentage:((processedData[highlightIndex]?.['遗忘时间']/processedData[highlightIndex]?.['时长'])*100).toFixed(1)+'%',
                icon:'icon-fuchouzhelianmeng-haoke'
              }}
              standard={[num => num < 10, num => num >= 20]}
            />
            <Square 
              data={{
                label:'常规时间',
                value:processedData[highlightIndex]?.['常规时间'],
                percentage:((processedData[highlightIndex]?.['常规时间']/processedData[highlightIndex]?.['真实时间'])*100).toFixed(1)+'%',
                icon:'icon-fuchouzhelianmeng-meiguoduichang'
              }}
              standard={[num => num >= 75, num => num < 60]}
            />
          </div>
          <div className={cx('card-item')}>{TimeDistributionChart}</div>
          <div className={cx('card-item-spec')}>
            <Percentage/>
            {TimeNodeChart}
            </div>
          </div>
          <div className={cx('card-item')}><SportTime/></div>
        </Collapse.Panel>
      </Collapse>
      </div>
    </div>
  )
}

export default Time