const ProfilePage = () => {
	return (
		<main>
			{
				user ? <h1>Hello {user.author}</h1> : <h1>Loading...</h1>
			}
		</main>
	)
}

export default ProfilePage