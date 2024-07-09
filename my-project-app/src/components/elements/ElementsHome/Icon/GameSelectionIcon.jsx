function GameSelectionIcon(props) {
    const {children} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2v2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zM7 4h10v2H7V4zm12 16H5V8h14v12zM7 12h2v2H7v-2zm2 3h2v2H9v-2zm3-3h2v2h-2v-2zm2 3h2v2h-2v-2zm-5-6h8v2H7v-2z"/>
            {children}
        </svg>
    )
}  

export default GameSelectionIcon