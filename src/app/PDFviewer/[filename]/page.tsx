const Page = ({ params }: { params: { filename: string } }) => {
  return (
    <object
      data={`/pdf/${params.filename}`}
      type='application/pdf'
      width='100%'
      height='100%'
    >
      <p>
        It appears you don&apos;t have a PDF plugin for this browser.
        <a href={`/pdf/${params.filename}.pdf`}>Download</a>
      </p>
    </object>
  )
}

export default Page
