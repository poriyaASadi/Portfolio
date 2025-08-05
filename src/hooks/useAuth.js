import React, { useState, useEffect , useCallback } from 'react'
const getCookie = (name) => {
    // Validate input
    if (!name) return null;

    // Get all cookies and split them
    const cookies = document.cookie.split(';');

    // Search for the specific cookie
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');

        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }

    return null;
};
const getUserInfo = () => {
    const email = getCookie('userEmail');
    const username = getCookie('username');
    if (email && username) {
        return {
            email: decodeURIComponent(email),
            username: decodeURIComponent(username)
        }
    }
    return null
};

const useAuth = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated , setIsAuthenticated] = useState(false);

    const checkUserAuth = useCallback(() => {
        const user = getUserInfo();
        if (user) {
            setIsAuthenticated(true);
            setUserInfo(user);
        } else {
            setIsAuthenticated(false)
        }
        setLoading(false);
    }, []);
    useEffect(() => {
        checkUserAuth();

    }, [checkUserAuth]);

    return {
        isAuthenticated,
        userInfo,
        loading
    }
}

export default useAuth
