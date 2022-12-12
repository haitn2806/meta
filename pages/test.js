import React from "react";
import { useState } from "react";

const a = {
  ID: 0,
  Title: "",
  Error: false,
  Object:
    '{"id":"50F030677N766303X","status":"CREATED","links":[{"href":"https://api.sandbox.paypal.com/v2/checkout/orders/50F030677N766303X","rel":"self","method":"GET"},{"href":"https://www.sandbox.paypal.com/checkoutnow?token=50F030677N766303X","rel":"approve","method":"GET"},{"href":"https://api.sandbox.paypal.com/v2/checkout/orders/50F030677N766303X","rel":"update","method":"PATCH"},{"href":"https://api.sandbox.paypal.com/v2/checkout/orders/50F030677N766303X/capture","rel":"capture","method":"POST"}]}',
  Code: null,
};

const test = () => {
  const test = JSON.parse(a.Object);
  console.log("test", test);

  const [iinput, setIinput] = useState();

  return (
    <div className="test123">
      <input onChange={(e) => setIinput(e.target.value)} />
    </div>
  );
};

export default test;
