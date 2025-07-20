import ComponentC from "./ComponentC";
import {useContext} from 'react'
import UserContext from './Context/UserContext'

function ComponentB() {
  const getValue = useContext(UserContext);
  return (
    <>
      <h1>Component B</h1>
      <ComponentC />
    </>
  );
}

export default ComponentB;
