export default function form ({ name, type }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type={type} id={name} />
    </>
  )
}
