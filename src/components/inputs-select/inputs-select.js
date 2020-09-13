import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";

import { CSSTransition } from "react-transition-group";

import { Container, Filter, Icon, Options, Option } from "./styles";

const SelectInput = ({ label, name, value, options, onChange, style }) => {
  const [state, setState] = useState(options[0]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (value) {
      const found = options.find(({ option }) => option == value);
      setState(found);
    } else {
      setState(options[0]);
    }
  }, [value]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const closeExpand = () => {
    setTimeout(() => setExpanded(false), 150);
  };

  return (
    <Container
      onClick={toggleExpanded}
      onBlur={closeExpand}
      tabIndex={0}
      style={style}
    >
      <Filter>
        <FormattedMessage
          id={state.label}
          defaultMessage={state.option.toString()}
        />
        <Icon className="fas fa-chevron-down" expanded={expanded} />

        <CSSTransition
          in={expanded}
          timeout={500}
          classNames="expand"
          unmountOnExit
        >
          <Options>
            {options.map(({ label, option }) => (
              <Option key={option} onClick={onChange.bind(null, name, option)}>
                <FormattedMessage
                  id={label}
                  defaultMessage={option.toString()}
                />
              </Option>
            ))}
          </Options>
        </CSSTransition>
      </Filter>
    </Container>
  );
};

export default SelectInput;
