function InvoiceTable() {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        textAlign: "center"
      }}
    >
      <thead style={{ backgroundColor: "#d2f2c8" }}>
        <tr>
          <th style={cell}>Item</th>
          <th style={cell}>Qty</th>
          <th style={cell}>Price</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={cell}>Design</td>
          <td style={cell}>1</td>
          <td style={cell}>₹2000</td>
        </tr>

        <tr>
          <td style={cell}>Development</td>
          <td style={cell}>1</td>
          <td style={cell}>₹5000</td>
        </tr>

        <tr>
          <td style={cell}>Hosting</td>
          <td style={cell}>1</td>
          <td style={cell}>₹1000</td>
        </tr>

        <tr>
          <td style={cell}>Testing</td>
          <td style={cell}>1</td>
          <td style={cell}>₹1500</td>
        </tr>

        <tr>
          <td style={cell}>Maintenance</td>
          <td style={cell}>1</td>
          <td style={cell}>₹1000</td>
        </tr>
      </tbody>
    </table>
  );
}

const cell = {
  border: "1px solid #d0fde1",
  padding: "10px"
};

export default InvoiceTable;
