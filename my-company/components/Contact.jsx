function Contact() {
  const [formatData, setFormatData] = useSatte({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormatData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    alert("From submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmite}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={FormData.name}
          onChange={handleChange}
          style={{ display: "block", margin: "10px 0" }}
        />
        <textarea
          name="message"
          placeholder="Your Massage"
          value={formatData.message}
          onChange={handleChange}
          style={{ display: "block", marging: "10px 0" }}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
