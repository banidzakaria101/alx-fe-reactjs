function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto, my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="rounded-full w-36 h-36 mx-auto text-gray-600 text-base">Developer at Exemple Co. Love to write code and explore nex technologies</p>
    </div>
  )
}

export default UserProfile;