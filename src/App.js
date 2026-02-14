/*task 1
function App() {
  const today = new Date().toDateString();
  const style = {
    textAlign: "center",
    backgroundColor: "#f2e1ec",
    padding: "30px",
    minHeight: "100vh"
  };
  return (
    <div style={style}>
      <h1>Akanksha Borhade</h1>
      <h3>{today}</h3>
      <p>Excellence is a continuous process and not an accident</p>
      <img
        //src="https://via.placeholder.com/150"
         src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300"
        alt="placeholder"
      />
    </div>
  );
}
export default App;
import CompanyHeader from "./component/CompanyHeader";
import ClientInfo from "./component/ClientInfo";
import InvoiceTable from "./component/InvoiceTable";
import InvoiceFooter from "./component/InvoiceFooter";

function App() {

  const pageStyle = {
    backgroundColor: "#c6d7f1",
    padding: "40px",
    fontFamily: "Arial, sans-serif"
  };
  const cardStyle = {
    backgroundColor: "white",
    padding: "25px",
    marginBottom: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(163, 153, 153, 0.1)"
  };
  const items = [
    { name: "Design", qty: 1, price: 2000 },
    { name: "Development", qty: 1, price: 5000 },
    { name: "Hosting", qty: 1, price: 1000 },
    { name: "Testing", qty: 1, price: 1500 },
    { name: "Maintenance", qty: 1, price: 1000 }
  ];
  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h2>Invoice 1</h2>
        <CompanyHeader
          company="Arthdisha IT Services"
          address="Nashik, India"
        />
        <ClientInfo
          name="Akanksha Borhade"
          email="akanksha@email.com"
          phone="123456789"
          address="Kopargaon"
        />
        <InvoiceTable items={items} />
        <InvoiceFooter subtotal={10500} gst={1890} total={12390} />
      </div>
      <div style={cardStyle}>
        <h2>Invoice 2</h2>

        <CompanyHeader
          company="Arthdisha IT Services"
          address="Nashik, India"
        />
        <ClientInfo
          name="tanya Jagtap"
          email="tanya@gmail.com"
          phone="178543234"
          address="Pune"
        />
        <InvoiceTable items={items} />
        <InvoiceFooter subtotal={10500} gst={1890} total={12390} />
      </div>
    </div>
  );
}
export default App;*/
//React Hooks
import Counter from "./component/hooks/Counter";
import Toggle from "./component/hooks/Toggle";
import ColorChanger from "./component/hooks/ColorChanger";
import SimpleForm from "./component/hooks/SimpleForm";
import TitleCounter from "./component/hooks/TitleCounter";
import Clock from "./component/hooks/Clock";
import WindowWidth from "./component/hooks/WindowWidth";
import UserSearch from "./component/hooks/UserSearch";
import FocusInput from "./component/hooks/FocusInput";
import Stopwatch from "./component/hooks/Stopwatch";
function App() {
  return (
    <>
      <Counter />
      <Toggle />
      <ColorChanger />
      <SimpleForm />
      <TitleCounter />
      <Clock />
      <WindowWidth />
      <UserSearch />
      <FocusInput />
      <Stopwatch />
    </>
  );
}
export default App;
