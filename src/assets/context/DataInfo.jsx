import React, { useState, createContext } from 'react'
export const MyContext = createContext();

import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function DataInfo({ children }) {
    const [myData, setMyData] = useState([
        [
            {
                label: 'Clean & Maintainable Code',
                about: 'Passionate about writing structured, efficient code that’s easy to scale and debug.',
            },
            {
                label: 'Team Player',
                about: 'Great at collaborating with designers, developers, and stakeholders to deliver smooth projects.'
            },
            {
                label: ' Fast Learner',
                about: 'Quickly adapt to new tools and frameworks (currently mastering backend/AI integration).'
            },
            {
                label: 'Problem Solver',
                about: 'Love turning complex challenges into simple, user-friendly solutions.'
            },
            {
                label: 'Detail-Oriented',
                about: 'Obsessed with pixel-perfect UIs and seamless user experiences.'
            },
        ],
        [
            { component: <InstagramIcon fontSize='medium' />, name: 'Instagram', url: "https://www.instagram.com/poriya_develop?utm_source=qr&igsh=aW8xeDd6aG5jbTBj" },
            { component: <LinkedInIcon fontSize='medium' />, name: 'LinkeDin', url: "www.linkedin.com/in/poriyaasadi" },
            { component: <GitHubIcon fontSize='medium' />, name: 'GitHub', url: "https://github.com/poriyaASadi" },
            { component: <TelegramIcon fontSize='medium' />, name: 'Telegram', url: "https://t.me/P_o_r_iya" }
        ],
    ])
    return (
        <MyContext.Provider value={{ myData, setMyData }}>
            {children}
        </MyContext.Provider>
    )
}
