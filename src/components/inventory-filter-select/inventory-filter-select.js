import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import GET_VALUES from "../../queries/vehicle/values";

import SelectInput from "../inputs-select";

const SelectFilter = ({ field_name, label, doc, onChange, style }) => {
  const [options, setOptions] = useState([]);
  const [getValues, { loading, data }] = useLazyQuery(GET_VALUES(field_name));

  useEffect(() => {
    getValues();
  }, []);

  useEffect(() => {
    if (data) {
      const oldOptions = data.vehiclesConnection.groupBy[field_name];
      const newOptions = [{ label, option: "" }];

      oldOptions.forEach(({ key }) => {
        newOptions.push({
          label: `values.${field_name}.${key}`,
          option: key,
        });
      });

      setOptions(newOptions);
    }
  }, [data]);

  if (!options.length) return null;

  return (
    <SelectInput
      name={field_name}
      value={doc[field_name]}
      options={options}
      onChange={onChange}
      style={style}
    />
  );
};

export default SelectFilter;
