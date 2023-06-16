import '../styles/SelectionAlert.css';

export default function SelectionAlert(props) {
    const { alertMsg, setAlertMsg } = props;

    function clearAlertBar() {
        setTimeout(function() {
            setAlertMsg('none');
        }, 1500)
    }

    return (
        <div className='alert-container'>
            {  
                alertMsg !== 'none' &&
                <div className='alert-p'
                    style={{'backgroundColor': 
                    `${alertMsg === 'correct' ? 'limegreen' : 'red'}`,
                    'opacity': 1
                }}
                >{alertMsg}
                    <p className='.hide'>
                        {clearAlertBar()}
                    </p>
                </div>
                
            }
        </div>
    )
}