import ImageSlider from "./ImageSlider";
function Home() {

    const slides = [
      {
        url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "BWM",
      },
      {
        url: "https://images.unsplash.com/photo-1578847945645-05da1befc0c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVuenxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Gwagon",
      },
      {
        url: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG95b3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title: "Toyota Geep",
      },
      {
        url: "https://images.unsplash.com/photo-1592857723369-03e2e792626d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGV4dXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Lexus",
      },
      {
        url: "https://images.unsplash.com/photo-1541410374363-986ee54b03f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG5pc3NhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Nissan"
      },
    ];

    const containerStyle = {
        width: "100%",
        height: "400px",
        margin: "0 auto"
    }

    return (
        <div>
            <div style={containerStyle}>
                <ImageSlider slides={slides}/>
            </div>
        </div>
    );
}

export default Home;