import React from 'react';
import {Card, Layout} from 'antd';
import {Header, Content} from 'antd/lib/layout/layout';
import
TreeSelectInTableInsideForm from './conponents/TreeSelectInTableInsideForm';

/**
 * App
 * @return {any} JSX
 */
function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Content style={{padding: '5rem 50px'}}>
          <Card className="test-1">
            <TreeSelectInTableInsideForm />
          </Card>
        </Content>
      </Header>
    </Layout>
  );
}

export default App;
