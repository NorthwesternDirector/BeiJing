import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
// import logo from '@/assets/logo.svg'
import Home from '@/views/Home'
import styles from './BasicLayout.module.less'
import classNames from 'classnames/bind'
import Time from '@/views/time'
import 'antd/dist/antd.css';

const cx = classNames.bind(styles)

const routeConfig = {
  path: '/',
  routes: [
    {
      icon: <SmileOutlined />,
      name: 'page1',
      path: '/home',
      exact: true,
      component: Home,
    },
    {
      icon: <SmileOutlined />,
      name: '',
      path: '/time',
      exact: true,
      component: Time,
    },
    {
      icon: <SmileOutlined />,
      name: 'page2',
      path: '/group',
      routes: [
        {
          icon: <SmileOutlined />,
          name: 'subPage',
          path: '/group/subMenu',
          component: () => '子页面',
        },
      ],
    },
    {
      path: '/',
      exact: true,
      redirect: '/home',
    },
  ],
}

const RouteFromConfig = ({ path, exact, redirect, component: Component, routes = [] }) => (
  <Route path={path} exact={exact}>
    {redirect && <Redirect to={redirect} />}
    {Component && <Component />}

    {routes.map(route => (
      <RouteFromConfig key={route.path} {...route} />
    ))}
  </Route>
)

const BasicLayout = () => {
  return ( 
    <div className={cx('basic-layout')}>
      <div className={cx('basic-layout-header')}>TimeM</div>
      <ConfigProvider getPopupContainer={trigger => trigger?.parentNode || document.body}>
          <RouteFromConfig {...routeConfig} />
      </ConfigProvider>
    </div>
  )
}

export default BasicLayout 
