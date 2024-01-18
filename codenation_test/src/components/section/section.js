import './index.css'

export const SectionPort = ({ children }) => {
    return (
        <>
            <div className='section-component-portrait'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export const SectionInfo = ({ children }) => {
    return (
        <>
            <div className='section-component-info'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </>
    )
}
