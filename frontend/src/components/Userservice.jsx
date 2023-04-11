import axios from 'axios';
// import { useState } from 'react';

export const checkLinksExists = async (username,pageid) => {

        try {
          const res = await axios.post("http://localhost:3001/links_id", username);
          const linkarray = [...res.data];
        //   console.log(linkarray);
            if(linkarray.includes(pageid)){
                console.log(true);
                return true
            }else{
                return false
            }
        } catch (err) {
            console.log(err);
          return false
        }

};
