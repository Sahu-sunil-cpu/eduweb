import SubjectStructx from "../../components/Subject"


export default async function SubjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <SubjectStructx id={id}/>
}