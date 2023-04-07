import dynamic from "next/dynamic";

//추후 any 말고 컴포넌트 타입으로 변경 필요. any사용은 안좋음
export default function Widget({
  id,
  componentId,
}: {
  componentId: string;
  id: string;
}): React.ReactElement {
  const DynamicWidget = dynamic<any>(() => import(`./${componentId}`), {
    loading: () => <p>Loading...</p>,
  });
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DynamicWidget componentId={componentId} id={id} />
    </div>
  );
}
