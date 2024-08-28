import { Badge, Button, Dropdown } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./Notify.scss"

function Notify() {
      const items = [
            {
                  label: <div className="notify__item">
                        <div className="notify__item-icon">
                              <BellOutlined />
                        </div>
                        <div className="notify__item-content">
                              <div className="notify__item-title">
                                    Learn React
                              </div>
                              <div className="notify__item-time">
                                    10 minutes ago
                              </div>
                        </div>
                  </div>,
                  key: '1',
            },
            {
                  label: <div className="notify__item">
                        <div className="notify__item-icon">
                              <BellOutlined />
                        </div>
                        <div className="notify__item-content">
                              <div className="notify__item-title">
                                    Message
                              </div>
                              <div className="notify__item-time">
                                    15 minutes ago
                              </div>
                        </div>
                  </div>,
                  key: '2',
            },
            {
                  label: <div className="notify__item">
                        <div className="notify__item-icon">
                              <BellOutlined />
                        </div>
                        <div className="notify__item-content">
                              <div className="notify__item-title">
                                    Money
                              </div>
                              <div className="notify__item-time">
                                    30 minutes ago
                              </div>
                        </div>
                  </div>,
                  key: '3',
            },
            {
                  label: <div className="notify__item">
                        <div className="notify__item-icon">
                              <BellOutlined />
                        </div>
                        <div className="notify__item-content">
                              <div className="notify__item-title">
                                    Play Game
                              </div>
                              <div className="notify__item-time">
                                    1 hour ago
                              </div>
                        </div>
                  </div>,
                  key: '4',
            }
      ];
      return (
            <>
                  <Dropdown
                        menu={{
                              items,
                        }}
                        trigger={['click']}
                        dropdownRender={(menu) => (
                              <>
                                    <div className="notify__dropdown">
                                          <div className="notify__header">
                                                <div className="notify__header-title">
                                                      <BellOutlined /> Notification
                                                </div>
                                                <Button type="link">View All</Button>
                                          </div>
                                          <div className="notify__body">
                                                {menu}
                                          </div>
                                    </div>
                              </>
                        )}
                  >
                        <Badge dot>
                              <Button type="text" icon={<BellOutlined />}></Button>
                        </Badge>

                  </Dropdown>
            </>
      )
}
export default Notify;