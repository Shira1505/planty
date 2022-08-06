import { Box } from "@mui/system";
const FlexBox = ({
    children,
    ...props
}) => <Box display="flex" {...props}>
  hi
    {children}
  </Box>;

FlexBox.defaultProps = {
  display: "flex"
};
export default FlexBox;