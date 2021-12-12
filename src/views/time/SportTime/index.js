import React, {useState, useEffect, useCallback} from 'react'
import ReactECharts,{} from 'echarts-for-react'
import {sportData} from '../daliyData-2021'
import moment from 'moment' 


const Comp = () =>{
  const [data, setData] = useState([])
  useEffect(() => {
    setData(sportData.map(i=>[moment(i.日期).format('yyyy-MM-DD'), Object.values(i).reduce((acc,cur)=>acc + (+cur || 0), 0)]))
  },[])

  console.log(data, 55)

  const options = {
    
    grid: { top: 70, right: 24, bottom: 56, left: 24 },
    visualMap: {
      show: false,
      min: 0,
      max: 4,
      color: ['#ff5400','#ff6d00','#ff8500','#ff9e00','#ffb600'],
    },
    tooltip: {
      formatter:params=>`${params.value[0]}: ${params.value[1]}h`
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2021',
      splitLine:{
        lineStyle: {
          color: '#FFF',
          width: 1,
          type: 'dashed',
        }
      },
      itemStyle: {
        show: true,
        borderWidth: 2,
        borderColor:'#fff',
        color:'#f8f9fa'
      },
      dayLabel: {
        nameMap: 'ZH',
        color:'#666',
      },
      monthLabel:{
        nameMap: 'ZH',
        color:'#666',
      },

      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data,
    }
  }
  return <div><ReactECharts option={options} /></div>
}

export default Comp