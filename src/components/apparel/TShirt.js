import UserImage from './Image'
import './TShirt.css'

const TShirt = () => {
    return (
        <>
            <h1>Customize T-Shirt</h1>
            <div id='divForCapture' className="tshirt">
                <div className="draggable-area">
                    <UserImage />
                </div>
            </div>
        </>
    )
}

export default TShirt