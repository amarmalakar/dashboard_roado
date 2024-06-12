import { Box, Card, CardContent, Divider, List, ListItem, ListItemText, Typography, colors } from "@mui/material";

const styles = {
  container: {
    width: "360px", minHeight: "100vh",
    backgroundColor: "white",
    boxShadow: "0px 2px 8px 0px #1A38750D",
    padding: "0 12px"
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px"
  },
  textListContainer: {
    p: 0,
    width: '100%',
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
  },
  textListParagraph: {
    padding: "4px 0",
    margin: 0,
    fontSize: 12,
  }
}

export default function Highlights() {
  return (
    <Box sx={styles.container}>
      <h3 style={{ marginBottom: "0", fontSize: "16px" }}>Todays Highlights (14)</h3>
      <p color="#676666" style={{ marginTop: "0", fontSize: "12px" }}>19 Mar 2024</p>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px"
      }}>
        <Card sx={{
          width: "50%",
        }}>
          <CardContent>
            <Typography sx={{ fontSize: 12 }} color="#676666" fontWeight={500}>Income</Typography>
            <Typography sx={{ fontSize: 16, margin: "4px 0" }} color="#148714" fontWeight={500}>100000 CAD</Typography>
            <Typography sx={{ fontSize: 12 }} color="#676666" fontWeight={400}>2 payments received</Typography>
          </CardContent>
        </Card>

        <Card sx={{
          width: "50%",
        }}>
          <CardContent>
            <Typography sx={{ fontSize: 12 }} color="#676666" fontWeight={500}>Expenses</Typography>
            <Typography sx={{ fontSize: 16, margin: "4px 0" }} color="#D04141" fontWeight={500}>50000 CAD</Typography>
            <Typography sx={{ fontSize: 12 }} color="#676666" fontWeight={400}>5 payments paid</Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={styles.title}>
        <h3 style={{ fontSize: "14px" }}>Completed Activities (14)</h3>
        <p color="#111111" style={{ fontSize: "12px", textDecoration: "underline" }}>View All</p>
      </Box>
      <List sx={styles.textListContainer} aria-label="mailbox">
        <ListItem>
          <p style={styles.textListParagraph}>
            <span style={{ color: "#1A3875" }}>Gurpreet Singh</span>  (Dispatch team) has created <b>Load No. I-I-AAA-1325</b>
          </p>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <p style={styles.textListParagraph}>
            <span style={{ color: "#1A3875" }}>Aman</span> (Driver)
            <b> Picked Up</b> 
            {" "}goods at <b>Location_Name</b> for
            <b> Load No. I-I-AAA-1325</b>
          </p>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <p style={styles.textListParagraph}>
            <span style={{ color: "#1A3875" }}>Gurpreet Singh</span>  (Dispatch team) has created <b>Load No. I-I-AAA-1325</b>
          </p>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <p style={styles.textListParagraph}>
            <b>Load No. I-I-AAA-1325</b> will start added by <span style={{ color: "#1A3875" }}>Gurpreet Singh</span> 
          </p>
        </ListItem>
      </List>

      <Box sx={styles.title}>
        <h3 style={{ fontSize: "14px" }}>Scheduled Activities (14)</h3>
        <p color="#111111" style={{ fontSize: "12px", textDecoration: "underline" }}>View All</p>
      </Box>
      <List sx={styles.textListContainer} aria-label="mailbox">
        <ListItem>
          <p style={styles.textListParagraph}>
            <b>Load No. I-I-AAA-1325</b> will start added by <span style={{ color: "#1A3875" }}>Aman (Driver)</span> 
          </p>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <p style={styles.textListParagraph}>
            <span style={{ color: "#1A3875" }}>Aman</span> (Driver)
            <b> Picked Up</b> 
            {" "}goods at <b>Location_Name</b> for
            <b> Load No. I-I-AAA-1325</b>
          </p>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <p style={styles.textListParagraph}>
            <b>Load No. I-I-AAA-1325</b> will start added by <span style={{ color: "#1A3875" }}>Gurpreet Singh</span> 
          </p>
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <p style={styles.textListParagraph}>
            <b>Load No. I-I-AAA-1325</b> will start added by <span style={{ color: "#1A3875" }}>Gurpreet Singh</span> 
          </p>
        </ListItem>
      </List>
    </Box>
  )
}
