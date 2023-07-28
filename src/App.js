import Head from './componets/Head/Head'
import { Fragment } from 'react';
import Form from './componets/Form/Foem';
import AddUser from './componets/AddUser/AddUser';
const App = props => {
  return (
    <Fragment>
      <Head/>
      <Form/>
      <AddUser/>
      </Fragment>

  )
}

export default App;
