import './text-converter.css'


const TextConverter = (props) => {

    return (

        <>

            <div className="container" style={{ color: props.fontColor }}>

                {props.children}

            </div>

        </>

    )
}

TextConverter.defaultProps = {

    fontColor: '#242424'

}

export default TextConverter