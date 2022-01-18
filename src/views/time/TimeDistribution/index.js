import React, { useState, useEffect, useCallback } from 'react'
import ReactECharts from 'echarts-for-react'
import moment from 'moment'
import { workType, type } from '../daliyData-2021'

const useTimeDistributionChart = ({ data }) => {
  const [options, setOptions] = useState([])
  const [highlightIndex, setHighlightIndex] = useState()
  const [processedData, setProcessedData] = useState([])

  /** 数据处理，搞一些计算数据出来 */
  useEffect(() => {
    const handleData = data.map(i => {
      const totalTime = +(
        moment(`${i['日期']} ${i['下班']}`).diff(moment(`${i['日期']} ${i['上班']}`), 'second') /
        3600
      ).toFixed(1)
      const realTime = Object.values(i).reduce((acc, cur) => {
        if (typeof cur === 'number') {
          return cur + acc
        }
        return acc
      }, 0)
      const workTime = Object.keys(i).reduce((acc, cur) => {
        if (workType.includes(cur)) {
          return i[cur] + acc
        }
        return acc
      }, 0)
      return {
        ...i,
        时长: totalTime,
        遗忘时间: +(totalTime - realTime).toFixed(1),
        真实时间: realTime,
        常规时间: workTime,
      }
    })
    setHighlightIndex(handleData.length - 1)
    setProcessedData(handleData)
  }, [data])

  /** 设置图表 */
  useEffect(() => {
    const dimensions = ['日期', ...type]
    const temp = {
      // https://coolors.co/palettes/trending
      // https://zhuanlan.zhihu.com/p/27198138
      color: [
        '#023e8a',
        '#0077b6',
        '#0096c7',
        '#00b4d8',
        '#48cae4',
        '#90e0ef',
        '#caf0f8',
        '#ffccd5',
        '#ffb3c1',
        '#ff8fa3',
        '#ff758f',
        '#ff4d6d',
        '#EAECEE',
        '#c9184a',
      ],
      grid: { top: 70, right: 24, bottom: 56, left: 24 },
      dataset: {
        dimensions,
        source: processedData,
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          formatter: val => val.slice(5),
        },
      },
      yAxis: { name: '时长/h' },
      series: type.map(i => ({ type: 'bar', stack: i === '时长' ? 'time' : 'all' })),
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
              } ：${item.value[item.seriesName]}<br/>`
            }
          }
          return res
        },
      },
      dataZoom: [
        {
          show: processedData.length > 20,
          type: 'slider',
          orient: 'horizontal',
          height: 20,
          bottom: 5,
          left: 40,
          start: 100,
          minValueSpan: 20,
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
        selected: Object.fromEntries(type.map(i => [[i], i !== '时长'])),
      },
    }
    setOptions(temp)
  }, [processedData])

  const highlight = useCallback(params => {
    if (params.batch?.length) {
      setHighlightIndex(params.batch[0].dataIndex)
    }
  }, [])

  return [
    processedData.length > 0 ? <ReactECharts option={options} onEvents={{ highlight }} /> : <></>,
    highlightIndex,
    processedData,
  ]
}

export default useTimeDistributionChart
