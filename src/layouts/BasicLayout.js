import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
// import logo from '@/assets/logo.svg'
import Home from '@/views/Home'
import './BasicLayout.less'

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
  const location = useLocation()

  return ( 
    <div>
      <ConfigProvider getPopupContainer={trigger => trigger?.parentNode || document.body}>
          <RouteFromConfig {...routeConfig} />
      </ConfigProvider>
    </div>
  )
}

export default BasicLayout 
