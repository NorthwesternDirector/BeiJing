import React from 'react'
import classNames from 'classnames/bind'
import { Divider, Avatar, Tag } from 'antd'
import IconFont from '@/components/IconFont'
import styles from './index.module.less'
import img from './favicon.JPG'

const cx = classNames.bind(styles)

const Resume = () => {
  return (
    <div className={cx('out')}>
      <div className={cx('content')}>
        <div>
          <div className={cx('personal-info-part', 'margin30')}>
            <Avatar size="large" src={img} className={cx('customAvatar')} />
            <div className={cx('h1')}>樊顺</div>
            <p className={cx('margin20')}>
              男<Divider type="vertical" />
              27岁
              <Divider type="vertical" />
              硕士
              <Divider type="vertical" />
              中共党员
            </p>
            <div className={cx('jd-tag', 'h3--light', 'margin20')}>求职意向：前端开发工程师</div>
          </div>
          <div className={cx('margin30')}>
            <div className={cx('h2', 'margin6')}>教育经历</div>
            <div>
              <span className={cx('dot')} />
              <span>中国海洋大学 硕士</span>
              <br />
              <span className={cx('color-gray')}>2017.09-2020.06</span>
            </div>
            <div>
              <span className={cx('dot')} />
              <span>中国地质大学(武汉) 本科</span>
              <br />
              <span className={cx('color-gray')}>2013.09-2017.06</span>
            </div>
          </div>
          <div>
            <div className={cx('h2', 'margin6')}>联系方式</div>
            <div className={cx('line')}>
              <IconFont type="icon-dianhua" className={cx('icon')} /> 18202724242
            </div>
            <div className={cx('line')}>
              <IconFont type="icon-youxiang" className={cx('icon')} style={{ marginRight: 6 }} />
              fanshundee@126.com
            </div>
          </div>
        </div>
        <div>
          <div className={cx('margin30')}>
            <div className={cx('h2', 'margin8')}>工作经历</div>
            <div className={cx('margin12')}>
              <div className={cx('line', 'margin6')}>
                <IconFont type="icon-mi" className={cx('icon')} />
                <span className={cx('h3')}>小米-业务中台&nbsp;&nbsp;</span>
                <span className={cx('color-gray')}>2020.07-至今</span>
              </div>
              <div className={cx('margin6')}>
                <div className={cx('h4')}>数据工场v2&v3（数据开发平台）</div>
                <strong>项目内容：</strong>在数据工场 V2
                版本功能急需完善及扩展的情况下，通过高质量的需求交付、高效的组件封装& UI
                框架升级以及对用户问题反馈的快速响应，保证了工场 V2
                版本的平稳运行及快速迭代，调度、资源管理、元数据管理等核心模块在用户之间也留下了良好的口碑。在工场
                V2 版本发展的瓶劲期，积极配合各端同学，完成了 V3
                版本雏形的构建，尽可能地为用户提供一款更好用的数据开发管理工具
                <div>
                  <strong>技术应用：</strong>
                  <Tag>React</Tag>
                  <Tag>React Hooks</Tag>
                  <Tag>Antd</Tag>
                  <Tag>Redux</Tag>
                  <Tag>Context</Tag>
                </div>
              </div>
              <div className={cx('h4')}>集团数据看板（移动端H5看数平台）</div>
              <strong>项目内容：</strong>
              在公司各部门迫切看数需求的集中提出以及前端人手不足的情况下，通过沟通后合理化需求降低开发成本、组件封装与复用以及加班保质保量完成阶段性任务等手段，与多位(10+)产品同学顺利高效配合，使集团看板内容的丰富度短期内大幅提升（新增20+主题看板）；从“幼年期”的几个简单看板，到目前该项目几乎涵盖了公司产品生命周期全链路（从计划生产到销售反馈）数据的可视化展示，为各部门看数决策、看数考核等提供了极大的便利。同时，近期对该项目的用户体验，项目性能优化也在逐步进行，为步入壮年期做铺垫。
              <div>
                <strong>技术应用：</strong>
                <Tag>React</Tag>
                <Tag>Antd</Tag>
                <Tag>Echarts</Tag>
                <Tag>Intersection observer API</Tag>
              </div>
            </div>

            <div className={cx('line', 'margin6')}>
              <IconFont type="icon-mi" className={cx('icon')} />
              <div className={cx('h4')}>小米-大数据部(实习)&nbsp;&nbsp;</div>
              <span className={cx('color-gray')}>2019.11-2020.01</span>
            </div>
            <div className={cx('h4')}>鹰眼系统（产品信息监控平台）</div>
          </div>
          <div className={cx('margin30')}>
            <div className={cx('h2', 'margin6')}>专业技能</div>
            <div className={cx('line')}>
              <span className={cx('dot')} />
              熟悉 React 函数式组件开发及 React Hooks 的使用，对 React
              不同的状态管理方案有一定的实践；熟悉 ES6 常用特性；了解 CAS 及单点登录相关知识；了解
              HTTP
            </div>

            <div className={cx('line')}>
              <span className={cx('dot')} />
              对复杂表单的业务逻辑处理（表单联动/依赖/回填）、组件的封装有一定的经验；
            </div>
            <div className={cx('line')}>
              <span className={cx('dot')} />
              对针对项目性能监测的埋点策略实现有一定的实践
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
    </div>
  )
}
export default Resume
