type Info = {
    name: string;
    email: string;
    phone: string;
  };


function Table({ data }: { data: Info[] }) {
    return (
        <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={index}>
              <td>{info.name}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => {}}>Save Data</button>
      </>
    );
  }
export default Table 