import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Works = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const GITHUB_USERNAME = "ALOUDDIN9606"; // GitHub username

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.error("Error fetching repos:", err));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Projects</h2>

      {repos.length === 0 ? (
        <p className="text-gray-600">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">{repo.name}</h3>
              <p className="text-gray-600 text-sm mt-2">
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
