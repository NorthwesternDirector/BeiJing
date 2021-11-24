import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames/bind'
import {Collapse} from 'antd'
import miniImg from '@/assets/mini.png'
import ReactECharts from 'echarts-for-react';
import {Data2021, type} from './daliyData-2021' 
import moment from 'moment'
// import _ from 'lodash'

const cx = classNames.bind(styles)

const Time =()=>{
  console.log(Data2021.map(i=>({...i,'时长':+(moment(`${i['日期']} ${i['下班']}`).diff(moment(`${i['日期']} ${i['上班']}`),'second')/3600).toFixed(1)})),9)
  const [options, setOptions] = useState([])
  useEffect(()=>{
    const dimensions = ['日期', ...type ]
    let temp =  {
      // https://coolors.co/palettes/trending
      // https://zhuanlan.zhihu.com/p/27198138
      color:['#023e8a', '#0077b6', '#0096c7', '#00b4d8', '#48cae4', '#90e0ef', '#caf0f8','#ffccd5', '#ffb3c1', '#ff8fa3', '#ff758f', '#ff4d6d','#c9184a'],
      grid: { top: 50, right: 24, bottom: 36, left: 54 },
      dataset: {
        dimensions,
        source: Data2021.map(i=>({...i,'时长':+(moment(`${i['日期']} ${i['下班']}`).diff(moment(`${i['日期']} ${i['上班']}`),'second')/3600).toFixed(1)}))
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          formatter: val=>val.slice(5)
        }
      },
      yAxis: {},
      series: type.map(i=>({ type: 'bar', stack: i==='时长' ? "time" : "all" })),
      tooltip: {
        trigger: 'axis',
      },
    }
    setOptions(temp)
  },[])

  return (
    <div>
      {/* <div className={cx('inner-header')}>&nbsp;&nbsp;时间&nbsp;<img src={miniImg} alt='' style={{height:40}}/>&nbsp;管理大师。</div> */}
      <div className={cx('inner-body')}>
      <Collapse defaultActiveKey={['2021']} ghost expandIcon={()=>false}>
        <Collapse.Panel header="2021-2022" key="2021-2022">
          <div className={cx('card')}>
          <ReactECharts option={options} /> 
          </div>
        </Collapse.Panel>
      </Collapse>
      </div>
    </div>
  )
}

export default Time