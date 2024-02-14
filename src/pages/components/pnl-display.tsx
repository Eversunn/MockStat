
import { Card, Typography } from "@mui/material";
import { type FC } from "react"

interface Props {
    PNL: number;
  }

const PnlDisplay: FC<Props> = ({ PNL }) => {
	const textColor = (PNL>0)  ? "#1aad8a" : "#eb4646";
    const content = (PNL>0)  ? "+"+PNL  : ""+PNL;
    
	return( <>
  <Card sx={{padding:2,border:1,borderStyle:'solid', borderColor:'#53585e'}}>
  <Typography variant='h5' sx={{color:textColor}}>{content}</Typography>
  </Card>
  </>
  )
};

export default PnlDisplay;


