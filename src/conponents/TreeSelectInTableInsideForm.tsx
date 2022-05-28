/** TODO
 * (1) table に onChangeRadio を追加し、値を渡す。
 * (2) radio を cell に置く
 * (3) Radio が変化しても TreeSelect に影響がないことを確認する
 */
import React, {FC} from 'react';
import {Form, Input, Table, TreeSelect} from 'antd';
import {useForm} from 'antd/lib/form/Form';
import {ColumnType} from 'antd/lib/table';

type TableDataType = {
  id: string,
  label: string,
  tags?: string[],
  selection?: string[]
};

type FormType = {
  category: string,
  tableSetting: TableDataType[],
};

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];

const TreeSelectInTableInsideForm: FC<any> = (props) => {
  const [form] = useForm<FormType>();
  const initData: FormType = {
    category: 'こんにちは',
    tableSetting: [
      {
        id: 'a',
        label: '過去',
        tags: [],
        selection: undefined,
      },
      {
        id: 'a',
        label: '未来',
        tags: [],
        selection: undefined,
      },
    ],
  };

  type Columntype = ColumnType<TableDataType>[];

  const columns: Columntype = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Label',
      dataIndex: 'label',
    },
    {
      title: 'Tags',
      dataIndex: 'tag',
    },
    {
      title: 'TreeSelect',
      dataIndex: 'selection',
      render: (_0, _1, index) => (
        <Form.Item name={['tableSetting', index, 'selection']}>
          <TreeSelect treeData={treeData} multiple />
        </Form.Item>
      ),
    },
  ];

  return (
    <>
      <Form form={form} initialValues={initData}>
        <Form.Item name="category" label="Category">
          <Input />
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {() => (
            <Form.Item name="tableSetting" valuePropName="dataSource">
              <Table columns={columns} />
            </Form.Item>
          )}
        </Form.Item>
      </Form>
      <Input.TextArea
        value={JSON.stringify(form.getFieldsValue(), null, 2)}
        rows={10}
      />
    </>
  );
};

export default TreeSelectInTableInsideForm;
