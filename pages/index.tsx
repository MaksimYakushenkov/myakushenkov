import { Collab, Portfolio, Services } from '../components';
import { About } from '../components/About/About';
import { Stickers } from '../components/Stickers/Stickers';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {

  return (
    <>
    <About />
    <Stickers />
    <Services />
    <Portfolio />
    <Collab />
    </>
  );
}

export default withLayout(Home);

interface HomeProps extends Record<string, unknown> { }