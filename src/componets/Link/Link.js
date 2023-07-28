import classes from './Link.module.css'
const Link =(props)=>{
    return (
        <ul className={classes.link}>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
            <li> Contact Github</li>
        </ul>
    )

}
export default Link;