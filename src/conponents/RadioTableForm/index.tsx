import React, {FC, useState} from 'react';
import {Form, Input} from 'antd';
import {useForm} from 'antd/lib/form/Form';
import {FormType} from './type';
import RadioTableForm from './RadioTableForm';

const TreeSelectInTableInsideForm: FC<any> = (props) => {
  const [form] = useForm<FormType>();
  const [displayValue, setDisplayalue] = useState('');
  const initData: FormType = {
    category: 'こんにちは',
    tableSetting: [
      {
        id: 'a',
        label: '過去',
        radioSelection: undefined,
        treeSelection: undefined,
      },
      {
        id: 'b',
        label: '未来',
        radioSelection: undefined,
        treeSelection: undefined,
      },
    ],
  };


  return (
    <>
      <Form
        form={form}
        initialValues={initData}
        onValuesChange={() => {
          setDisplayalue(JSON.stringify(form.getFieldsValue(), null, 2));
        }}
      >
        <Form.Item name="category" label="Category">
          <Input />
        </Form.Item>
        <Form.Item noStyle shouldUpdate>
          {() => (
            <Form.Item noStyle name="tableSetting" valuePropName="dataSource">
              <RadioTableForm form={form} size="small"/>
            </Form.Item>
          )}
        </Form.Item>
      </Form>
      <Input.TextArea
        value={displayValue}
        rows={10}
      />
    </>
  );
};

export default TreeSelectInTableInsideForm;
