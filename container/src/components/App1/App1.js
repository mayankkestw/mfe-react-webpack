import React from "react";
const RemoteApp = React.lazy(() => import('app1/Home'))

const App1 = () => {
    return (
        <React.Suspense fallback="Loading App1">
            <RemoteApp />
        </React.Suspense>
    )
}

export default App1;