import React from "react";
import Button from "/src/components/ui/button/button";

function Nav() {
  return (
    <nav>
      <Button minWidth={260} link="/buy">
        Купить
      </Button>
    </nav>
  );
}

export default Nav;
