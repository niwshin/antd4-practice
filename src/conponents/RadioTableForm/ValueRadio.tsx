import {Radio, RadioChangeEvent} from 'antd';
import {AbstractCheckboxProps} from 'antd/lib/checkbox/Checkbox';
import React from 'react';

interface ValueRadioChangeEventTarget extends ValueRadioProps {
  checked: boolean;
}

interface ValueRadioChangeEvent {
  target: ValueRadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

type ValueRadioProps<T=any> = Omit<AbstractCheckboxProps<ValueRadioChangeEvent>, 'checked'> & {
  valueToCheck?: T
};

/**
 * radio that detarmine value by value props instead of boolean
 * @param {ValueRadioProps<T>} props
 * @return {JSX.Element}
 */
const ValueRadio = <T=any>(props: ValueRadioProps<T>): JSX.Element => {
  const handleChange = (event: ValueRadioChangeEvent) => {
    const targetValue = event.target.value;
    console.log('target', {
      ...event.target,
      valueToCheck: targetValue,
    });
    const {onChange} = props;
    if (onChange) {
      onChange({
        ...event,
        target: {
          ...event.target,
          valueToCheck: targetValue,
        },
      });
    }
  };

  const {children, ...restProps} = props;
  return (
    <Radio
      {...restProps}
      onChange={handleChange as (e: RadioChangeEvent) => void} // ズルを許して...
      checked={props.value === props.valueToCheck }
    >
      {children}
    </Radio>
  );
};

export default ValueRadio;
