import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKickstarter } from "@fortawesome/free-brands-svg-icons";
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { faAddressCard, faArrowCircleRight, faBoxesStacked, faCartShopping, faChevronRight, faHouseChimney, faPerson, faShirt } from "@fortawesome/free-solid-svg-icons";
const arr = [
  { name: "HomePage", icon: faHouseChimney },
  { name: "Product", icon: faShirt },
  { name: "Order", icon: faCartShopping },
  { name: "Custumer", icon: faPerson },
  { name: "Employee", icon: faAddressCard },
];
const App = () => {
  return (
    <Grid container className="" spacing={0} xs={12} md={12}>
      <Grid
        size={8}
        className="m-1 items-center flex justify-around w-full font-mono text-2xl font-bold"
      >
        <FontAwesomeIcon
          icon={faKickstarter}
          rotation={50}
          size="2xl"
          style={{ color: "#74C0FC" }}
        />
        Economic
      </Grid>
      <List className="w-full"  sx={{
          '--ListItem-paddingLeft': '0px',
          '--ListItemDecorator-size': '64px',
          '--ListItem-minHeight': '32px',
          '--List-nestedInsetStart': '13px',
          '& [role="button"]': {
            borderRadius: '10px',
          },
        }} >
        <ListItem className="flex  flex-col gap-2">
          {arr.map((el) => (
            <ListItemButton onClick={()=>{
              
            }} key={el.name} sx={{borderRadius:"lg"}} className="flex rounded-lg justify-around w-[200px]">
              <FontAwesomeIcon icon={el.icon}/>
              <ListItemText className="ml-2">{el.name}</ListItemText>
              <FontAwesomeIcon icon={faChevronRight} />
            </ListItemButton>
          ))}
        </ListItem>
      </List>
    </Grid>
  );
};

export default App;
