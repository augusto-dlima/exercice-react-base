import './button.css'


const textButton = text => alert(`A label desse botão é ${text}`)

const Button = (props) => {
    return (
        <>

            <button
                className='btn'
                onClick={() => { textButton(props.title) }}  >

                {props.title}

            </button>

        </>
    )
}

Button.defaultProps = { title: 'clique aqui' }
export default Button