import React, { Component } from 'react';
import Form from 'bee-form';

class FormAdapter extends Component {
  render () {
    const { children, ...other } = this.props;
    return (
      <Form {...other}>
        {children}
      </Form>
    );
  }
}

class FormItemAdapter extends Component {
  render () {
    const {
      children,
      label,
      labelCol,
      wrapperCol,
      className,
      ...other
    } = this.props;

    const cls = `${className} u-form-item-row`;
    const wrapperCls = wrapperCol ? `u-form-item-content u-form-item-col-${wrapperCol.span}` : '';

    return (
      <Form.FormItem className={cls} {...other}>
        <div className={wrapperCls}>
          {children}
        </div>
      </Form.FormItem>
    );
  }
}

FormAdapter.Item = FormItemAdapter;
FormAdapter.create = Form.createForm;
FormAdapter.getFieldDecorator = Form.getFieldDecorator;
FormAdapter.getFieldValue = Form.getFieldValue;
FormAdapter.setFields = Form.setFields;
FormAdapter.validateFields = Form.validateFields;

export default FormAdapter;
