const roles = [
  {
    title: 'Manager / Game Guru',
    description:
      "Runs the day-to-day, knows the game library inside and out, and can teach a new group the rules in two minutes flat. Part manager, part host, part rules encyclopedia.",
    subject: 'Application: Manager / Game Guru',
  },
  {
    title: 'Barista',
    description:
      'Keeps the counter moving and the coffee great, and makes every regular (and every first-timer) feel welcome. Game knowledge is a plus, not a requirement.',
    subject: 'Application: Barista',
  },
]

export default function OpenRoles() {
  return (
    <section className="section location">
      <h2>Open Roles</h2>
      <div className="roles">
        {roles.map((role) => (
          <div className="role-card" key={role.title}>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
            <a
              className="cta-button"
              href={`mailto:careers@thesubwaytoken.com?subject=${encodeURIComponent(role.subject)}`}
            >
              Apply by Email
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
