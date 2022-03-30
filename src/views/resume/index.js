import React from 'react'
import classNames from 'classnames/bind'
import { Divider, Tag } from 'antd'
import IconFont from '@/components/IconFont'
import styles from './index.module.less'

import img2 from './bg.JPG'

const cx = classNames.bind(styles)

const Resume = () => {
  return (
    <div className={cx('out')}>
      <div className={cx('bg')}>
        <img src={img2} width="100%" />
        <div className={cx('name', 'margin30')}>
          <div className={cx('h1')}>樊顺</div>
        </div>
        <div className={cx('personal-info-part')}>
          <p>
            男<Divider type="vertical" />
            27岁
            <Divider type="vertical" />
            两年工作经验
            <Divider type="vertical" />
            中共党员
          </p>
        </div>
        <div className={cx('education')}>
          <div className={cx('margin6')}>
            <div className={cx('color-gray', 'small-text')}>
              硕士 <Divider type="vertical" />
              2017-2020
            </div>
            <div>中国海洋大学</div>
          </div>
          <div>
            <div className={cx('color-gray', 'small-text')}>
              本科 <Divider type="vertical" />
              2013-2017
            </div>
            <div>
              中国地质大学<span className={cx('small-text')}>(武汉)</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('jd-tag', 'margin12')}>
        <div>
          <spn className={cx('jd-tag-name')}>求职意向 : 前端开发 </spn>
          <Divider type="vertical" />
          <IconFont type="icon-dianhua" className={cx('icon')} />
          18202724242
          <Divider type="vertical" />
          <IconFont type="icon-youxiang" className={cx('icon')} />
          fanshundee@126.com
        </div>
      </div>
      <div className={cx('content')}>
        <div className={cx('margin20')}>
          <div className={cx('h2', 'color-or')}>工作经历</div>
          <div className={cx('margin12')}>
            <div className={cx('company-title', 'h3')}>
              <IconFont type="icon-mi" className={cx('icon')} />
              <span>小米-数据中台</span>
              <div className={cx('date')}>2020.07-至今</div>
            </div>
            <div className={cx('margin6')}>
              <div className={cx('h4', 'project')}>
                数据工场<span className={cx('date')}>数据开发平台</span>
              </div>
              <div className={cx('inner-line')}>
                <div className={cx('p')}>
                  <strong>工作概要: </strong>在数据工场 V2
                  版本功能急需完善及扩展的情况下，通过高质量的需求交付、高效的组件封装& UI
                  框架升级以及对用户问题反馈的快速响应，保证了项目 V2
                  版本的平稳运行及快速迭代，调度、资源管理、元数据管理等核心模块在用户之间也留下了良好的口碑。在项目
                  V2 版本发展的瓶劲期，积极配合各端同学，完成了 V3
                  版本雏形的构建，目前已成为公司主流数据开发工具。
                </div>
                <div>
                  <div>
                    <strong>技术要点: </strong> 1⃣️ 基于 React 技术栈，熟练运用 React Hooks
                    进行常规开发 2⃣️ 对 Antd 常用 UI
                    组件进行二次封装，满足项目定制化需求，覆盖表单增删查改等逻辑场景，提升团队交付效率
                    3⃣️ 使用 Redux、Context 等工具合理化项目状态管理。
                    <Tag>React</Tag>
                    <Tag>React Hooks</Tag>
                    <Tag>Antd</Tag>
                    <Tag>Redux</Tag>
                    <Tag>Context</Tag>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx('h4', 'project')}>
              集团数据看板<span className={cx('date')}>移动端H5看数平台</span>
            </div>
            <div className={cx('inner-line')}>
              <div className={cx('p')}>
                <strong>工作概要: </strong>
                在公司各部门迫切看数需求的集中提出以及前端人手不足的情况下，通过沟通后合理化需求降低开发成本、组件封装与复用以及加班保质保量完成阶段性任务等手段，与多位(10+)产品同学顺利高效配合，使项目内容丰富度短期内大幅提升(新增20+主题看板)，实现了移动端便捷看数的从无到有；目前该项目几乎涵盖了公司产品生命周期全链路数据的可视化展示，为各部门看数决策、看数考核等提供了极大的便利；同时近期对该项目的用户体验及性能的优化也在逐步进行。
              </div>
              <div>
                <strong>技术要点: </strong>
                1⃣️ 利用事件流及事件监听原理，优化用户在移动端图表操作体验 2⃣️ 利用原生 table
                元素实现诸如行列滚动吸顶、按层级展开收起、列自动定位等功能 3⃣️ 利用 Intersection
                Observer API 及 Performance API 优化项目性能监测策略，并借助 Elastic APM 能力在
                Kibana 中进行可视化展示及交互式查询。
                <Tag>React</Tag>
                <Tag>Echarts</Tag>
                <Tag>Performance API</Tag>
              </div>
            </div>
          </div>
          <div className={cx('company-title', 'h3')}>
            <IconFont type="icon-mi" className={cx('icon')} />
            <div>小米-大数据部(实习)</div>
            <span className={cx('date')}>2019.11-2020.01</span>
          </div>
          <div className={cx('h4', 'project')}>
            鹰眼系统<span className={cx('date')}>产品口碑分析平台</span>
          </div>
        </div>
        <div className={cx('footer-part')}>
          <div>
            <div className={cx('h2', 'margin6', 'color-or')}>专业技能</div>
            <div className={cx('p')}>
              <div>
                <span className={cx('point')} />
                熟悉 React 函数式组件开发及 React Hooks 的使用，对 React
                不同的状态管理方案有一定的实践；掌握(JS/CSS/HTML)前端基础，熟悉 ES6 常用特性；了解
                HTTP 及 Cookie 相关知识。
              </div>
              <div>
                <span className={cx('point')} />
                理解组件化开发思想，对复杂表单的业务逻辑处理、组件的封装有一定的经验。
              </div>
              <div>
                <span className={cx('point')} />
                针对项目性能优化及性能监测的埋点策略实现有一定的实践。
              </div>
            </div>
          </div>
          <div>
            <div className={cx('h2', 'margin6', 'color-or')}>其他优势</div>
            <div className={cx('p')}>
              <div>
                <span className={cx('point')} />
                通过长期与不同团队的配合，积累了较多沟通协作的经验，能较快适应与各端同学的配合关系。
              </div>
              <div>
                <span className={cx('point')} />
                平常有保持身体锻炼的习惯，可适应短期高强度工作，有较强抗压能力。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Resume
