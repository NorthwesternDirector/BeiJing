import React from 'react'
import classNames from 'classnames/bind'
import { Divider, Avatar } from 'antd'
import IconFont from '@/components/IconFont'
import styles from './index.module.less'
import img from './favicon.png'

const cx = classNames.bind(styles)

const Resume = () => {
  return (
    <div className={cx('out')}>
      <div className={cx('top')}>
        <div>
          <Avatar size="large" src={img} className={cx('customAvatar')} />
          <div className={cx('h1')}>樊顺</div>
          <p className={styles.contentTxt} style={{ marginBottom: 10 }}>
            男<Divider type="vertical" />
            27岁
            <Divider type="vertical" />
            硕士
            <Divider type="vertical" />
            中共党员
          </p>
          <div className={cx('jd-tag', 'h3--light', 'margin20')}>前端开发工程师</div>
        </div>
        <div>
          <div className={cx('h2', 'margin6')}>工作经历</div>
          <div className={cx('margin6')}>
            <div className={cx('line', 'margin2')}>
              {/* <span className={cx('dot')} /> */}
              <IconFont type="icon-mi" className={cx('icon')} />
              <span className={cx('h4')}>小米-业务中台&nbsp;&nbsp;</span>
              <span className={cx('color-gray')}>2020.07-至今</span>
            </div>
            <div>数据工场v2&v3（数据处理平台）</div>
            <div>集团数据看板（移动端H5产品全链路看数平台）</div>
            <div>其他若干toB中台项目</div>
          </div>

          <div className={cx('line')}>
            {/* <span className={cx('dot')} /> */}
            <IconFont type="icon-mi" className={cx('icon')} />
            <div className={cx('h4')}>小米-大数据部(实习)&nbsp;&nbsp;</div>
            <span className={cx('color-gray')}>2019.11-2020.01</span>
          </div>
          <div>鹰眼系统（产品信息监控平台）</div>
        </div>
      </div>
      <div className={cx('content')}>
        <div>
          <div className={cx('h2', 'margin6')}>教育经历</div>
          <div>
            <span className={cx('dot')} />
            <span>中国海洋大学 硕士</span>
            <br />
            <span className={cx('color-gray')}>2017.09-2020.06</span>
          </div>
          <div className={cx('margin20')}>
            <span className={cx('dot')} />
            <span>中国地质大学(武汉) 本科</span>
            <br />
            <span className={cx('color-gray')}>2013.09-2017.06</span>
          </div>
          <div className={cx('h2', 'margin6')}>联系方式</div>
          <div className={cx('line')}>
            <IconFont type="icon-dianhua" className={cx('icon')} /> 18202724242
          </div>
          <div className={cx('line')}>
            <IconFont type="icon-youxiang" className={cx('icon')} style={{ marginRight: 6 }} />
            fanshundee@126.com
          </div>
        </div>
        <div>
          <div className={cx('margin20')}>
            <div className={cx('h2', 'margin6')}>专业技能</div>
            <div className={cx('line')}>
              <span className={cx('dot')} />
              熟悉 React 函数式组件开发及 Hook 的使用，对 React 不同状态管理方案有一定的实践；熟悉
              ES6 常用特性；了解 CAS 及单点登录相关知识；了解 HTTP，对其中 samesite 有一定的认识；
            </div>
            <div className={cx('line')}>
              <span className={cx('dot')} />
              对复杂表单的业务逻辑处理（表单联动/依赖/回填）、组件的封装有一定的经验；
            </div>
          </div>
          <div>
            <div className={cx('h2', 'margin6')}>其他优势</div>
            <div>
              <div className={cx('line')}>
                <span className={cx('dot')} />
                通过长期与不同团队的配合，积累了较多沟通协作的经验，能较快适应与各端同学的配合关系；
              </div>
              <div className={cx('line')}>
                <span className={cx('dot')} />
                平常有保持身体锻炼的习惯，可适应短期高强度工作，有较强抗压能力
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('footer')}>footer</div>
    </div>
  )
}
export default Resume
