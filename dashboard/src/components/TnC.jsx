import React from 'react';
import SideNavBar from './SideNavBar';
import "../styles/Dashboard.css";

const TnC = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <SideNavBar />
            <div className="payer" style={{color:'white', marginLeft:20}}>
                <h1>Terms and Conditions</h1>
                <p>
                    Please read these terms and conditions carefully before using Our Service.
                </p>
                <h2>Interpretation and Definitions</h2>
                <p>
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
                <h2>Acknowledgment</h2>
                <p>
                    By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                </p>
                <h2>Links to Other Websites</h2>
                <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                </p>
                <h2>Termination</h2>
                <p>
                    We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                </p>
                <h2>Changes to These Terms and Conditions</h2>
                <p>
                    We reserve the right, at Our sole discretion, to modify or replace these Terms at any time.
                </p>
            </div>
        </div>
    )
}

export default TnC;
