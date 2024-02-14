import { Card, Box, Typography, CardContent } from '@mui/material';
import { useTranslation } from "react-i18next";
import { type FC } from "react"

interface ClosingSessionCardProps {
  closingSessionStatus?: string;
  closingBalance?: number;
  closingTime?: string;
  closingErrorDescription?: string;
}

const ClosingSessionCard:FC<ClosingSessionCardProps> = ({
  closingSessionStatus,
  closingBalance,
  closingTime,
  closingErrorDescription
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Box sx={{ minWidth: 355 }}>
        <Card >
          <CardContent>
            {closingSessionStatus === 'finished' ? (
              <>
                <Typography variant="h2" component="div" gutterBottom>
                  Closing Card
                </Typography>
                <Typography variant="subtitle1">
                amount
                </Typography>
                <Typography variant='h6' sx={{padding:0.6,border:1,borderStyle:'solid', borderColor:'#53585e',borderRadius:2}}>{closingBalance}</Typography>
                <Typography variant="subtitle1">
                Closed at
                </Typography>
                <Typography variant='h6' sx={{padding:0.6,border:1,borderStyle:'solid', borderColor:'#53585e',borderRadius:2}}>{closingTime}</Typography>
              </>
            ) : (
              <>
                <Typography variant="h4" component="div" gutterBottom>
                {t("SessionStatistic.ClosingCard.errorTitle")}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                {t("SessionStatistic.ClosingCard.errorBody")}
                </Typography>
                <Typography variant="subtitle1" component="div" gutterBottom>
                {closingErrorDescription === '404' ? (
                  t("SessionStatistic.ClosingCard.error404")
                  ) : closingErrorDescription === '202' ? (
                    t("SessionStatistic.ClosingCard.error202")
                    ) : 'null'}
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

export default ClosingSessionCard