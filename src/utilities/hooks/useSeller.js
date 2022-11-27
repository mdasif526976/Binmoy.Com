import { useEffect, useState,  } from "react";

const useSeller = (email) => {
const [isSeller,setSeller] = useState('');
const [sellerLoading,setSellerLoading] = useState(true);

  useEffect(()=>{
    if (email) {
        fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res=> res.json())
        .then(data=> {
            setSeller(data.isSeller);
            setSellerLoading(false)
        })
    }
  },[email])
    return [isSeller,sellerLoading];
};

export default useSeller;