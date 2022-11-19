import { useContext, useState } from 'react';
import { ArticleProps } from '../../Helpers/interfaces';
import { Card, ListItem, ListItemText } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { authContext } from '../../Helpers/authContext';
import { auth, firestore } from '../../Helpers/firebaseConfig'
import { setDoc, doc, deleteDoc } from 'firebase/firestore';


// 2 propsy
const Article: React.FC<ArticleProps> = ({ art }) => {

    const [liked, setLiked] = useState<boolean>(false);
    const loggedIn = useContext(authContext);

    const likeTheArticle = async () => {
        if (loggedIn && auth.currentUser) {
            await setDoc(doc(firestore, auth.currentUser.uid, art.title), art);
            setLiked(true);
        }
    }

    const unlikeTheArticle = async () => {
        if (loggedIn && auth.currentUser) {
            await deleteDoc(doc(firestore, auth.currentUser.uid, art.title));
            setLiked(false);
        }
    }

    const iconStyles = {
        float:"right", 
        mr:"3px", 
        my:"3px", 
        color: liked ? "red" : "black",
};

    return(
        <ListItem>
            <Card variant="outlined" sx={{mb:"10px"}}>
                <a href={art.url} target="_blank" style={{textDecoration: "none"}}>
                    <img src={art.urlToImage} alt={art.title} style={{width:"100%"}} />
                    <ListItemText sx={{ color:"black", textAlign:"center" }}>
                        {art.title}
                    </ListItemText>
                </a>
                {loggedIn && <>
                {liked ? <FavoriteIcon sx={iconStyles} onClick={unlikeTheArticle} /> : <FavoriteBorderIcon sx={iconStyles} onClick={likeTheArticle} />}
                </>}
            </Card>
        </ListItem>
    )
};

export default Article;