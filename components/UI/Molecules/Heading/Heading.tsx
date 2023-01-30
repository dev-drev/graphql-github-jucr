import React from "react";
import { Box } from "@mui/material";
import TypographyLink from "../../Atoms/Typography/TypographyLink";

// This is the Heading component that can be reused in different components and it allows us to customize it by using an icon or an image. It also allows us to pass in the id, name, and owner of the item that is being displayed.

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
