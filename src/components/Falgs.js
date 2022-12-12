import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Vn } from "react-flags-select";

const Flags = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="language">
      <ReactFlagsSelect
        defaultCountry="US"
        // defaultCountry="VN"
        value="VN"
        countries={["US", "VN", "JP"]}
        customLabels={{
          US: "US",
          VN: "VN",
          JP: "JP",
        }}
        selected={selected}
        onSelect={(code) => setSelected(code)}
        placeholder={
          <div>
            <Vn />

            {`   VN`}
          </div>
        }
        // defaultValue="adsa"
        style={{
          backgroundColor: "antiquewhite",
          color: "#fff",
          border: "none",
        }}
      />
    </div>
  );
};

export default Flags;
