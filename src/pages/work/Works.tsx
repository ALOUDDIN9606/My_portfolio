import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
}

const Works = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const GITHUB_USERNAME = "ALOUDDIN9606"; // GitHub username

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        if (!response.ok) throw new Error("Failed to fetch repositories.");
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (err) {
        setError("Error fetching repositories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="p-6 sm:p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
        My Projects
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : repos.length === 0 ? (
        <p className="text-gray-600 text-center">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap">
                {repo.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 overflow-hidden text-ellipsis break-words">
                {repo.description || "No description available"}
              </p>
              <div className="flex items-center mt-4 text-blue-500">
                <FaGithub className="mr-2" />
                <span>View on GitHub</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Works;
