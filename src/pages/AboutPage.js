export default function AboutPage({ user }) {
  const userName = user ? user : "me";
  return (
    <>
      <h1>About page</h1>
      <p>All about {userName}!</p>
    </>
  );
}
