import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { createApi } from "unsplash-js";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchAppBar from './components/NavBar/index';
import CustumizedCard from './components/CustamizedCard/index';
import LoadingSkeleton from './components/LoadingSkeleton/index';
import { Pagination } from '@mui/material';


const api = createApi({
  accessKey: "AvECU2Ns8XiUozX8RruJWRX5BqI5_ML9pWIc0hWWXBQ",
});

function App() {
  const [data, setPhotosResponse] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  const handlePageChange = (e, pageNum) =>{
    setPageNumber(pageNum - 1)
  };

  const fetchData = useCallback((pageNum, searchValue) => {
    setLoading(true)
    api.search
      .getPhotos({ query: searchValue || 'random' , orientation: "landscape", perPage: 20, page:pageNumber })
      .then((result) => {
        setPhotosResponse(result);
        setLoading(false)
      })
      .catch(() => {
        console.log("something went wrong!");
        setLoading(false)
      });

    window.scroll(0, 0)
}
, [])

  const handleSearch = ()=> {
    setPageNumber(0)
    fetchData(0, searchValue)
  };

  useEffect( ()=> {
    fetchData(pageNumber, searchValue)
  }, [fetchData, pageNumber]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{ bgcolor: 'linear-gradient(180deg, red, yellow)', minWidth:'100%' }} maxWidth="xl" >
        <Box sx={{ background: 'linear-gradient(180deg, red, yellow)', minHeight: '100vh', paddingBottom:10 }}>
          <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch}/>
          {loading?
            <LoadingSkeleton />
            :<Box display={"flex"} flex={4} justifyContent={"center"} alignItems={"start"}  flexWrap={"wrap"} flexDirection={'row'} >
              {
                data.response.results.map(item=><CustumizedCard key={item.id} {...item}/>)
              }
          </Box>
          }
          <Box display={"flex"} flex={4} justifyContent={"center"} alignItems={"start"}  flexWrap={"wrap"} flexDirection={'row'} marginTop={5} marginBottom={2}>
            {data?.response?.total_pages > 1 && <Pagination count={data?.response?.total_pages} color="secondary" onChange={handlePageChange} page={pageNumber+1} defaultValue={pageNumber+1}/>}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
    )
  }

export default App;