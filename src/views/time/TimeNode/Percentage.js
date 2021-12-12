import React from 'react'
import ReactECharts from 'echarts-for-react'
import { sleepData } from '../daliyData-2021' 

const num =  sleepData.filter(i => i.msleep < '23:30').length

const gaugeData = [
  {
    value: ((num/31)*100).toFixed(0),
    name: 'Month',
    title: {
      offsetCenter: ['0%', '-45%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '-30%']
    }
  },
  {
    value: ((num/21)*100).toFixed(0),
    name: 'Three Week',
    title: {
      offsetCenter: ['0%', '-10%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '5%']
    }
  },
  {
    value: ((num/7)*100).toFixed(0),
    name: 'Week',
    title: {
      offsetCenter: ['0%', '25%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '40%']
    }
  }
]
const options = {
  color:['#FFAB4C','#FF5F7E','#544179'],
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          width: 50
        }
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: gaugeData,
      title: {
        fontSize: 12
      },
      detail: {
        width: 30,
        height: 14,
        fontSize: 12,
        color: 'auto',
        borderColor: 'auto',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    }
  ]
}

const Comp = () => {
  return <ReactECharts option={options} style={{height: 350}}/>
}

export default Comp