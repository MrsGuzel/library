import React from "react";
import { Link } from "react-router-dom";
import Flex from "../../styles/Flex";

const Navbar = () => {
  return (
    <>
     <Flex>
      <div>
         <h1>Clarusway Library</h1>
      </div>
     
</Flex>
      <Flex>
        <div>
            <Link to={"/"}>HOME</Link>
        <Link to={"/about"}>ABOUT</Link>
        <Link to={"/register"}>REGISTER</Link>
        <Link to={"/Login"}>LOGIN</Link>
        </div>
      
      </Flex>
    
    </>
   
  );
};

export default Navbar;
