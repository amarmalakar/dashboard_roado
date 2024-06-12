import { Box, Button, Card, Typography } from "@mui/material";
import PieChartCard from "./pie-chart-card";
import { ChevronRight, DeviceThermostat, DoubleArrow, LocalShipping, Person, RvHookup } from "@mui/icons-material";

const styles = {
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px"
  },
  heading: {
    fontSize: "16px",
    marginTop: "24px",
    marginBottom: "8px"
  },
  card: {
    boxShadow: "0px 2px 8px 0px #1A38750D",
    padding: "20px 14px",
    borderRadius: "16px",
  },
  boxIconContainer: {
    width: 32,
    height: 32,
    background: "#E0EAFF",
    borderRadius: "4px",
    display: "grid",
    placeItems: "center"
  },
  boxIcon: {
    width: 20,
    height: 20
  }
}

const actionList = [
  { id: 1, title: "Create Indents", Icon: DoubleArrow },
  { id: 2, title: "Add Vehicle", Icon: LocalShipping },
  { id: 3, title: "Add Trailer", Icon: RvHookup },
  { id: 4, title: "Add Driver", Icon: Person },
  { id: 5, title: "Add Indents", Icon: LocalShipping },
]

export default function Dashboard() {
  return (
    <div>
      <PieChartCard />

      <Typography sx={styles.heading} fontWeight="bold">Quick Actions</Typography>
      <Card sx={{
        ...styles.card,
        display: "flex",
        justifyContent: "space-between",
        gap: "12px",
      }}>
        {actionList.map(({ id, title, Icon }, index) => (
          <div key={id} style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            borderRight: index === actionList.length - 1 ? "none" : "1px solid #E0E0E0"
          }}>
            <Icon sx={{ width: 20, height: 20 }} />
            <Typography>{title}</Typography>
          </div>
        ))}
      </Card>

      <Box sx={styles.title}>
        <Typography sx={styles.heading} fontWeight="bold">High Priority alerts (14)</Typography>
        <Typography color="#1A3875" fontSize={14} sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px"
        }}>View All <ChevronRight /></Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "60px" }}>
        <Card sx={{
          ...styles.card,
          width: "50%"
        }}>
          <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Box sx={styles.boxIconContainer}>
              <Person sx={styles.boxIcon} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography fontSize={14} fontWeight="bold">Driver Raised Concern</Typography>
                <Typography fontSize={14}>13 Feb 24</Typography>
              </Box>
              <Typography fontSize={10}>Load No : 12454, Bill To : RoaDo demo Bangalore</Typography>
            </Box>
          </Box>

          <Typography fontSize={12} padding="16px 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua</Typography>
        
          <Box sx={{
            display: "flex",
            justifyContent: "end",
            gap: "30px",
          }}>
            <Button variant="text" sx={{
              fontSize: "14px",
              textTransform: "capitalize",
              textDecoration: "underline"
            }}>Ignore</Button>

            <Button variant="contained" sx={{
              background: "#1A3875",
              color: "white",
              fontSize: "14px",
              textTransform: "capitalize"
            }}>Resolve</Button>
          </Box>
        </Card>

        <Card sx={{ ...styles.card, width: "50%" }}>
          <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Box sx={styles.boxIconContainer}>
              <DeviceThermostat sx={styles.boxIcon} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography fontSize={14} fontWeight="bold">Reefer Temp. out of range</Typography>
                <Typography fontSize={14}>13 Feb 24</Typography>
              </Box>
              <Typography fontSize={10}>Load No : 12454, Bill To : RoaDo demo Bangalore</Typography>
            </Box>
          </Box>

          <Typography fontSize={12} padding="16px 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua</Typography>
        
          <Box sx={{
            display: "flex",
            justifyContent: "end",
            gap: "30px",
          }}>
            <Button variant="text" sx={{
              fontSize: "14px",
              textTransform: "capitalize",
              textDecoration: "underline"
            }}>Ignore</Button>

            <Button variant="contained" sx={{
              background: "#1A3875",
              color: "white",
              fontSize: "14px",
              textTransform: "capitalize"
            }}>Resolve</Button>
          </Box>
        </Card>
      </Box>
    </div>
  )
}