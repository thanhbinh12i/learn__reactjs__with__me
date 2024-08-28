import React from 'react';
import { Carousel, Col, Collapse, Image, Row, Tabs } from 'antd';
import CardItem from '../CardItem';
import "./LearnGrid.scss"
const { Panel } = Collapse;
function LearnGrid() {
      const items = [
            {
                  key: 1,
                  label: "Tab 1",
                  children: "Nội dung tab 1"
            },
            {
                  key: 2,
                  label: "Tab 2",
                  children: "Nội dung tab 2"
            },
            {
                  key: 3,
                  label: "Tab 3",
                  children: "Nội dung tab 3"
            }
      ]
      return (
            <>

                  <Row gutter={[20, 20]}>
                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                              <CardItem title="Box 1" />
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                              <CardItem title="Box 2" />
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                              <CardItem title="Box 3" />
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                              <CardItem title="Box 4" />
                        </Col>
                  </Row>
                  <Row gutter={[20, 20]} className="mt-20">
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                              <CardItem title="Box 5" style={{ height: "400px" }} />
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                              <CardItem title="Box 6" style={{ height: "400px" }} />
                        </Col>
                  </Row>
                  <Row gutter={[20, 20]} className="mt-20">
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                              <CardItem title="Box 7" style={{ height: "400px" }} />
                        </Col>
                        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                              <CardItem title="Box 8" style={{ height: "400px" }} />
                        </Col>
                  </Row>
                  <Row gutter={[20, 20]} className="mt-20">
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                              <CardItem title="Box 9" style={{ height: "400px" }} />
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                              <CardItem title="Box 10" style={{ height: "400px" }} />
                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                              <CardItem title="Box 11" style={{ height: "400px" }} />
                        </Col>
                  </Row>
                  <Carousel autoplay>
                        <div className="slider-item">
                              1
                        </div>
                        <div className="slider-item">
                              2
                        </div>
                        <div className="slider-item">
                              3
                        </div>
                        <div className="slider-item">
                              4
                        </div>
                  </Carousel>
                  <Collapse defaultActiveKey="1" accordion={true}>
                        <Panel header="This is panel header 1" key="1">
                              <p>Panel 1</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="3">
                              <p>Panel 2</p>
                        </Panel>
                        <Panel header="This is panel header 2" key="3">
                              <p>Panel 3</p>
                        </Panel>
                  </Collapse>
                  <Image width={200}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                  <Tabs defaultActiveKey="1" items={items} />
            </>
      );

}
export default LearnGrid;