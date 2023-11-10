import "./Leaf.css";
import Icon_download from "../icons/icon_download.jsx";
import curriculo from "../pdf/port.pdf"

function Leaf () {
    return (
        <div id="container-leaf">
            <h1>Deivis Fernández, Currículo</h1>
            <a href={curriculo} download="curriculo" id="container-leaf__download">
                DownLoad
                <i id="container-leaf__container-icon"><Icon_download /></i>
            </a>
        </div>
    )
}


export default Leaf;