import dynamic from "next/dynamic";
const Content = () => {
  // https://github.com/vercel/next.js/discussions/11291#discussioncomment-4303
  const componentList = {
    Dashboard: dynamic(() => import("pages/dashboard")),
  };

  return <componentList.Dashboard />;
};
export default Content;
