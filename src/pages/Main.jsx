import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import SideBar from '../assets/components/SideBar';
import TopBar from '../assets/components/TopBar';
function Main() {
    const { isAuthenticated, userInfo, loading } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login');
        };
    }, [isAuthenticated, loading]);

    if (loading) {
        {
            return <div>loading...</div>
        }
    };
    if (!isAuthenticated) {
        return navigate('/login');
    }
    return (
        <>

            {
                userInfo && (
                    <main className='bg-slate-50 dark:bg-slate-950 w-full flex-col md:flex-row overflow-hidden h-screen flex p-3 md:p-5 gap-x-3 items-center'>
                        <SideBar />
                        <section className='h-full w-full'>
                            <div className='h-full pb-12 md:pb-0  bg-slate-100 dark:bg-slate-950 transition-all duration-250 rounded-lg shadow-lg overflow-x-hidden overflow-y-auto w-full'>
                                <TopBar userinfo={userInfo} />
                            </div>
                        </section>
                    </main>
                )
            }
        </>
    )
}

export default Main
