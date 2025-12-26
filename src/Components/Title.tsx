interface TitleProps{
    title:string
}
function Title({title}:TitleProps) {
  return (
    <div>
        <h1 className="text-center uppercase text-2xl">
            {title}
        </h1>
    </div>
  )
}

export default Title