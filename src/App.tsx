import React from 'react';
import {Anchor, Card, Layout, Typography} from 'antd';
import TreeSelectInTableInsideForm from './conponents/RadioTableForm';

/**
 * App
 * @return {any} JSX
 */
function App() {
  return (
    <Layout className="layout">
      <Layout.Header>
        <div className="logo" />
      </Layout.Header>
      <Layout>
        <Layout.Sider style={{background: '#fff'}}>
          <Anchor>
            <Anchor.Link href="#radio-inside-each-table-cell" title="Radio inside each Table cell" />
          </Anchor>
        </Layout.Sider>
        <Layout.Content style={{padding: '0 50px'}}>
          <Card
            title={
              <Typography.Title level={5}>
                <Typography.Link href={'#radio-inside-each-table-cell'}>
                Radio inside each Table cell
                </Typography.Link>
              </Typography.Title>}
          >
            <TreeSelectInTableInsideForm />
          </Card>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
