import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import  Typography  from '@mui/material/Typography';
function ElevationScroll(props) {
    const { children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  


export default function Header() {
    return (
        <ElevationScroll>
            <AppBar color="primary">
          <Toolbar>
            <Typography variant="h3">Arc Development</Typography>
                    
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}
