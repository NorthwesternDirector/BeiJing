import React, { useState } from 'react'
import styles from './index.module.less'
import classNames from 'classnames/bind'
import IconFont from '@/components/IconFont'

const cx = classNames.bind(styles)

const formatDuring = hour => {
  var hours = Math.trunc(hour)
  var minutes = Math.trunc((hour - Math.trunc(hour))*60)
  return  hours ? <><span>{hours}</span>小时 <span>{minutes}</span>分钟</> : <><span>{minutes}</span>分钟</>
}

const Comp = ({ data }) => {
  const [expend, setExpend] = useState(false)
  const colorFn = val => {
    const num = +val.replace('%','')
    if(num < 10){
      return 'good'
    }
    if(num >= 20) {
      return 'bad'
    }
    return undefined
  }
 
  return (
    <div className={cx('square',{'square--expended': expend})}>  
        <div className={cx('label-line')}>
          <div className={cx('label')}>{data.label}</div>
          <div className={cx('expend-icon')} onClick={()=>setExpend(pre=>!pre)}><IconFont type="icon-more"/></div>
        </div>
        <div className={cx('icon')}><IconFont type={data.icon}/></div>
        <div className={cx('value')}>
         <div>{formatDuring(data.value)}</div>
         &nbsp;占比<span className={cx(colorFn(data.percentage))}>{data.percentage}</span>
        </div>
    </div>
  )
}

export default Comp