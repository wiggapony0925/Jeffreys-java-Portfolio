const GITHUB_USERNAME = 'wiggapony0925'

export default async function handler(req, res) {
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

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`)
    }

    const repos = await response.json()

    const filtered = repos
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

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    res.status(200).json(filtered)
  } catch (error) {
    console.error('GitHub API error:', error)
    res.status(500).json({ error: 'Failed to fetch repositories' })
  }
}
