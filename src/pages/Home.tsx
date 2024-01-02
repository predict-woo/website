import profile from "assets/profile.png";
import PixelImage from "components/PixelImage";
import js from "assets/logo/js.png";
import c from "assets/logo/c.png";
import python from "assets/logo/python.png";
import scala from "assets/logo/scala.png";
import ts from "assets/logo/ts.png";
import react from "assets/logo/react.png";
import git from "assets/logo/git.png";
import nestjs from "assets/logo/nestjs.png";
import aws from "assets/logo/aws.png";
import terraform from "assets/logo/terraform.png";
import svelte from "assets/logo/svelte.png";
import vite from "assets/logo/vite.png";
import firebase from "assets/logo/firebase.png";

import { colors } from "theme";

const Home = () => {
  const mobile = window.innerWidth < 500;
  return (
    <div
      css={{
        height: "200vh",
        padding: "10px",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: mobile ? "30px" : "75px",
          gap: "10px",
        }}
      >
        <div
          css={{
            textShadow: "4px 4px " + colors.black,
            fontSize: mobile ? "48px" : "72px",
            textAlign: "center",
          }}
        >
          Welcome to
        </div>
        <div
          css={{
            textShadow: "4px 4px " + colors.black,
            fontSize: mobile ? "24px" : "48px",
            textAlign: "center",
          }}
        >
          predict-woo's Website
        </div>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontSize: mobile ? "18px" : "24px",
        }}
      >
        <div>
          <p>Hello world!</p>
          <p>
            I’m Sangwoo Ye, a student at Korea Advanced Institute of Science &
            Technology.
          </p>
          <p>
            I usually develop frontend websites, but have the skillset for
            simple full-stack development. I mostly develop with React, but
            personally prefer Svelte, otherwise known as the most loved
            javascript framework.
          </p>
          <p>This website is developed with React.</p>
          <p>
            I also do alot of network reverse engineering, usually with packet
            sniffing and ssl proxies. I'm interested in cryptography and network
            security. I use some of these discoveries to make web services for
            users.
          </p>
          <p>
            I code for fun, and I'm always looking for new things to learn. You
            can find my contact information at the top of the page.
          </p>
        </div>

        <img
          src={profile}
          css={{
            maxWidth: "400px",
            minWidth: "200px",
            objectFit: "contain",
            boxShadow: "10px 10px " + colors.cyan,
          }}
        />
      </div>
      <h1>Languages</h1>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <PixelImage src={js} amount={2} height="50px" />
        <PixelImage src={ts} amount={2} height="50px" />
        <PixelImage src={c} amount={6} height="50px" />
        <PixelImage src={python} amount={3} height="50px" />
        <PixelImage src={scala} amount={5} height="50px" />
      </div>
      <h1>Tools</h1>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <PixelImage src={git} amount={2} height="50px" />
        <PixelImage src={react} amount={2} height="50px" />
        <PixelImage src={svelte} amount={2} height="50px" />
        <PixelImage src={vite} amount={7} height="50px" />
        <PixelImage src={nestjs} amount={2} height="50px" />
        <PixelImage src={aws} amount={4} height="50px" />
        <PixelImage src={terraform} amount={3} height="50px" />
        <PixelImage src={firebase} amount={6} height="50px" />
      </div>
    </div>
  );
};

export default Home;
