function SecureTransactionIcon(props) {
    const {children} = props
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a6 6 0 00-6 6v4H5a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V13a1 1 0 00-1-1h-1V8a6 6 0 00-6-6zm-4 6a4 4 0 118 0v4H8V8zm9 6v8H7v-8h10zm-5 3a1 1 0 10-2 0 1 1 0 002 0z"/>
            {children}
        </svg>
    )
}

export default SecureTransactionIcon