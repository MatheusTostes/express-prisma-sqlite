import githubAxios from '../../config/github/githubAxios';

interface IGithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string; // eslint-disable-line
  gists_url: string;
  starred_url: string; // eslint-disable-line
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string; // eslint-disable-line
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string; // eslint-disable-line
  updated_at: string; // eslint-disable-line
}

const ShowService = async (githubUser: string): Promise<IGithubUser> => {
  const { data: user } = await githubAxios.get<IGithubUser>(
    `/users/${githubUser}`,
  );

  return user;
};

export default ShowService;
