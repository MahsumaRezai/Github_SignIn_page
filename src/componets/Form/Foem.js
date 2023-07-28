import classes from './Form.module.css'
const Form = (props) => {
    return (
        <form className={classes.form}>
            <div className={classes.content}>
                <label>Username or email address</label>
                <input className={classes.input}></input>

                <label>Password</label>
                <input className={classes.input}></input>
                <button>send</button>
            </div>

        </form>
    )
}
export default Form;