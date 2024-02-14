import { FC, useEffect, useState} from "react";
import {useParams,Navigate} from "react-router-dom";
import {Box, Container, Stack, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
import InitialSessionCard from "../components/initial-card";
import ClosingSessionCard from "../components/closing-card";
import FilledOrderTable from "../components/FilledOrderTable";
import PnlDisplay from "../components/pnl-display";
const initialState: TradingSessionState = { isLoading: true, error: false };



export const SessionStatistic: FC = () => {

  const { t } = useTranslation();
  const [initialSessionStatus, setInitialSessionStatus] = useState('pending');
  const [initialBalance, setInitialBalance] = useState(0);
  const [initialErrorDescription, setInitialErrorDescription] = useState('404');
  const [initialTime, setInitialTime] = useState('time')
  const [closingSessionStatus, setClosingSessionStatus] = useState('pending');
  const [closingBalance, setClosingBalance] = useState(0);
  const [closingErrorDescription, setClosingErrorDescription] = useState('404');
  const [closingTime, setClosingTime] = useState('time')
  const [orderTable, setOrderTable] = useState<TradingSessionState>(initialState);
  const { sessionId } = useParams();
  const [PNL, setPNL] = useState(0)

  useEffect(() => {
		const loadSession = async () => {
			try {
				setOrderTable((prev) => ({ ...prev, isLoading: true }));
				const [filledOrders,res] = [[
          {orderId: '0a41cecf-1904-4a09-bb39-2ecf8465a526', sessionId: '3a5d56e7-4234-42a4-83d0-b872e5cb2bdc', marketPrice: '46058.9', orderType: 'MARKET', status: 'FILLED'},
          {orderId: '1d8d5853-a509-47fb-9c22-cdf122bfe234', sessionId: '3a5d56e7-4234-42a4-83d0-b872e5cb2bdc', marketPrice: '46055.6', orderType: 'MARKET', status: 'FILLED'},
          {orderId: 'b4ffde57-57bc-438f-a513-a3f62109c405', sessionId: '3a5d56e7-4234-42a4-83d0-b872e5cb2bdc', marketPrice: '46352.5', orderType: 'TRIGGER_MARKET', status: 'FILLED'},
          {amount:"0.00130000",exchangeOrderId: "1755785787339923456",fee: "0",filledAt: "2024-02-09T02:55:18.267Z",marketPrice: "46350",orderId: "69a557fc-0343-4451-bdc6-a9b484dfb37f",orderPositionSide: "SHORT",orderSide: "SELL",orderType
            : 
            "TRIGGER_MARKET",
            profitRule
            : 
            "null",
            sessionId
            : 
            "3a5d56e7-4234-42a4-83d0-b872e5cb2bdc",
            status
            : 
            "FILLED",
            stopPrice
            : 
            "null"},
          {orderId: '4992dcdc-3238-4598-9112-2842373a6823', sessionId: '3a5d56e7-4234-42a4-83d0-b872e5cb2bdc', marketPrice: '46265.8', orderType: 'MARKET', status: 'FILLED'},
          {orderId: 'ac725a93-4b55-41c3-869c-54310b12c11b', sessionId: '3a5d56e7-4234-42a4-83d0-b872e5cb2bdc', marketPrice: '46255.7', orderType: 'MARKET', status: 'FILLED'}],{ok:true,status:200,statusText:'Hello'}]
				if (!res.ok) throw new Error(res.statusText);
				setOrderTable((prev) => ({ ...prev, orders: filledOrders, isLoading: false }));
			} catch (err) {
				console.error(err);
				setOrderTable((prev) => ({ ...prev, isLoading: false, error: true }));
			}
		};
    const loadClosingBalance = async () => {
      try {
        const [balance, response] = await [48.9003,{ok:true,status:200}]
        if (response.ok) {
          setClosingBalance(balance);
          setClosingSessionStatus('finished');
        } else if (response.status == 404) {
          setClosingErrorDescription('404')
        } else if (response.status == 202) {
          setClosingErrorDescription('202')
        }
      }
      catch (error) {
        console.error('Error fetching closing balance:', error);
      }
    };


    const loadClosingTime = async () => {
      try {
        const [completeDate, response] = ['Fri, 09 Feb 2024 02:56:23 GMT',{ok:true,status:200}]
        if (response.ok) {
          setClosingTime(completeDate)
        }
      }
      catch (error) {
        console.error('Error fetching closing time:', error);
      }
    };
    const loadInitialBalance = async () => {
      try {
        const [balance, response] = [48.8656,{ok:true,status:200}]
        if (response.ok) {
          setInitialBalance(balance);
          setInitialSessionStatus('started');
        } else if (response.status == 404) {
          setInitialErrorDescription('404')
        } else if (response.status == 202) {
          setInitialErrorDescription('202')
        }
      } catch (error) {
        console.error('Error fetching initial balance:', error);
      }
    };
    const loadInitialTime = async () => {
      try {
        const [startDate, response] = ['Fri, 09 Feb 2024 02:48:52 GMT',{ok:true,status:200}]
        if (response.ok) {
          setInitialTime(startDate)
        }
      }
      catch (error) {
        console.error('Error fetching start time:', error);
      }
    };
    const loadPNL = async () => {
      try {
        const [pnl, response] = [0.03470000000000084,{ok:true,status:200}]
        if (response.ok) {
          setPNL(pnl)
        }
      }
      catch (error) {
        console.error('Error fetching start time:', error);
      }
    };
    loadSession();
    loadInitialBalance();
    loadInitialTime();
    loadClosingBalance();
    loadClosingTime();
    loadPNL();
    // setPNL(calculatePnl(initialBalance,closingBalance));
  }, [initialBalance,closingBalance,sessionId]);
  const initialSessionProp = {
    initialSessionStatus: initialSessionStatus,
    initialBalance: initialBalance,
    initialTime: initialTime,
    initialErrorDescription: initialErrorDescription
  };
  const closingSessionProp = {
    closingSessionStatus: closingSessionStatus,
    closingBalance: closingBalance,
    closingTime: closingTime,
    closingErrorDescription: closingErrorDescription
  };

    return <main>
        <Container className="container">
            <Typography variant="h1" gutterBottom>Session Statistic</Typography>
            <Stack direction='row'sx={{margin:4,gap:2, flexDirection:{xs:'column',md:'row'}}}>
                <InitialSessionCard {...initialSessionProp} />
                <ClosingSessionCard {...closingSessionProp}/>
            </Stack>
            <Stack direction='row' sx={{gap:20}}> 
            <Box sx={{}}>
            <Typography variant='h4' sx={{marginBottom:1}}>PNL</Typography>
                <PnlDisplay PNL={PNL}/>
            </Box>
            </Stack>
            <Typography variant="h1" sx={{margin:4}}>Filled Order List</Typography>
            <Box>
            <FilledOrderTable {...orderTable} mode="collapsed"/>
            </Box>
        </Container>
    </main>
}


