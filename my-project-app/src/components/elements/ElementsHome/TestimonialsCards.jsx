import PersonIcon from '../ElementsHome/img/Person Icon.png';
function TestimonialsCards(props) {
    const {children, bg} = props
    return (
        <div className={`flex items-center bg-${bg} p-6 rounded-lg shadow-md`}>
            <img src={PersonIcon} alt="Person 1" className="w-12 h-12 mr-4 rounded-full" />
            {children}
        </div>
    )
}

export default TestimonialsCards