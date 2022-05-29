import {Col, Form, FormInstance, Row, Table, TableProps, TreeSelect} from 'antd';
import {ColumnType as AntColumnType} from 'antd/lib/table';
import React, {FC} from 'react';
import {FormType, TableDataType} from './type';
import ValueRadio from './ValueRadio';

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
  {
    title: 'Node3',
    value: '0-2',
    children: [
      {title: 'Child Node3', value: '0-2-1'},
      {title: 'Child Node4', value: '0-2-2'},
      {title: 'Child Node5', value: '0-2-3'},
      {title: 'Child Node6', value: '0-2-4'},
    ],
  },
];

const tagOptions = [
  {label: 'Super', value: 'Super'},
  {label: 'Hyper', value: 'Hyper'},
  {label: 'Master', value: 'Master'},
];

type RadioTableFormProps = TableProps<TableDataType> & {
  form: FormInstance<FormType>
};

type ColumnType = AntColumnType<TableDataType>;
type ColumnsType = ColumnType[];

const RadioTableForm: FC<RadioTableFormProps> = ({form, ...tableProps}) => {
  /**
   * Get radio render function for cell.
   * @param {Object} options When needTree, show TreeSelect.
   * @return {Function} Returns render function for cell.
   */
  const getCellElement = (options: {radioValue: string, needTree?: boolean}): ColumnType['render'] => {
    return function RadioCell(value, record, index) {
      const radioValue = options.radioValue;
      const namePath = ['tableSetting', index, 'radioSelection'];

      const getRadio = () => {
        return (
          <Form.Item
            name={namePath}
            valuePropName='valueToCheck'
            style={{marginBottom: '0px'}}
          >
            <ValueRadio<string>
              value={radioValue}
            />
          </Form.Item>
        );
      };

      const getTreeSelect = () => {
        const isShow = options?.needTree && form.getFieldValue(namePath) === options.radioValue;
        return isShow && (
          <Form.Item
            name={['tableSetting', index, 'treeSlection']}
            rules={[{
              required: form.getFieldValue(namePath) === options.radioValue,
              message: '1つは選んでね',
            }]}
            style={{marginBottom: '0px'}}
          >
            <TreeSelect treeData={treeData} multiple />
          </Form.Item>
        );
      };

      const {needTree} = options;
      return (
        <Row key={value}>
          <Col span={needTree ? 2 : 24}>
            {getRadio()}
          </Col>
          <Col span={needTree ? 22 : 0}>
            {getTreeSelect()}
          </Col>
        </Row>
      );
    };
  };

  const columns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 32,
    },
    {
      title: 'Label',
      dataIndex: 'label',
      width: '20%',
    },
    {
      title: tagOptions[0].label,
      dataIndex: 'radioSelection',
      render: getCellElement({radioValue: tagOptions[0].value}),
      width: 32,
    },
    {
      title: tagOptions[1].label,
      dataIndex: 'radioSelection',
      render: getCellElement({radioValue: tagOptions[1].value}),
      width: 32,
    },
    {
      title: tagOptions[2].label,
      dataIndex: 'treeSelection',
      render: getCellElement({radioValue: tagOptions[2].value, needTree: true}),
    },
  ];
  return (
    <Table
      {...tableProps}
      columns={columns}
      rowKey='id'
    />
  );
};

export default RadioTableForm;
