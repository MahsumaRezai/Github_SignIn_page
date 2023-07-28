import Head from './componets/Head/Head'
import { Fragment } from 'react';
import Form from './componets/Form/Foem';
import AddUser from './componets/AddUser/AddUser';
import Link from './componets/Link/Link';
const App = props => {
  return (
    <Fragment>
      <Head/>
      <Form/>
      <AddUser/>
      <Link/>
      </Fragment>

  )
}

export default App;
