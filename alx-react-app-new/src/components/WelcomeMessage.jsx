function WelcomeMessage() {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marging: "15px",
        backgroundColor: "#e6f2ff",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: 'darkblue' }}>Hello everyone, I am learning React at ALX!</h1>
      <p style={{ fontSize: '16px' }}>This is a simple JSX component.</p>
      <p style={{ fontSize: '16px' }}>I am learning about JSX!</p>
    </div>
  );
}

export default WelcomeMessage;
