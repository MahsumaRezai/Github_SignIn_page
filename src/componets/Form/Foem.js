import classes from './Form.module.css'
import Button from '../Button/Button';
const Form = (props) => {
    return (
        <form className={classes.form}>
            <div className={classes.content}>
                <label>Username or email address</label>
                <input className={classes.input}></input>

                <label>Password</label>
                <input className={classes.input}></input>
                <Button>Sign In</Button>
            </div>

        </form>
    )
}
export default Form;