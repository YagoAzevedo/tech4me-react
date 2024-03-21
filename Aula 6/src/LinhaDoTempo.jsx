import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const LinhaDoTempo = ({ passo, encomenda }) => {
  return (
    <>
      {encomenda && (
        <Stepper activeStep={passo} alternativeLabel>
            <Step key={"pedido-feito"}>
            <StepLabel>
                <strong>{"Pedido feito "} </strong>
                <Typography variant={"cation"} sx={{ color: "#5c5858" }}>
                {encomenda?.historico?.[0]?.data}
                </Typography>
            </StepLabel>
            </Step>
            <Step key={"em-rota"}>
            <StepLabel>
                <strong>{"Pedido em rota "}</strong>
                <Typography variant={"cation"} sx={{ color: "#5c5858" }}>
                {encomenda?.historico?.[1]?.data}
                </Typography>
            </StepLabel>
            </Step>
            <Step key={"entregue"}>
            <StepLabel>
                <strong>{"Entregue "}</strong>
                <Typography variant={"cation"} sx={{ color: "#5c5858" }}>
                {encomenda?.historico?.[2]?.data}
                </Typography>
            </StepLabel>
            </Step>
        </Stepper>
      )}
    </>
  );
};

export default LinhaDoTempo;
