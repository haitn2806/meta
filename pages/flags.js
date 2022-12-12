import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Us } from "react-flags-select";

const flags = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <Us /> United States
      <div>asd</div>
      <ReactFlagsSelect
        countries={["US", "GB", "FR", "DE", "IT"]}
        customLabels={{
          US: "EN-US",
          GB: "EN-GB",
          FR: "FR",
          DE: "DE",
          IT: "IT",
        }}
        selected={selected}
        onSelect={(code) => setSelected(code)}
        placeholder="Select Language"
      />
    </div>
  );
};

export default flags;
