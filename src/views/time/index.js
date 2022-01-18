import React, { useState } from 'react'
import classNames from 'classnames/bind'
import { Collapse } from 'antd'
// import miniImg from '@/assets/mini.png'
import IconFont from '@/components/IconFont'
import styles from './index.module.less'
import Time2022 from './2022'
import Time2021 from './2021'

const cx = classNames.bind(styles)

const Time = () => {
  const [keys, setKeys] = useState(['2022'])

  return (
    <div>
      {/* <div className={cx('inner-header')}>&nbsp;&nbsp;时间&nbsp;<img src={miniImg} alt='' style={{height:40}}/>&nbsp;管理大师。</div> */}
      <div className={cx('inner-body')}>
        <Collapse
          defaultActiveKey={keys}
          ghost
          expandIcon={() => false}
          onChange={e => {
            setKeys(e)
          }}
        >
          <Collapse.Panel
            header={
              <>
                <IconFont
                  type="icon-zhankai"
                  className={cx('expend-icon', { 'expend-icon--expended': keys.includes('2021') })}
                />
                2021
              </>
            }
            key="2021"
          >
            <Time2021 />
          </Collapse.Panel>
          <Collapse.Panel
            header={
              <>
                <IconFont
                  type="icon-zhankai"
                  className={cx('expend-icon', { 'expend-icon--expended': keys.includes('2022') })}
                />
                2022
              </>
            }
            key="2022"
          >
            <Time2022 />
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Time
