import React from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import "../styles/Dashboard.css";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import SearchIcon from "@mui/icons-material/Search";
import { signOut } from "../lib/firebase/auth";
import { useNavigate } from "react-router-dom";

function SideNavBar (){
    const navigate = useNavigate();

    const signOutUser = async () => {
        await signOut();
        navigate('/');
    }

    return (
        <Sidebar className="app">
          <Menu>
            <MenuItem className="menu1" icon={<MenuRoundedIcon />}>
              <h2>SURPLUS</h2>
            </MenuItem>
            <MenuItem icon={<GridViewRoundedIcon />} onClick = {() => {navigate('/dashboard')}}> Dashboard </MenuItem>
            <MenuItem icon={<SearchIcon />}onClick = {() => {navigate('/recommend')}}> Recommendations </MenuItem>
            <SubMenu label="Charts" icon={<BarChartRoundedIcon />}>
              <MenuItem icon={<TimelineRoundedIcon />}> Timeline Chart </MenuItem>
              <MenuItem icon={<BubbleChartRoundedIcon />}>Bubble Chart</MenuItem>
            </SubMenu>
            <MenuItem icon={<MonetizationOnRoundedIcon />}>Transactions</MenuItem>
            <SubMenu label="Settings" icon={<SettingsApplicationsRoundedIcon />}>
              <MenuItem icon={<AccountCircleRoundedIcon />}> Account </MenuItem>
              <MenuItem icon={<ShieldRoundedIcon />}> Privacy </MenuItem>
              <MenuItem icon={<NotificationsRoundedIcon />}>
                Notifications
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<LogoutRoundedIcon />} onClick={signOutUser} > Logout </MenuItem>
          </Menu>
        </Sidebar>
    )
}

export default SideNavBar;
