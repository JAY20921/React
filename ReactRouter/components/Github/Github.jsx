import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const { profile, repos } = useLoaderData()
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Profile Section */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-700 text-white p-8 rounded-2xl shadow-2xl border border-gray-600 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                    <div className="relative mb-6">
                        <img
                            src={profile.avatar_url}
                            alt="GitHub Profile"
                            className="rounded-full shadow-2xl w-44 h-44 border-4 border-orange-400 ring-4 ring-orange-400/20"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-700"></div>
                    </div>
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{profile.name}</h2>
                    <p className="text-lg text-orange-300 mb-4 font-medium">@{profile.login}</p>
                    <p className="mb-6 text-center text-gray-200 leading-relaxed">{profile.bio}</p>
                    
                    <div className="grid grid-cols-2 gap-4 w-full mb-6">
                        <div className="bg-gray-600/50 p-3 rounded-lg text-center backdrop-blur-sm">
                            <p className="text-2xl font-bold text-orange-400">{profile.followers}</p>
                            <p className="text-sm text-gray-300">Followers</p>
                        </div>
                        <div className="bg-gray-600/50 p-3 rounded-lg text-center backdrop-blur-sm">
                            <p className="text-2xl font-bold text-orange-400">{profile.following}</p>
                            <p className="text-sm text-gray-300">Following</p>
                        </div>
                        <div className="bg-gray-600/50 p-3 rounded-lg text-center backdrop-blur-sm">
                            <p className="text-2xl font-bold text-orange-400">{profile.public_repos}</p>
                            <p className="text-sm text-gray-300">Repos</p>
                        </div>
                        <div className="bg-gray-600/50 p-3 rounded-lg text-center backdrop-blur-sm">
                            <p className="text-sm text-gray-300">📍</p>
                            <p className="text-sm text-gray-200">{profile.location}</p>
                        </div>
                    </div>
                    
                    <a
                        href={profile.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 text-center transform hover:-translate-y-1"
                    >
                        Visit GitHub Profile
                    </a>
                </div>

                {/* Repo Section */}
                <div className="md:col-span-2 bg-gradient-to-b from-gray-800 to-gray-700 text-white p-8 rounded-2xl shadow-2xl border border-gray-600">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gradient-to-r from-orange-400 to-orange-600">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Repositories</h3>
                        <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">{repos.length} repos</span>
                    </div>
                    
                    <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        <div className="space-y-4">
                            {repos.map((repo) => (
                                <div key={repo.id} className="bg-gray-600/30 p-5 rounded-xl border border-gray-600 hover:border-orange-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 group backdrop-blur-sm">
                                    <div className="flex items-start justify-between mb-3">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-300 group-hover:underline flex items-center gap-2"
                                        >
                                            {repo.name}
                                            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        {repo.language && (
                                            <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-md text-xs font-medium">
                                                {repo.language}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {repo.description && (
                                        <p className="text-gray-300 leading-relaxed mb-3">{repo.description}</p>
                                    )}
                                    
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        {repo.stargazers_count !== undefined && (
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span>{repo.stargazers_count}</span>
                                            </div>
                                        )}
                                        {repo.forks_count !== undefined && (
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 8l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>{repo.forks_count}</span>
                                            </div>
                                        )}
                                        {repo.updated_at && (
                                            <div className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(55, 65, 81, 0.3);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #f97316, #ea580c);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #ea580c, #dc2626);
                }
            `}</style>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
   const [profileRes, repoRes] = await Promise.all([
       fetch('https://api.github.com/users/JAY20921'),
       fetch('https://api.github.com/users/JAY20921/repos')
   ])
   const profile = await profileRes.json()
   const repos = await repoRes.json()
   return { profile, repos }
}