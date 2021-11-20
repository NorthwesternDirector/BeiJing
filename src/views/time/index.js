import React from 'react'
import styles from './index.module.less'
import classNames from 'classnames/bind'
import {Collapse} from 'antd'
import miniImg from '@/assets/mini.png'

const cx = classNames.bind(styles)

const Time =()=>{
  return (
    <div>
      <div className={cx('inner-header')}>&nbsp;&nbsp;时间&nbsp;<img src={miniImg} alt='' style={{height:40}}/>&nbsp;管理大师。</div>
      <div className={cx('inner-body')}>
      <Collapse defaultActiveKey={['2021']} ghost expandIcon={()=>false}>
        <Collapse.Panel header="2021-2022" key="2021-2022">
          <div className={cx('card')}>
            666
          </div>
        </Collapse.Panel>
      </Collapse>
      </div>
    </div>
  )
}

export default Time