import HoverLink from "./HoverLink";
import { colors } from "theme";

type Route = {
  name: string;
  path: string;
};

type Props = { routes: Route[] };

const Header = ({ routes }: Props) => {
  return (
    <div
      css={{
        background: colors.cyan,
        padding: "0 30px",
        height: "50px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        gap: "10px",
        zIndex: 100,
      }}
    >
      {routes.map((route) => (
        <HoverLink {...route} />
      ))}
    </div>
  );
};

export default Header;
