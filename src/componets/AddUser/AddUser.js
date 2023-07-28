import classes from './Add.module.css'
const AddUser = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.text}>
                <span>New to GitHub?</span>
                <a href>
                    Create an account.
                </a>
            </div>

        </div>

    )
}
export default AddUser;