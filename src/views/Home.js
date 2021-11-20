import React  from 'react'
import { Pagination, Row, Col } from 'antd'


const Home = () => {


  return (
    <>
      <Row gutter={[0, 20]}>
        <Col span={24}>
          <div>Hello, FF</div>
         
        </Col>

        <Col span={24}>
          
        </Col>

        <Col span={24}>
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </Col>

        <Col span={24}>
         
        </Col>
      </Row>
    </>
  )
}

export default  Home