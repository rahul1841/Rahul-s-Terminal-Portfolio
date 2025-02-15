
import React, { useEffect, useState } from "react";

interface Contribution {
  id: string;
  type: string;
  repo: { name: string };
  payload: any;
  created_at: string;
}

const GITHUB_USERNAME = "rahul1841";
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/events`;
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

const Contributions: React.FC = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }
        const data: Contribution[] = await response.json();
        
        // Filter for relevant event types
        const filteredContributions = data.filter((event) =>
          ["IssueCommentEvent", "PullRequestEvent", "PushEvent", "IssuesEvent"].includes(event.type)
        );

        setContributions(filteredContributions);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  const renderLink = (url: string, text: string) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      {text}
    </a>
  );

  const formatDate = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  };

  return (
    <div className="">
      {/* <h2 className="text-xl font-bold mb-3">My Recent Open Source Contributions</h2>

      {loading && <p>Loading contributions...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && contributions.length === 0 && <p>No recent contributions found.</p>}

      {!loading && !error && contributions.length > 0 && (
        <ul className="space-y-3">
          {contributions.map((event) => (
            <li key={event.id} className="border p-3 rounded-md shadow-md">
              <p><strong>Type:</strong> {event.type}</p>
              <p><strong>Repository:</strong> {renderLink(`https://github.com/${event.repo.name}`, event.repo.name)}</p>

              {event.type === "IssueCommentEvent" && event.payload.issue && (
                <p><strong>URL:</strong> {renderLink(event.payload.issue.html_url, "Issue")}</p>
              )}

              {event.type === "PullRequestEvent" && event.payload.pull_request && (
                <p><strong>URL:</strong> {renderLink(event.payload.pull_request.html_url, "Pull Request")}</p>
              )}

              {event.type === "PushEvent" && event.payload.commits?.length > 0 && (
                <p><strong>URL:</strong> {renderLink(`https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`, "Commit")}</p>
              )}

              {event.type === "IssuesEvent" && event.payload.issue && (
                <p><strong>URL:</strong> {renderLink(event.payload.issue.html_url, "Issue")}</p>
              )}

              <p><strong>Created At:</strong> {formatDate(event.created_at)}</p>
            </li>
          ))}
        </ul>
      )} */}

      <p className="mt-4"><strong>Total Contributions in Last 30 Days:</strong> {contributions.length}</p>
      <p>
        Checkout my GitHub account for more information:{" "}
        <a 
          href={GITHUB_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-custom-blue hover:text-custom-skyblue"
        >
          {GITHUB_URL}
        </a>
        <br />
      </p>
    </div>
  );
};

export default Contributions;