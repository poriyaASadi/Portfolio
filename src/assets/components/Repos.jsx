// components/GithubRepos.js
import { useState, useEffect } from 'react';
import { fetchRepos, getCachedRepos } from '../utils/github.js';
const GithubRepos = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCached, setIsCached] = useState(false);

    useEffect(() => {
        const loadRepos = async () => {
            try {
                setLoading(true);
                const reposData = await fetchRepos(username);
                console.log(reposData[0]);

                const cached = getCachedRepos('poriyaASadi', true);
                // in cached true or false 
                setIsCached(reposData[0].name === cached[0].name);
                // set data 
                setRepos(reposData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadRepos();
    }, [username]);



    if (loading) return <div>Loading repositories...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            {
                repos && (
                    repos.filter(item => item.stargazers_count > 1).map((data, index) => (
                        <li key={index} className='my-3'>
                            <div className='shadow-md rounded-md p-3 max-w-[30rem]'>
                                <div className='flex items-center gap-2'>
                                    <div className='w-14 h-14'>
                                        <img className='object-cover w-full h-full rounded-full' src={data.owner.avatar_url} alt="avatar" />
                                    </div>
                                    <div className='dark:text-white'>
                                        <h3 className='text-lg font-medium'>Repo Name : {data.name}</h3>
                                        <p>Language primary : {data.language}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between px-3 items-center gap-2 w-full bg-white dark:bg-black dark:text-white py-1.5 rounded-md my-2'>
                                    <span className=''>🌟Star Repo : {data.stargazers_count} </span>
                                    <a href={data.html_url} className='bg-slate-100 dark:bg-slate-950 px-3 p-1 rounded-md text-sm font-medium cursor-pointer' type='button' >Add Star this Repo</a>
                                </div>
                                <a href={data.html_url} className='bg-blue-700 font-medium text-white py-1.5 w-full text-center inline-block px-6 rounded-md text-sm'>View Repo</a>
                            </div>
                        </li>
                    ))
                )
            }

        </>
    );
};

export default GithubRepos;