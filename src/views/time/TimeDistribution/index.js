import React, {useState, useEffect, useCallback} from 'react'
import ReactECharts from 'echarts-for-react'
import { type } from '../daliyData-2021' 

const useTimeDistributionChart = ({ data = [] }) => {
  const [options, setOptions] = useState([])
  const [highlightIndex, setHighlightIndex] =useState()
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
        source: data,
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
          show: data.length > 10,
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
        selected: Object.fromEntries(type.map(i => ([[i], i === '时长' ? false : true])))
      }
    }
    setOptions(temp)
  }, [data])

  const highlight = useCallback(params => {
    if (params.batch?.length) {    
        setHighlightIndex(params.batch[0].dataIndex)
    } 
  }, [])

  return [
    <ReactECharts option={options} onEvents={{highlight}}/>, 
    highlightIndex, 
    setHighlightIndex
  ]
}

export default useTimeDistributionChart