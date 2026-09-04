import FontSizeProvider from "./_component/FontProvider"

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FontSizeProvider >
        <div>{children}</div>
    </FontSizeProvider>
  
    )
}