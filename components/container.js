export default function Container({ children, className }) {
  return(
    <div className={`px-[20px] lg:px-[30px] ${className}`}>
      {children}
    </div>
  )
}