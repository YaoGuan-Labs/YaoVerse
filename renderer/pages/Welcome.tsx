import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const Welcome: React.FC = () => {
  return (
    <Card>
      <Title level={2}>欢迎使用 YaoVerse</Title>
      <Paragraph>
        这是一个基于 Electron + React + Ant Design + Vite 构建的项目。
      </Paragraph>
    </Card>
  );
};

export default Welcome;
