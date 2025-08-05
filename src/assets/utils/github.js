// utils/github.js
const CACHE_KEY = 'github_repos_cache';
const TIMESTAMP_KEY = 'github_repos_timestamp';
const CACHE_EXPIRY = 30 * 60 * 1000;

export const fetchRepos = async (username) => {

  const cachedData = getCachedRepos(username);
  if (cachedData) {
    return cachedData;
  }


  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    const publicRepos = data.filter(repo => !repo.private);

    setCachedRepos(username, publicRepos);
    
    return publicRepos;
  } catch (error) {
    console.error('Error fetching repos:', error);

    const cached = getCachedRepos(username, true); // ignore expiry
    return cached || [];
  }
};


function getCacheKey(username) {
  return `${CACHE_KEY}_${username}`;
}

export function getCachedRepos(username, ignoreExpiry = false) {
  const cacheKey = getCacheKey(username);
  const timestampKey = `${TIMESTAMP_KEY}_${username}`;
  
  const cached = localStorage.getItem(cacheKey);
  const timestamp = localStorage.getItem(timestampKey);
  
  if (!cached || !timestamp) return null;

  if (!ignoreExpiry && Date.now() - Number(timestamp) > CACHE_EXPIRY) {
    return null;
  }
  
  return JSON.parse(cached);
}

function setCachedRepos(username, data) {
  const cacheKey = getCacheKey(username);
  const timestampKey = `${TIMESTAMP_KEY}_${username}`;
  
  localStorage.setItem(cacheKey, JSON.stringify(data));
  localStorage.setItem(timestampKey, Date.now().toString());
}