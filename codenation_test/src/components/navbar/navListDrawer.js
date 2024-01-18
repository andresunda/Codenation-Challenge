//Styles for the footer
import './index.css'

//Material Layout of MaterialUI
import { Box } from '@mui/system'

//Material of material UI
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const NavListDrawer = ({ navLinks }) => {
    return (
        <>
            <Box className="box-list">
                <Divider />
                <nav>
                    <List>
                        {
                            navLinks.map(item => (
                                <ListItem
                                    disablePadding
                                    key={item.title}
                                >
                                    <ListItemButton
                                        component="a"
                                        href={item.path}
                                        onClick={item.onClick}
                                    >
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText>{item.title}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </nav>
            </Box>
        </>
    )
}
