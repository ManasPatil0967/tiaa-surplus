import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PaymentsIcon from '@mui/icons-material/Payments';
import PinIcon from '@mui/icons-material/Pin';
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import { Avatar } from "@mui/material";
import React from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import "../styles/Dashboard.css";


const Dashboard = () => {
  return (
    <>
       <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar className="app">
          <Menu>
            <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
              <h2>SURPLUS</h2>
            </MenuItem>
            <MenuItem icon={<GridViewRoundedIcon />}> Dashboard </MenuItem>
            <MenuItem icon={<ReceiptRoundedIcon />}> Invoices </MenuItem>
            <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
              <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
              <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
            </SubMenu>
            <SubMenu label="Wallets" icon={<WalletRoundedIcon />}>
              <MenuItem icon={<AccountBalanceRoundedIcon />}>
                Current Wallet
              </MenuItem>
              <MenuItem icon={<SavingsRoundedIcon />}>Savings Wallet</MenuItem>
            </SubMenu>
            <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
            <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
              <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
              <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
              <MenuItem icon={<NotificationsRoundedIcon />}>
                Notifications
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<LogoutRoundedIcon />}> Logout </MenuItem>
          </Menu>
        </Sidebar>
        <div>
          <Avatar style={{marginLeft: "1225px", marginTop: "10px"}}>A</Avatar> 
          <h1 style={{marginLeft: "20px",marginTop: "-10px"}}>WELCOME TO SURPLUS</h1>
          
          <div className="payer">
            <h3 style={{marginLeft: "50px", marginTop: "-50px"}}>Select payer</h3>
            <select className="sel">
             <option value="someOption">Income Source</option>
             <option value="otherOption">Other option</option>
            </select>
            <div className="ret">
               <h6>Retirement Account</h6>
              <h7>Current Balance</h7>
              <h4 className="line">INR 10,000.00</h4>
              <h6>IBAN</h6>
              <h7>AB11 0000 0101 1111 1111</h7>
              <h6>Account Holder</h6>
              <h7>Sam Altman</h7>
            </div>
            <div className="button">
              <PinIcon/>Share IBAN
            </div>
            <div className="button">
              <PaymentsIcon/>Request Payment
            </div>
            <div className="ben">
              <h4>Saved Beneficiaries</h4>
              <button>Add New</button>
              <Avatar>A</Avatar>
              <Avatar>A</Avatar>
              <Avatar>A</Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
