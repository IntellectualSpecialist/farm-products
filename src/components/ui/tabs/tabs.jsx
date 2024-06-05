import React, { useState } from "react";
// import { Li } from "/src/components/styled";
import { StyledList, StyledButton } from "./styles.js";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <StyledList>
        {tabs &&
          tabs.map((item, index) => {
            return (
              <li key={item.title}>
                <StyledButton
                  key={item.title}
                  {...(index === activeTab
                    ? { active: true }
                    : { onClick: () => setActiveTab(index) })}
                >
                  {item.title}
                </StyledButton>
              </li>
            );
          })}
      </StyledList>
      {tabs[activeTab].content}
    </>
  );
}

export default Tabs;
