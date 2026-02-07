import { GITHUB_USERNAME } from './constants'

export async function fetchGitHubRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`
          })
        }
      }
    )
    if (response.ok) {
      const data = await response.json()
      return data
        .filter(repo => !repo.fork && !repo.archived && !repo.private)
        .map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'No description provided.',
          html_url: repo.html_url,
          homepage: repo.homepage || null,
          language: repo.language,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          updated_at: repo.updated_at,
          topics: repo.topics || []
        }))
    }
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
  }
  return []
}

export async function getReposServerSideProps({ req }) {
  const repos = await fetchGitHubRepos()
  return {
    props: {
      cookies: req.headers.cookie ?? '',
      repos
    }
  }
}
