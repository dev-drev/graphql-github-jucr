import React from "react";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { Box } from "@mui/material";
import TypographyLink from "../../Typography/TypographyLink";
import theme from "../../../../services/theme";
import NextImage from "next/image";
type Props = {
  id: string;
  name: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  owner?: {
    login: string;
  };
};

const Heading = (props: Props) => {
  const { id, icon, name, owner, imageUrl } = props;

  return (
    <div>
      {" "}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {icon && icon}
        {imageUrl && (
          <img
            src={imageUrl}
            width={20}
            height={20}
            alt={`${name} pic`}
            style={{ borderRadius: 5 }}
          />
        )}
        <TypographyLink id={id} name={name} owner={owner} />
      </Box>
    </div>
  );
};

export default Heading;
