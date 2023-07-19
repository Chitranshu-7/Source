import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Select as MySelect } from 'react-dropdown-select';
import { IndianStates } from 'react-indian-states';

import './index.css';

function Dropdown() {
  const [value, setValue] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedState, setSelectedState] = useState(null);

  const options = useMemo(() => {
    const countryData = countryList().getData();
    return countryData.map((country) => ({
      value: country.value,
      label: `${country.label} (${country.value})`,
    }));
  }, []);

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
  };

  const selectCode = (value) => {
    setPhone(value);
  };

  const handleStateChange = (selectedOptions) => {
    setSelectedState(selectedOptions[0]);
  };

  const indianStates = useMemo(() => {
    return IndianStates.map((state) => ({
      value: state.code,
      label: state.name,
    }));
  }, []);

  return (
    <>
      <div className="saming">
        <Select
          style={{ width: '200px' }}
          options={options}
          value={value}
          onChange={changeHandler}
        />
        <PhoneInput
          country={'in'}
          value={phone}
          onChange={selectCode}
          copyNumbersOnly
        />
        <MySelect
          options={indianStates}
          value={selectedState}
          onChange={handleStateChange}
          placeholder="Select State"
        />
      </div>
    </>
  );
}

export default Dropdown;
