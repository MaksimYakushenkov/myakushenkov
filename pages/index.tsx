import { useState } from 'react';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {

  return (
    <>
    </>
  );
}

export default withLayout(Home);

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const firstCategory = 0;
//   const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
//     firstCategory
//   });
//   return {
//     props: {
//       menu,
//       firstCategory,
//     }
//   };
// };

interface HomeProps extends Record<string, unknown> {

}