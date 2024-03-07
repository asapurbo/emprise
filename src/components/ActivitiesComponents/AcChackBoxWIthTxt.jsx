import Flex from "../commonComponents/Flex";
import Heading from "../commonComponents/Heading";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../commonComponents/Image";

const theme = createTheme({
  palette: {
    primary: {
      main: "#28B0A6",
    },
  },
});

const AcChackBoxWIthTxt = ({ headTxt, labelTxt, type }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const labeleAllTxt = labelTxt;
  return (
    <div>
      <div>
        <Heading
          text={headTxt}
          as="h3"
          className="text-base font-pop font-normal text-heardColor"
        />
      </div>

      {labeleAllTxt.map((item, index) => (
        <Flex key={index} className="items-center mt-3">
          <ThemeProvider theme={theme}>
            <Checkbox id={item.htmlFor} {...label} />
          </ThemeProvider>
          {type ? (
            <label
              htmlFor={item.htmlFor}
              className="text-base font-pop font-normal text-secondaryColor"
            >
              {item.labelTxt}
            </label>
          ) : (
            <div>
              <label htmlFor={item.htmlFor}>
                <Image src={item.labelTxt} />
              </label>
            </div>
          )}
        </Flex>
      ))}
    </div>
  );
};

export default AcChackBoxWIthTxt;
