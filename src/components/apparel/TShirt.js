import UserImage from './Image'
import './TShirt.css'

const TShirt = (props) => {
    const {design} = props
    console.log(design)
    return (
        <>
            <h1>Customize T-Shirt</h1>
            <div id='divForCapture' className="tshirt">
                <div className="draggable-area">
                    <UserImage design={design} />
                </div>
            </div>
        </>
    )
}

export default TShirt