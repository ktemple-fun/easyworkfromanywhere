import Head from "next/head";
import Image from "next/image";
import kite from "../../public/kite.png"

import Link from "next/link"
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Home = () => {
  let theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
      textAlign: "center",
    },
    palette: {
      primary: {
        main: "#001540",
      },
      secondary: {
        main: "#8FE3E6",
      },
    },
  });
  theme = responsiveFontSizes(theme);

  theme.typography.h2 = {
    fontSize: "2.5em",
    "@media (min-width:600px)": {
      fontSize: "3.0rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "5.0rem",
    },
  };
  theme.typography.h3 = {
    fontSize: "2.4rem",
    "@media (min-width:600px)": {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "4.8rem",
    },
  };
  theme.typography.h4 = {
    fontSize: "1.8rem",
    "@media (min-width:500px)": {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.8rem",
    },
  };

  return (
    <>
      <Head>
        <title>Kara Temple Web Developer</title>
        <meta name="description" content="Kara Temple Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;557&family=Urbanist:wght@100&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500&family=Urbanist:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <Grid container columns={{ xs: 4, md: 12 }}>
          <Grid item xs={12} md={16} lg={16}>
            <Card style={{ backgroundColor: "#001540" }}>
              <Grid item xs={6} md={8} lg={8}>
                <Card style={{ backgroundColor: "#001540", margin: ".2rem",  }}>
                </Card>
              </Grid>
             
                 <Card style={{ backgroundColor: "#001540", margin: ".2rem", display: "flex", justifyContent: "center", alignItems: "center", }}>
                 <Typography
                      variant="h5"
                      color="secondary"
                      style={{
                        fontFamily: "Urbanist",
                        textAlign: "center",
                        margin: ".5rem",
                      }}
                    >
                      Some of the best work from anywhere gigs
                      <br />
                    </Typography>
                </Card>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1.3rem",
                  alignItems: "center",
                }}
              >
                <Button
                  size="large"
                  color="secondary"
                  variant="outlined"
                  href="https://7dab9a88wf7w6y5dw6x3zcs1up.hop.clickbank.net"
                >
                  Legit live chat jobs
                </Button>
              </CardActions>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1.3rem",
                  alignItems: "center",
                }}
              >
                <Button
                  size="large"
                  color="secondary"
                  variant="outlined"
                  href="https://d7aea85awa3l8vazfe3g4e7z6d.hop.clickbank.net/?tid=linktreeeasywfh"
                >
                  Easy & quick paid writing gigs
                </Button>
              </CardActions>

              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1.3rem",
                  alignItems: "center",
                }}
              >
                <Button
                  size="large"
                  color="secondary"
                  variant="outlined"
                  href="https://2b645827pctofkdusbzcni1ndi.hop.clickbank.net/?tid=linktree"
                >
                  Write app reviews, get paid
                </Button>
              </CardActions>

              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1.3rem",
                  alignItems: "center",
                }}
              >
                <Button
                  size="large"
                  color="secondary"
                  variant="outlined"
                  href="https://8c452budokvvcpecw5s-xmqgjh.hop.clickbank.net/?tid=linktreeeasywfh"
                >
                  Get paid to use your fav social media
                </Button>
              </CardActions>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1.3rem",
                  alignItems: "center",
                }}
              >
                
                <Button
                  size="large"
                  color="secondary"
                  variant="outlined"
                  href="https://platform.autods.com/register?ref=OTUyMDc0"
                >
                  Automate your dropshippig online business
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>


        <Grid
          container
          columns={{ xs: 4, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} md={8} lg={8}>
            <Link href={"http://www.kitesurfcat.com/"}>
              <Card style={{ backgroundColor: "#001540", margin: ".2rem" }}>
                <CardActionArea>
                  <CardContent style={{ textAlign: "center" }}>
                    <Image
                      alt="kitesurf-site"
                      src={kite}
                      width={400}
                      height={300}
                    ></Image>
                    <Typography
                      color="secondary"
                      margin="1rem"
                      style={{ textAlign: "center", fontFamily: "Urbanist" }}
                      variant="h3"
                    ></Typography>
                    <Typography
                      variant="h4"
                      color="secondary"
                      style={{
                        fontFamily: "Urbanist",
                        textAlign: "center",
                        margin: ".5rem",
                      }}
                    >
                      Kitesurfing trips in the Caribbean
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    size="large"
                    color="secondary"
                    variant="outlined"
                    href="http://www.kitesurfcat.com/"
                  >
                    Site
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} md={16} lg={16}>
            <Card style={{ backgroundColor: "#001540" }}>
              <CardContent style={{ textAlign: "center" }}>
                <Typography
                  margin="1rem"
                  color="secondary"
                  variant="h4"
                  style={{ fontFamily: "Urbanist" }}
                >
                  Created with NextJS & Material UI
                </Typography>
                {/* <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center"}}> */}
                {/* <Button 
                size="large"
                color="secondary"
                variant="outlined"
                href="mailto: karaanntemple@gmail.com">Email Me</Button>
              </CardActions>
              <Typography 
                color="secondary"
                style={{fontFamily: "Urbanist"}}>340 513 2289 
              </Typography> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Home;
