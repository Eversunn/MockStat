import { Card, Box, Typography, CardContent } from '@mui/material';
import { useTranslation } from "react-i18next";
import { type FC } from "react"

interface InitialSessionCardProps {
  initialSessionStatus?: string;
  initialBalance?: number;
  initialTime?: string;
  initialErrorDescription?: string;

}

const InitialSessionCard:FC<InitialSessionCardProps> = ({  initialSessionStatus,
  initialBalance,
  initialTime,
  initialErrorDescription,})=>{
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ minWidth: 355 }}>
        <Card >
          <CardContent>
            {initialSessionStatus === 'started' ? (
              <>
                <Typography variant="h2" component="div" gutterBottom>
                Initial Balance
                </Typography>
                <Typography variant="subtitle1">
                amount
                </Typography>
                <Typography variant='h6' sx={{padding:0.6,border:1,borderStyle:'solid', borderColor:'#53585e',borderRadius:2}}>{initialBalance}</Typography>
                <Typography variant="subtitle1">
                Started At
                </Typography>
                <Typography variant='h6' sx={{padding:0.6,border:1,borderStyle:'solid', borderColor:'#53585e',borderRadius:2}}>{initialTime}</Typography>
              </>
            ) : (
              <>
                <Typography variant="h4" component="div" gutterBottom>
                {t("SessionStatistic.InitialCard.errorTitle")}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                {t("SessionStatistic.InitialCard.errorBody")}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                <Typography variant="subtitle1" component="div" gutterBottom>
                {initialErrorDescription === '404' ? (
                  t("SessionStatistic.InitialCard.error404")
                  ) : initialErrorDescription === '202' ? (
                    t("SessionStatistic.InitialCard.error202")
                    ) : 'null'}
                </Typography>
                </Typography>
              </>
            )
            }
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default InitialSessionCard