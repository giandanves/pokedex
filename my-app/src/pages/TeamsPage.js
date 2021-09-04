import requireAuth from "../requireAuth";

const TeamsPage = () => {
  return (
    <div>
      <h2 className="h-20 text-center">TEAMS</h2>
      <p>Team page content</p>
    </div>
  );
};

export default requireAuth(TeamsPage);
