import { NextPage, GetStaticProps } from 'next';

interface FaqsPageProps {}

const FaqsPage: NextPage<FaqsPageProps> = ({}) => {
  return (
    <div>FaqsPage</div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default FaqsPage;