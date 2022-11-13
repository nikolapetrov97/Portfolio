'use client'
import RingLoader from "react-spinners/RingLoader";

type Props = {}

function Loading({ }: Props) {
    return (
        <div style={{
            background: 'black',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10000
        }}>
            <div style={{
                WebkitTransform: 'translate(-50%,-50%)',
                transform: 'translate(-50%,-50%)',
                position: 'fixed',
                top: '50%',
                left: '50%',
                zIndex: 99
            }}>
                <RingLoader
                    color="#F7AB0A"
                    loading={true}
                    size={90}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    speedMultiplier={1.5}
                />
            </div>
        </div >
    )
}

export default Loading