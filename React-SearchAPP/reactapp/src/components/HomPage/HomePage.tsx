import { useState, useEffect } from 'react';
import { Typography, List } from "@mui/material";
import { API_KEY } from '../../Helpers/Helpers';
import axios from  'axios';
import Article from '../Article/Article';
import { ArticleObj } from '../../Helpers/interfaces';

const HomePage = () => {
    // todaysArticles
    const [todaysArticles, setTodaysArticles] = useState([]);
    // tu ściągnięte są dane z API
    useEffect(() => {
        const today = new Date();
        // console.log(today);
        const day = today.getDate(); //getDay - zwraca dzień tygodnia (sobota), getData - zwraca dzień miesiąca (21)
        const month = today.getMonth(); //getMonth - zwraca mumer miesiąca, ale są indeksowane od 0 (styczeń - 0, czerwiec - 5 !!!)
        const year = today.getFullYear(); // getFullYear - zwraca rok (2022)

        // 2022-10-22, 2022-01-15
        const date = `${year}-${month < 9 ? `0${month + 1}` : month + 1}-${day - 1}`;
        // console.log(date);

        //fetch...
        // axios vs fetch, react Query?
        axios.get(
            `https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
            ).then((response) => {
                // console.log(response.data.articles);
                setTodaysArticles(response.data.articles);
            }).catch((err) => {
                console.error(err.message);
            });

        // cleanup function:
        // return () => {} - funkcja, która uruchamia się podczas znikania komponentu z ekranu
    }, []);

    return (
        <>
        <Typography
              variant="h5"
              align="center"
              sx={{
                my: "1rem",
                fontFamily: 'Roboto',
                fontWeight: 400,
                letterSpacing: '.2rem',
                color: '#1976d2',
                textDecoration: 'none',
              }}
            >
              Today's hottest news:
            </Typography>
            <List 
            sx={{
                width:"100%",
                alignContent:"center",
              }}>
                {todaysArticles.length !== 0 && todaysArticles.map((art:ArticleObj) => {
                    return <Article art={art} key={art.title} /> 
                })}
            </List>
        </>
    )
}

export default HomePage;