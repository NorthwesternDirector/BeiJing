import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames/bind'
import {Collapse} from 'antd'
import miniImg from '@/assets/mini.png'
import {Data2021, workType} from './daliyData-2021' 
import moment from 'moment'
import IconFont from '@/components/IconFont'
import Square from './Square'
import useTimeDistributionChart from './TimeDistribution'

const cx = classNames.bind(styles)

const Time = () => {
  const [keys, setKeys] = useState([])
  const [processedData, setProcessedData] = useState([])
  const [TimeDistributionChart, highlightIndex, setHighlightIndex]= useTimeDistributionChart({data: processedData})

  /**数据处理，搞一些计算数据出来 */
  useEffect(() => {
    const handleData = Data2021.map(i => {
      const totalTime = +(moment(`${i['日期']} ${i['下班']}`).diff(moment(`${i['日期']} ${i['上班']}`),'second')/3600).toFixed(1)
      const realTime = Object.values(i).reduce((acc,cur) => {
        if(typeof(cur) === 'number'){
          return cur + acc
        }
        return acc
      }, 0)
      const workTime = Object.keys(i).reduce((acc,cur) => {
        if(workType.includes(cur)){
          return i[cur] + acc
        }
        return acc
      }, 0)
      return {
        ...i,
        '时长': totalTime,
        '遗忘时间': +(totalTime - realTime).toFixed(1),
        '真实时间': realTime,
        '常规时间': workTime
      }
    })
    setHighlightIndex(handleData.length - 1)
    setProcessedData(handleData)
  },[setHighlightIndex])



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
            />
            <Square 
              data={{
                label:'常规时间',
                value:processedData[highlightIndex]?.['常规时间'],
                percentage:((processedData[highlightIndex]?.['常规时间']/processedData[highlightIndex]?.['真实时间'])*100).toFixed(1)+'%',
                icon:'icon-fuchouzhelianmeng-meiguoduichang'
              }}
            />
          </div>
          {TimeDistributionChart}
          </div>
        </Collapse.Panel>
      </Collapse>
      </div>
    </div>
  )
}

export default Time