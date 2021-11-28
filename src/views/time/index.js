import React, { useCallback, useEffect, useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames/bind'
import {Collapse} from 'antd'
import miniImg from '@/assets/mini.png'
import ReactECharts from 'echarts-for-react';
import {Data2021, type} from './daliyData-2021' 
import moment from 'moment'
import IconFont from '@/components/IconFont'
import Square from './Square'

const cx = classNames.bind(styles)

const Time = () => {
  const [options, setOptions] = useState([])
  const [keys, setKeys] = useState([])
  const [highlightIndex, setHighlightIndex] =useState()
  const [processedData, setProcessedData] = useState([])

  /**数据处理，搞一些计算数据出来 */
  useEffect(() => {
    const handleData = Data2021.map(i => {
      const totalTime = +(moment(`${i['日期']} ${i['下班']}`).diff(moment(`${i['日期']} ${i['上班']}`),'second')/3600).toFixed(1)
      return {
        ...i,
        '时长': totalTime,
        '遗忘时间': +(totalTime - Object.values(i).reduce((cur,acc) => {
          if(typeof(cur) === 'number'){
            return cur + acc
          }
          return acc
        }, 0)).toFixed(1)
      }
    })
    setHighlightIndex(handleData.length - 1)
    setProcessedData(handleData)
  },[])

  /**设置图表 */
  useEffect(() => {
    const dimensions = ['日期', ...type ]
    let temp =  {
      // https://coolors.co/palettes/trending
      // https://zhuanlan.zhihu.com/p/27198138
      color:['#023e8a', '#0077b6', '#0096c7', '#00b4d8', '#48cae4', '#90e0ef', '#caf0f8','#ffccd5', '#ffb3c1', '#ff8fa3', '#ff758f', '#ff4d6d','#EAECEE','#c9184a'],
      grid: { top: 70, right: 24, bottom: 56, left: 24 },
      dataset: {
        dimensions,
        source: processedData,
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          formatter: val=>val.slice(5)
        },
      },
      yAxis: {name: '时长/h'},
      series: type.map(i=>({ type: 'bar', stack: i==='时长' ? "time" : "all" })),
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let res = `${params[0].name} <br/>`
          for (const item of params) {
            if (item.value[item.seriesName]) {
              res += `<span style="background: ${item.color}; height:10px; width: 10px; border-radius: 50%;display: inline-block;margin-right:10px;"></span> ${item.seriesName} ：${item.value[item.seriesName]}<br/>`
            }
          }
          return res
        }
      },
      dataZoom: [
        {
          show: Data2021.length > 10,
          type: 'slider',
          orient: 'horizontal',
          height: 20,
          bottom: 5,
          left: 40,
          start: 100,
          minValueSpan: 9,
          brushSelect: false,
          borderColor: 'none',
          backgroundColor: '#F6F7FB',
          fillerColor: 'rgba(137, 155, 218, 0.12)',
          selectedDataBackground: {
            lineStyle: { color: 'none' },
            areaStyle: {
              color: 'rgba(232, 234, 242, 1)',
              opacity: 1,
            },
          },
          dataBackground: {
            lineStyle: {
              width: 0,
              color: 'none',
            },
            areaStyle: {
              opacity: 0,
              color: '#E8EAF2',
            },
          },
          moveHandleSize: 0,
          handleSize: '90%',
          textStyle: {
            color: 'transparent',
          },
        },
      ],
      legend: {
        type: 'scroll',
        top: 6,
      }
    }
    setOptions(temp)
  }, [processedData])

  const highlight = useCallback(params => {
    if (params.batch?.length) {    
        setHighlightIndex(params.batch[0].dataIndex)
    } 
  }, [])

  return (
    <div>
      {/* <div className={cx('inner-header')}>&nbsp;&nbsp;时间&nbsp;<img src={miniImg} alt='' style={{height:40}}/>&nbsp;管理大师。</div> */}
      <div className={cx('inner-body')}>
      <Collapse defaultActiveKey={[]} ghost expandIcon={()=>false} onChange={e => { setKeys(e) }}>
        <Collapse.Panel header={<><IconFont type='icon-zhankai' className={cx('expend-icon', {'expend-icon--expended': keys.includes('2021-2022')})}/>2021-2022</>} key="2021-2022">
          <div className={cx('card')}>
          <Square 
            data={{
              label:'遗忘时间',
              value:processedData[highlightIndex]?.['遗忘时间'],
              percentage:((processedData[highlightIndex]?.['遗忘时间']/processedData[highlightIndex]?.['时长'])*100).toFixed(1)+'%',
              icon:'icon-fuchouzhelianmeng-huanshi'
            }}
          />
          <ReactECharts option={options} onEvents={{highlight}}/> 
          </div>
        </Collapse.Panel>
      </Collapse>
      </div>
    </div>
  )
}

export default Time