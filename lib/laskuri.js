export const getStaticPaths = async ({ locales }) => {
  const url = `http://localhost:5020/api/laskuridata`;
  const result = await fetch(url).then((res) => res.json());
  const paths = [];



  result.map((element) => {
    const encodedId = encodeURIComponent(element.page.toString()); 
    return paths.push({
      params: { page: encodedId },

    }); 
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const page = encodeURIComponent(context.params.page); 
  const kieli = encodeURIComponent(context.locale); 

  let res = await fetch(
    "http://localhost:5020/api/laskuridata?laskurinsivu=" +
      encodeURIComponent(page) +
      "&kieli=" +
      kieli
  );
  const sivu = await res.json();
 

  return {
    props: {
      page: sivu,
    },
    revalidate: 100,
  };
};
