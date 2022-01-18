import React, { useState, useEffect } from 'react'
import ReactECharts from 'echarts-for-react'
import { sleepData } from '../daliyData-2021'

const BASE_TIME = '2021-12-06'

const useTimeNodeChart = () => {
  const [options, setOptions] = useState({})

  /** 设置图表 */
  useEffect(() => {
    const series = ['ssleep', 'msleep', 'mgow', 'sgow']
    const dimensions = ['日期', 'ssleep', 'msleep', 'mgow', 'sgow']
    const temp = {
      // https://coolors.co/palettes/trending
      // https://zhuanlan.zhihu.com/p/27198138
      color: ['#6E3CBC', '#D47AE8', '#F4BEEE', '#98BAE7'],
      grid: { top: 50, right: 24, bottom: 56, left: 50 },
      dataset: {
        dimensions,
        source: sleepData.map(i => ({
          ...i,
          ssleep: `${BASE_TIME} ${i.ssleep}`,
          msleep: `${BASE_TIME} ${i.msleep}`,
          mgow: `${BASE_TIME} ${i.mgow}`,
          sgow: `${BASE_TIME} ${i.sgow}`,
        })),
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          formatter: val => val.slice(5),
        },
      },
      yAxis: {
        type: 'time',
        min: `${BASE_TIME} 18:30:00`,
        max: `${BASE_TIME} 23:59:59`,
      },
      series: series.map(() => ({ type: 'line', smooth: true })),
      tooltip: {
        trigger: 'axis',
        formatter(params) {
          let res = `${params[0].name} <br/>`
          for (const item of params) {
            if (item.value[item.seriesName]) {
              res += `<span style="background: ${
                item.color
              }; height:10px; width: 10px; border-radius: 50%;display: inline-block;margin-right:10px;"></span> ${
                item.seriesName
              } ：${item.value[item.seriesName].slice(11)}<br/>`
            }
          }
          return res
        },
      },
      dataZoom: [
        {
          show: sleepData.length > 30,
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
      },
    }
    setOptions(temp)
  }, [])

  return [<ReactECharts option={options} style={{ height: 350 }} />]
}

export default useTimeNodeChart
