import {
    Announcement as AnnouncementIcon,
    ChangeHistory as ChangeHistoryIcon,
    HighlightOff as HighlightOffIcon,
    Link as LinkIcon,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import "../styles/TnC.css";
import SideNavBar from './SideNavBar';

const TnC = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideNavBar />
      <div className="payer" style={{ color: 'white', marginLeft: 20 }}>
        <Typography variant="h4">
          <AnnouncementIcon /> Terms and Conditions
        </Typography>
        <Typography variant="body1">
          Please read these terms and conditions carefully before using Our Service.
        </Typography>

        <Typography variant="h5">
          <ChangeHistoryIcon /> Interpretation and Definitions
        </Typography>
        <Typography variant="body1">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </Typography>

        <Typography variant="h5">
          <HighlightOffIcon /> Acknowledgment
        </Typography>
        <Typography variant="body1">
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
        </Typography>

        <Typography variant="h5">
          <LinkIcon /> Links to Other Websites
        </Typography>
        <Typography variant="body1">
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
        </Typography>

        <Typography variant="h5">
          <HighlightOffIcon /> Termination
        </Typography>
        <Typography variant="body1">
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
        </Typography>

        <Typography variant="h5">
          <ChangeHistoryIcon /> Changes to These Terms and Conditions
        </Typography>
        <Typography variant="body1">
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time.
        </Typography>
      </div>
    </div>
  );
}

export default TnC;
