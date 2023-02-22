import classNames from 'classnames';
function SidebarCard({children, className}) {

    const classes = classNames("bg-gray-100 px-4 py-4 rounded", className)

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default SidebarCard;