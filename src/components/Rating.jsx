import React, { useState } from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const Rating = () => {
  const [activeStar, setActiveStar] = useState(-1);
  const totalStars = 5;
  const activeStars = 2;
  const handleClick = (index) => {
    setActiveStar(index);
  };
  return (
    <Box
      sx={{
        display: 'inline-flex',
        position: 'relative',
        cursor: 'pointer',
        textAlign: 'left',
      }}
    >
      {[...new Array(totalStars)].map((arr, index) => {
        return (
          <Box

          >
            <Box

            >
              <StarIcon />
            </Box>
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
