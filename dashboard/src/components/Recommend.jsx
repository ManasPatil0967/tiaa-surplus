import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SideNavBar from './SideNavBar';
import "../styles/Dashboard.css";
import { db } from '../lib/firebase/config';
import { onAuthStateChanged } from '../lib/firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const Recommend = () => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({});
    const [income, setIncome] = useState(0);
    const [stocks, setStocks] = useState("");
    const [crypto, setCrypto] = useState("");
    const [retirement, setRetirement] = useState(0);

    useEffect(() => {
        onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                setUserData(docSnap.data());
                console.log(userData);
            }
        });
    }, []);

    useEffect(() => {
        if (userData.Income) {
            setIncome(userData.Income);
            getCrypto();
            getStocks();
        }
    }, [userData]);

    useEffect(() => {
        if (stocks && crypto) {
            setRetirement(parseInt(stocks.split(":").pop().replace("}","")) + parseInt(crypto.split(":").pop().replace("}","")));
        }
    }, [stocks, crypto]);

    const getCrypto = async () => {
        try {
            const res = await axios.post('https://tiaa-surplus-api.onrender.com/crypto', { savings_amount : parseInt(userData.Income) });
            setCrypto(JSON.stringify(res.data));
        } catch (error) {
            console.log(error);
        }
    }

    const getStocks= async () => {
        try {
            const res = await axios.post('https://tiaa-surplus-api.onrender.com/stocks', { initial_investment: parseInt(userData.Income)  , risk_tolerance: 0.2});
            setStocks(JSON.stringify(res.data));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <SideNavBar />
            <div className="payer">
            <h1>Recommendations for {userData.Name}</h1>
            <h1>Retirement Account</h1>
            <h1>Current Balance</h1>
            <h2 className="line">{userData.Income}</h2>
            <h1>User Name</h1>
            <h2>{userData.Name}</h2>
            <div>
            <h1>Stocks</h1>
            <h1>{stocks.split(":").pop().replace("}","")}</h1>
            <h1>Crypto</h1>
            <h1>{crypto.split(":").pop().replace("}","")}</h1>
            <h1>Your portfolio performance</h1>
            <h1>{retirement}</h1>
            </div>
            </div>
        </div>
    )
}

export default Recommend;
