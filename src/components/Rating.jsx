import React, { useState } from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Rating = (props) => {
  const totalStars = 5;
  const activeStars = props.evaluation;

  return (
    <Box
      sx={{
        display: "inline-flex",
        position: "relative",

        textAlign: "left",
      }}
    >
      {[...new Array(activeStars)].map((arr, index) => {
        return (
          <Box key={index}>
            <Box>
              <StarIcon />
            </Box>
          </Box>
        );
      })}
      {[...new Array(totalStars - activeStars)].map((arr, index) => {
        return (
          <Box key={index}>
            <Box>
              <StarBorderIcon />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Rating;
