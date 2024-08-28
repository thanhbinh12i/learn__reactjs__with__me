import { Button } from "antd";
import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons"
function LearnButton() {
      const [loading, setLoading] = useState(false);
      const handleClick = () => {
            setLoading(true);
            setTimeout(() => {
                  const result = {
                        "Code": 200,
                        data: []
                  }
                  if (result && result.Code === 200) {
                        setLoading(false);
                  }
            }, 3000)
      }

      return (
            <>
                  <Button type="primary" loading={loading} onClick={handleClick} danger={loading} >Nội dung</Button>
                  <Button icon={<ArrowRightOutlined spin={true} />}>Binhdaynee</Button>
            </>
      );
}
export default LearnButton;