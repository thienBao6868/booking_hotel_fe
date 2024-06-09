import React, { useState } from "react";
import UserInfo from "../components/components/UserInfo";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MyBooking from "../components/components/MyBooking";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";

const ACCOUNT_TABS = [
    {
      value: "userInfo",
      component: <UserInfo />,
      icon: <AccountBoxIcon />,
    },
    {
      value: "Mybooking",
      component: <UserInfo/>,
      icon: <BusinessCenterIcon />,
    },
  ];

const UserDetail = () => {
  const [currentTab, setCurrentTab] = useState("userInfo");
  
  return (
    <Container>
      <div className="flex space-x-6 mt-8">
        <Tabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={(e, value) => setCurrentTab(value)}
          orientation="vertical"
          visibleScrollbar
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab
            sx={{width:500}}
              disableRipple
              key={tab.value}
              label={tab.value}
              icon={tab.icon}
              value={tab.value}
              iconPosition="start"
            />
          ))}
        </Tabs>

        <Box sx={{ mb: 5 }} />

        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </div>
    </Container>
  );
};

export default UserDetail;
