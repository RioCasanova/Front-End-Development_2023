import { useRouter } from "next/router";
import { getAgency } from "@utils/api/agencies";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

import NavBar from "@components/NavBar";

export default function Agency() {
  const [agency, setAgency] = useState();
  // define the router
  const router = useRouter();

  const { agencyId } = router.query;
  useEffect(() => {
    if (!agencyId) {
      return;
    } // if not defined just exit
    loadAgencyData();
  }, [agencyId]); // will only change when it mounts

  const loadAgencyData = async () => {
    // retrieve backend
    const data = await getAgency(agencyId);
    // set it to state
    setAgency(data);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Typography>Agency Page For {agencyId}</Typography>
      </Container>
    </div>
  );
}
