import React, {useEffect, useState} from "react";
import {FormGroup, InputGroup, TextArea} from "@blueprintjs/core";

type TextAreaComponentProps = {
  label?: string;
  helperText?: string;
  labelInfo?: string;
  value: string;
  placeholder?: string;
  onChange(value: string): void;
};

export function TextAreaComponent(props: TextAreaComponentProps) {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    props.onChange(value);
  }, [value]);

  return (
    <FormGroup
      label={props.label}
      helperText={props.helperText}
      labelInfo={props.labelInfo}
    >
      <TextArea
        fill
        onChange={(e) => setValue(e.target.value)}
        placeholder={props.placeholder}
        value={value || ''}
      />
    </FormGroup>
  )
}