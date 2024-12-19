// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView } from 'react-native';
import MovieList from './MovieList';

const shounen = [
  {
    id: "1",
    image: {uri: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/ff18ec2d3a400d17921ad9b3a03045ce.jpe'},
    title: "Ao No Exorcist",
    genre: [
      "Shounen",
    ],
    fav: [
      "⭐⭐⭐⭐",
    ],
  },
  {
    id: "2",
    image : {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3vjKEAH86rVI_tNlTKonflsWlfsPMDO_PQ&s'},
    title: "Kimetsu No Yaiba",
    genre: [
      "Shounen",
    ],
    fav: [
      "⭐⭐⭐⭐",
    ],
  },
  {
    id: "3",
    image : {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRT5jT2l0S_P6sKGtiLCN04aMkhzu4UADiTw&s'},
    title: "Captain Tsubatsa",
    genre: [
      "Shounen",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "4",
    image : {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrUInHAoXdKfNUCctQRtnXRtb5YhznX0kGg&s"},
    title: "Boku No Hero",
    genre: [
      "Shounen",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "5",
    image : {uri:"https://m.media-amazon.com/images/M/MV5BZDE0ZTRhMTQtMTIzNC00NjY4LTllMmEtYjY4Y2ZlZmZlODU0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg"},
    title: "Mashle",
    genre: [
      "Shounen",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
];

const action = [
  {
    id: "1",
    image: {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0CIHwn4_bkYbwRIQauRgHU4AwlXqAahKcCA&s'},
    title: "Dark Gatering",
    genre: [
      "Action",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "2",
    image : {uri: 'https://m.media-amazon.com/images/M/MV5BNDU0OGY4ZjUtZDFmMS00Y2M1LTg5NTUtYjRiZTY0OTdjYWFmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg'},
    title: "Berserk",
    genre: [
      "Action",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "3",
    image : {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqs8xVdn2Ql5fy2405F8iHBCh7TmUL0HZuxQ&s'},
    title: "Devilman",
    genre: [
      "Action",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "4",
    image : {uri:"https://m.media-amazon.com/images/M/MV5BOTM5ZjA2YWMtYjY3Ny00ZDU1LTk1NjYtMzhjMGY5ZmZkMzgwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"},
    title: "Tokyo Ghoul",
    genre: [
      "Action",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "5",
    image : {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSwGSWl3SkZJPpZDzmYZMMnXu_BAq_Yd34w&s"},
    title: "HoTD",
    genre: [
      "Action",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
];

const advent = [
  {
    id: "1",
    image: {uri: 'https://m.media-amazon.com/images/M/MV5BOTE4OGI2NzYtNzE4MC00NGJlLTgwZTItN2Y3OTljMzFhODllXkEyXkFqcGdeQXVyNjA5MDIyMzU@._V1_.jpg'},
    title: "The New Gate",
    genre: [
      "Adventure",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "2",
    image : {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyp73aoLrABxZsWtDazUFe6VD9Y00-Lp6zSg&s'},
    title: "Tensei Shitara Slime",
    genre: [
      "Adventure",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "3",
    image : {uri: 'https://awsimages.detik.net.id/community/media/visual/2024/04/20/top-7-cover-terbaik-manga-one-piece-6.webp?w=700&q=90'},
    title: "One Piece",
    genre: [
      "Adventure",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
  {
    id: "4",
    image : {uri:"https://s.pacn.ws/1/p/15p/goblin-slayer-another-adventurer-nightmare-feast-multilanguage-750787.3.jpg?v=s2g7sx"},
    title: "Goblin SLayer",
    genre: [
      "Adventure",
    ],
    fav: [
      "⭐⭐⭐⭐⭐",
    ],
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.head}>NIMEFLIX</Text>
        <MovieList movies={shounen}/>
        <Text style={styles.subHead}>Recommended For You</Text>
        <MovieList movies={action}/>
        <Text style={styles.subHead}>Favourite Series</Text>
        <MovieList movies={advent}/>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
      marginTop: 30,
    },
    head: {
      margin: 10,
      fontSize: 23,
      fontWeight: "bold",
      color: "red",
      alignSelf: "center",
      marginBottom: 0,
      marginTop: 14,
    },
    subHead: {
      margin: 10,
      fontSize: 14.5,
      fontWeight: "bold",
      color: "#fff",
      marginTop: 14,
      marginBottom: -5,
      marginLeft: 23,
    },
});

export default App;