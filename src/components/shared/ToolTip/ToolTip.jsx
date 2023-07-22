import { Tooltip } from 'react-tooltip'
const ToolTip = ({ id, tooltipContent, children }) => {
    return (
        <>
            {children}
            <Tooltip
                id={id}
                place='bottom'
                type='info'
                effect='solid'
                className='tooltip'
                arrowColor='var(--button-color)'
                delayShow={500}
                delayHide={500}
            >
                {tooltipContent}
            </Tooltip>
        </>
    )
}

export default ToolTip
