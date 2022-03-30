import React from 'react'
import { Pagination, Row, Col } from 'antd'
import './test'

const Home = () => {
  return (
    <>
      <Row gutter={[0, 20]}>
        <Col span={24}>
          <div>Hello, FF</div>
        </Col>
        <Col span={24} />
        <Col span={24}>
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </Col>
        <Col span={24} />
      </Row>
    </>
  )
}

export default Home
