// import { makeStyles } from '@material-ui/core'
import { makeStyles } from '@mui/styles';

const headerStyle = makeStyles((theme)=>(
    {
        wrapper:{
            display: "flex",
            alignItems: 'baseline',
        },
        headerLogo:{
            // width: '150px',
            width: '150px',
            margin: 'auto',
        },
    }
))
export default headerStyle;