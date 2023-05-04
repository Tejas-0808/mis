import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CrudPage() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  // Fetch data from API when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from API
  const fetchData = async () => {
    const result = await axios.get('/api/data');
    setData(result.data);
  };

  // Handle form submit for adding data
  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    const result = await axios.post('/api/data', { name, email });
    setName('');
    setEmail('');
    fetchData();
  };

  // Handle form submit for updating data
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const result = await axios.put(`/api/data/${id}`, { name, email });
    setName('');
    setEmail('');
    setId('');
    fetchData();
  };

  // Handle delete data
  const handleDelete = async (id) => {
    const result = await axios.delete(`/api/data/${id}`);
    fetchData();
  };

  // Render data list and form for adding/updating data
  return (
    <div style={{ height: '100vh', width: '100%'}}>

    <div>
      <h1>CRUD Page</h1>

      <form onSubmit={handleSubmitAdd}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Add Data</button>
      </form>

      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <button onClick={() => setId(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}

      {id && (
        <form onSubmit={handleSubmitUpdate}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit">Update Data</button>
        </form>
      )}
    </div>
</div>
  );
}

export default CrudPage;
