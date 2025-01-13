import {Button} from '@mui/material'

const ButtonComponent = (props) => {
  return (
   
    <Button 
    className="text-3xl md:text-3xl lg:text-5xl font-bold mb-2"
   
    href={props.href}
    type={props.type}
    download={props.download}
            sx={{
              backgroundColor: '#0284c7', 
              width: props.width,
              "&:hover": {
                backgroundColor: "#0ea5e9", 
              },
            }}
            variant="contained"
          >
           {props.children}
          </Button>

  )
}

export default ButtonComponent
