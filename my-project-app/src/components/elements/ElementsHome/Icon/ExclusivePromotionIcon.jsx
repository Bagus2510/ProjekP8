function ExclusivePromotionIcon(props) {
    const {children} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="#FFD700" /> 
            <path d="M8 12a4 4 0 110-8 4 4 0 010 8zm-4-4a4 4 0 108 0 4 4 0 00-8 0zm4-1a1 1 0 112-0 1 1 0 01-2 0zm2 6h2v-2h-2v2zm-2-6h2V9h-2v2zm4 0h2V9h-2v2z" fill="#FFF" />
            {children}
        </svg>
    )
}

export default ExclusivePromotionIcon