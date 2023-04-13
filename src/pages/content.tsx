import dynamic from "next/dynamic";

const Content = () => {
  const menus = [
    {
      key: "dashboard",
      name: "대시보드",
      path: "./dashboard",
    },
  ];
  const currentPage = menus[0];

  const Page = dynamic<any>(() => import(`${currentPage.path}`), {
    loading: () => <p>Loading...</p>,
  });
  return <Page></Page>;
};
export default Content;
