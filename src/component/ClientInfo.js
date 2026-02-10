/*
task 3
function ClientInfo() {
  return (
    <div style={{ padding: "15px" }}>
      <h3>Client Details</h3>
      <p>Name: AkankshaBorhade</p>
      <p>Email: akanksha@email.com</p>
      <p>Phone: 123456789</p>
      <p>Address: koprgaon</p>
    </div>
  );
}

export default ClientInfo;
*/
//task 4
function ClientInfo({ name, email, phone, address }) {
  return (
    <div>
      <h3>Client Details</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default ClientInfo;


