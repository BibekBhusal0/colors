function SingleColor({
  color,
  name = "Unnamed Color",
}: {
  color: string;
  name?: string;
}) {
  const hexRegEx = /^#([0-9A-F]{3}){1,2}$/i;
  const rgbRegEx =
    /^rgba\((\d{1,3}),\s(\d{1,3}),\s(\d{1,3}),\s(\d*(\.\d+)?)\)$/i;
  if (!hexRegEx.test(color) && !rgbRegEx.test(color)) return null;

  return (
    <div className="flex flex-col gap-2 p-1 border-green-200 rounded-md text-center border-2">
      <div className="h-36" style={{ backgroundColor: color }}></div>
      <div className="text-xl">
        <div>{name}</div>
        <div>{color}</div>
      </div>
    </div>
  );
}

export default SingleColor;
