import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const { User } = useContext(UserContext);

    return (
        <div style={styles.container}>
            {User ? (
                <div style={styles.welcomeBox}>
                    <h2 style={styles.welcomeText}>Welcome, {User.username}!</h2>
                    <p style={styles.subText}>You are now logged in.</p>
                </div>
            ) : (
                <div style={styles.loginPrompt}>
                    <h3>Please Login</h3>
                    <p>You need to login to access your profile.</p>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '30px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
    },
    welcomeBox: {
        backgroundColor: '#e9f7ef',
        padding: '20px',
        borderRadius: '6px',
    },
    welcomeText: {
        color: '#2c7a7b',
        marginBottom: '10px',
    },
    subText: {
        color: '#4a5568',
    },
    loginPrompt: {
        backgroundColor: '#f8d7da',
        padding: '20px',
        borderRadius: '6px',
    },
};

export default Profile;
