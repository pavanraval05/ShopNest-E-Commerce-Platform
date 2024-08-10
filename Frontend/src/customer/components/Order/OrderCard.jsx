import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${5}`)}
      className="p-5 shadow-md shadow-black hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {" "}
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPeq_NtZCs-EPolMxo7A3P9lptaIUS2A8vFjMdRW1pkm0RTzRt06O7oTGmqD10ErdS1HfZO-bbvRu0lvNjANa2dqUIRYo9zt4yMQzkpRZiJZnfv1wqKrNki9RzvYq94u0HKiZSLAA&usqp=CAc"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-xs font-semibold">
                Size : M
              </p>
              <p className="opacity-50 text-xs font-xs font-semibold">
                Color : Black
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              {" "}
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on March 03</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
