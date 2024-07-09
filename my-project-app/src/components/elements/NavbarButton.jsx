function Button(props) {
    const { children } = props
    return (
      <button className="hover:bg-purple-500 rounded-full transition-all px-4 py-2 delay-150 duration-300" type="submit">
        {children}
      </button>
    )
  }
  
  export default Button