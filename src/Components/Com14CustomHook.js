import React from "react";
import { useLocalStorage } from "./Hooks/useLocalStorage";

const Com14CustomHook = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [family, setFamily] = useLocalStorage("family", "");
  const [age, setAge] = useLocalStorage("age", 20);
  return (
    <div>
      Name:
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      Family:
      <input
        type="text"
        value={family}
        onChange={(event) => setFamily(event.target.value)}
      />
      <br />
      Age: {age}
      <button onClick={() => setAge(100)}>Age Change</button>
    </div>
  );
};

export default Com14CustomHook;
