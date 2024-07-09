function InstantDeliveryIcon(props) {
    const {children} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 3H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h1v2h16v-2h1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-3V1h-2v2zm-8 4h8v8H7V7zm9 9H6c-.55 0-1 .45-1 1v3h14v-3c0-.55-.45-1-1-1zm-8 1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm6-1h-2v-2h2v2zm-6-4h8v3H7v-3z" fill="#000"/>
            {children}
        </svg>
    )
}

export default InstantDeliveryIcon