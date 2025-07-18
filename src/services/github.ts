import type { Repository, User } from "@/types/github-types"

const BASE_URL = 'https://api.github.com/'
const USERNAME = 'valdeirsapara'

export async function getUser() :Promise<User> {
    const response = await fetch(`${BASE_URL}users/${USERNAME}`)
    if (!response.ok) {
        throw new Error('Failed to fetch user data')
    }
    return response.json()
}

export async function getTechnologes(): Promise<String[]> {
    try {
        const resposResponse = await fetch(`${BASE_URL}users/${USERNAME}/repos?per_page=100`)
        
        if (!resposResponse.ok) {
            throw new Error('Failed to fetch repositories');
        }
        
        const repos: Repository[] = await resposResponse.json()
        const languagePromises = repos.map(async (repo: Repository) => {
            const langResponse = await fetch(repo.languages_url);
            if (!langResponse.ok) {
                throw new Error('Failed to fetch languages');
            }
            const languages = await langResponse.json();
            return Object.keys(languages);
        });
        
        const languagesArrays = await Promise.all(languagePromises);
        
        // Flatten the arrays and remove duplicates using Set
        const uniqueLanguages = [...new Set(languagesArrays.flat())];
        
        return uniqueLanguages;
    } catch (error) {
        // Return fixed list in case of any error
        const technologies = [
            "Dart",
            "C++", 
            "CMake",
            "HTML",
            "Swift",
            "C",
            "Kotlin",
            "Objective-C",
            "Python",
            "Shell",
            "JavaScript",
            "Nix",
            "CSS",
            "Dockerfile",
            "Inno Setup",
            "TypeScript"
        ];
        
        return technologies;
    }
}