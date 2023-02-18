import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const PaymentType = () => {

  const [payment, setPayment] = useState([]);

  const fetchAllPayment = async () => {
    try {
        const res = await axios.get("http://localhost:3001/payment");
        setPayment(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllPayment();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();

  
  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/payment/"+id)
      const res = await axios.get("http://localhost:3001/payment");
        setPayment(res.data);
      // window.location.reload()
      // navigate("/");
    }catch(err){
      console.log(err);
    }

  }
  console.log(payment);

  return (
    <div>
        <h1>
            payment info
        </h1>
        <div className="payment">
        {payment.map((payment) => (
          <div key={payment.payment_id} className="payment">
            <p>{payment.payment_id}</p>
            <h2>{payment.payment_type}</h2>
            <p>{payment.category_id}</p>
            {/* <p>{branch.Students_enrolled}</p> */}
            <button className="delete" onClick={()=>handleDelete(payment.payment_id)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/addPayment">Add new Payment</Link>
        </button>
    </div>
    </div>
  )
}

export default PaymentType;
