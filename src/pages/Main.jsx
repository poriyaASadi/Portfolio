import React from 'react'
import SideBar from '../assets/components/SideBar';
import TopBar from '../assets/components/TopBar';
function Main() {
    return (
        <>
          
                    <main className='bg-slate-50 dark:bg-slate-950 w-full flex-col md:flex-row overflow-hidden h-screen flex p-3 md:p-5 gap-x-3 items-center'>
                        <SideBar />
                        <section className='h-full w-full'>
                            <div className='h-full pb-12 md:pb-0  bg-slate-100 dark:bg-slate-950 transition-all duration-250 rounded-lg shadow-lg overflow-x-hidden overflow-y-auto w-full'>
                                <TopBar />
                            </div>
                        </section>
                    </main>
        </>
    )
}

export default Main
