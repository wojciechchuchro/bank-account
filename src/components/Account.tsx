import React, { useState } from "react";
import NavBar from "./NavBar";
export default function Account() {
  const [money, setMoney] = useState<number>(15000);
  return (
    <>
      <NavBar money={money} />
    </>
  );
}
