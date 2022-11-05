import React from 'react'
import { ArticleProps } from '../../Helpers/interfaces';
import { Card, ListItem, ListItemText } from "@mui/material";


// 2 propsy
const Article: React.FC<ArticleProps> = ({art}) => {
    console.log(art);
    return(
        <ListItem>
            <Card variant="outlined" sx={{mb:"10px"}}>
                <a href={art.url} target="_blank" style={{textDecoration: "none"}}>
                    <img src={art.urlToImage} alt={art.title} style={{width:"100%"}} />
                    <ListItemText sx={{ color:"black", textAlign:"center" }}>
                        {art.title}
                    </ListItemText>
                </a>
            </Card>
        </ListItem>
    )
};

export default Article;

// <ul> => <List>
// <li> => <ListItem>