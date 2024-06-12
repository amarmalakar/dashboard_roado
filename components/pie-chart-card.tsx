"use client"

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Card, Grid, Typography } from '@mui/material';

const pieChartData = [
  { value: 50, label: 'Upcoming', color: "#FFCB49" },
  { value: 50, label: 'Completed', color: "#7464FF" },
  { value: 100, label: 'Ongoing', color: "#4FD2B5" },
];

const data = [
  {
    category: "Orders",
    total: 123456,
    data: pieChartData
  }, {
    category: "Trips",
    total: 123456,
    data: pieChartData
  }, {
    category: "Revenue",
    total: 123456,
    data: pieChartData
  }, {
    category: "Expences",
    total: 123456,
    data: [
      { value: 50, label: 'Freight Charge', color: "#FFCB49" },
      { value: 50, label: 'Other Charges', color: "#7464FF" },
      { value: 100, label: 'Driver Charge', color: "#4FD2B5" },
    ]
  }
]

// background: linear-gradient(90deg, #FFFFFF 0%, #FFCB49 100%);

const generateBg = (primaryColor: string) => `linear-gradient(90deg, #FFFFFF 0%, ${primaryColor} 100%)`

export default function PieChartCard() {
  return <Grid container spacing={2}>
    {data.map((item, index) => <Grid item xs={3} key={index}>
        <Card>
          <Typography padding={2} fontSize={14} fontWeight="bold">{item.category}</Typography>
          <Box sx={{ display: "grid", placeItems: "center", position: "relative" }}>
            <PieChart
              series={[
                {
                  innerRadius: 35,
                  outerRadius: 50,
                  data: item.data,
                },
              ]}
              margin={{ right: 5 }}
              width={110}
              height={110}
              legend={{ hidden: true }}
              sx={{ position: "relative" }}
            />

            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <Typography color="#676666" fontSize={12} align='center'>Total</Typography>
              <Typography fontWeight="bold" fontSize={12}>{item.total}</Typography>
            </Box>
          </Box>

          <Box padding={2}>
            {item.data.map((data, index) => <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "4px",
                background: generateBg(data.color)
              }}>
              <Typography fontSize={12}>{data.label}</Typography>
              <Typography fontSize={12}>{data.value}</Typography>
            </Box>)}
          </Box>
        </Card>
    </Grid>)}
  </Grid>
}
