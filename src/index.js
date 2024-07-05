import ReactDOM from "react-dom/client"

function App(){
    return(
        <div>KAIWA sdk</div>
    )
}

const contianer = document.getElementById("kaiwa")
const root = ReactDOM.createRoot(contianer)
root.render(<App/>)